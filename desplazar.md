# Swipe Navigation — Documentación Técnica

## Cómo funciona el desplazamiento entre secciones

El portfolio implementa navegación por **gestos de toque (swipe)** nativos sin dependencias externas. Al deslizar el dedo hacia la izquierda o derecha, el usuario navega entre las tres secciones: Studies → Experience → Skills.

---

## Arquitectura Técnica

### 1. Array ordenado de secciones

```typescript
const SECTIONS: Section[] = ['studies', 'experience', 'skills'];
```

Define el **orden fijo e inmutable** de las secciones. Esto permite:
- Calcular "siguiente sección" sumando 1 al índice
- Calcular "sección anterior" restando 1 al índice
- Usar `Math.min` y `Math.max` para establecer límites naturales (no se puede ir más allá del inicio o fin)

**Ventaja:** Si en el futuro añades más secciones (ej: "Projects"), solo cambias este array — la lógica de navegación sigue funcionando.

### 2. `useRef` para guardar estado transitorio

```typescript
const touchStartX = useRef<number | null>(null);
```

Se usa **`useRef` en lugar de `useState`** porque:
- No necesita **dispara un re-render** cuando cambia
- Es un dato ephemeral de "memoria interna" que existe solo durante el gesto actual
- Es más eficiente: no causa renderizados innecesarios
- Se reinicia a `null` después de cada gesto completado

**Comparación:**
- `useState` → cambio = re-render (costoso para datos temporales)
- `useRef` → cambio = sin re-render (eficiente para datos internos)

### 3. Captura inicial: `onTouchStart`

```typescript
const handleTouchStart = useCallback((e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
}, []);
```

Cuando el dedo **toca la pantalla**:
- `e.touches[0]` → primer dedo que toca (soporte para multi-touch)
- `.clientX` → posición horizontal en píxeles del viewport
- Se guarda en `touchStartX.current` para comparar después

**Ejemplo:** Si el dedo toca en x=200, `touchStartX.current = 200`

### 4. Cálculo de dirección: `onTouchEnd`

```typescript
const deltaX = e.changedTouches[0].clientX - touchStartX.current;
```

Cuando el dedo **se levanta de la pantalla**:
- Calcula `deltaX` = distancia horizontal recorrida
- `deltaX < 0` → el dedo se movió **hacia la izquierda** (de x=200 a x=100, ej: 100-200 = -100)
- `deltaX > 0` → el dedo se movió **hacia la derecha** (de x=100 a x=200, ej: 200-100 = +100)

**Interpretación:**
- **Swipe izquierda** (-100 px) = "ir a la sección siguiente"
- **Swipe derecha** (+100 px) = "ir a la sección anterior"

### 5. Umbral de sensibilidad

```typescript
const SWIPE_THRESHOLD = 50; // píxeles

if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
```

**Por qué es necesario:**
- Sin umbral: un toque accidental (sin mover el dedo) cambiaría la sección (mala UX)
- Con umbral de 50px: evita cambios accidentales, requiere un gesto deliberado

**Referencia:** La mayoría de apps usan 50-100px como umbral. 50px es conservador (fácil de activar), 100px es más exigente.

### 6. Navegación con límites naturales

```typescript
setActiveSection(current => {
  const currentIndex = SECTIONS.indexOf(current);
  if (deltaX < 0) {
    // Swipe izquierda → sección siguiente
    return SECTIONS[Math.min(currentIndex + 1, SECTIONS.length - 1)];
  } else {
    // Swipe derecha → sección anterior
    return SECTIONS[Math.max(currentIndex - 1, 0)];
  }
});
```

**Lógica detallada:**

1. **Encuentra el índice actual:**
   ```
   studies → índice 0
   experience → índice 1
   skills → índice 2
   ```

2. **Si swipe izquierda:**
   ```
   currentIndex + 1 con Math.min() para no pasarse del límite

   0 (studies) + 1 = 1 (experience) ✓
   1 (experience) + 1 = 2 (skills) ✓
   2 (skills) + 1 = 3, pero Math.min(3, 2) = 2 (se queda en skills) ✓
   ```

3. **Si swipe derecha:**
   ```
   currentIndex - 1 con Math.max() para no ir antes del inicio

   0 (studies) - 1 = -1, pero Math.max(-1, 0) = 0 (se queda en studies) ✓
   1 (experience) - 1 = 0 (studies) ✓
   2 (skills) - 1 = 1 (experience) ✓
   ```

**Beneficio:** No hay menús circulares (skills → swipe izquierda → estudios). Es intuitivo: tiene un inicio y un fin.

### 7. Listeners en el contenedor raíz

```typescript
<div
  className="App"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
```

Los event listeners están en **`.App`** (el div raíz) porque:
- Captura gestos en **toda la pantalla**, sin importar dónde toque el usuario
- No interfiere con elementos interactivos específicos (botones, links)
- Funciona en mobile/tablet automáticamente

---

## Flujo de ejecución paso a paso

### Escenario: Usuario en "Studies", hace swipe izquierda hacia "Experience"

```
1. Usuario coloca el dedo en x=300
   → onTouchStart dispara
   → touchStartX.current = 300

2. Usuario mueve el dedo hacia la izquierda hasta x=150 (sin levantarlo)
   → nada sucede (aún está en touchmove, que no escuchamos)

3. Usuario levanta el dedo en x=150
   → onTouchEnd dispara
   → deltaX = 150 - 300 = -150 px

4. Validaciones:
   ✓ Math.abs(-150) = 150 > 50 (supera el umbral)
   ✓ deltaX < 0 (es swipe izquierda)

5. Navegación:
   ✓ currentIndex = SECTIONS.indexOf('studies') = 0
   ✓ currentIndex + 1 = 1
   ✓ SECTIONS[1] = 'experience'
   ✓ setActiveSection('experience')

6. React re-renderiza:
   ✓ activeSection ahora es 'experience'
   ✓ El componente Experience se muestra
   ✓ El componente Studies se oculta
   ✓ La navbar actualiza el botón activo
```

---

## Performance Considerations

### `useCallback` para memoización

```typescript
const handleTouchStart = useCallback((e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
}, []);
```

**Por qué es importante:**
- Sin `useCallback`: se crea una nueva función en cada render
- Con `useCallback`: la función se reutiliza, se pasa la misma referencia a los event listeners
- Evita re-suscripciones innecesarias a los eventos

### Eventos nativos (sin librería)

```typescript
onTouchStart={handleTouchStart}
onTouchEnd={handleTouchEnd}
```

**Ventajas:**
- ✅ Cero dependencias externas (sin `react-swipe`, `react-swipeable`, etc.)
- ✅ Menor bundle size (estimado: +0.5 KB vs +15 KB con librería)
- ✅ Mejor performance (menos código)
- ✅ Control total del comportamiento

---

## Casos de uso y limitaciones

### ✅ Soportado

- **Mobile/Tablet** — touch events nativos
- **Desktop con mouse** — `touchstart` y `touchend` no disparan con mouse (intencional)
- **Trackpad en MacBook** — algunos navegadores mapean swipes del trackpad a touch events

### ⚠️ No soportado (limitaciones intencionales)

- **Arrastrar en desktop con ratón** — no implementado
- **Mouse wheels** — no implementado
- **Keyboard arrows** — no implementado (podrías añadirlo)

**Nota:** Si quisieras soporte para desktop, podrías añadir `onMouseDown` y `onMouseUp` con lógica similar. Pero para un **portfolio móvil**, los gestos táctiles son suficientes.

---

## Mejoras futuras opcionales

### 1. Soporte para desktop (mouse drag)

```typescript
const mouseStartX = useRef<number | null>(null);

const handleMouseDown = (e: React.MouseEvent) => {
  mouseStartX.current = e.clientX;
};

const handleMouseUp = (e: React.MouseEvent) => {
  if (!mouseStartX.current) return;
  const deltaX = e.clientX - mouseStartX.current;
  // ... mismo logic que touch
  mouseStartX.current = null;
};
```

### 2. Animación de transición visual

```css
main {
  animation: slideIn 300ms ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### 3. Navegación por keyboard

```typescript
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'ArrowLeft') activateExperience();
  if (e.key === 'ArrowRight') activateStudies();
};
```

---

## Testing y debugging

### Verificar que funciona

1. Abre el portfolio en un dispositivo móvil
2. Desliza el dedo **lentamente hacia la izquierda** → cambia a "Experience"
3. Desliza hacia la **izquierda nuevamente** → cambia a "Skills"
4. Intenta deslizar izquierda desde "Skills" → se queda en "Skills" (límite superior)
5. Desliza hacia la **derecha** → regresa a "Experience"

### Debugging en navegador

```javascript
// En la consola del navegador:
document.querySelector('.App').addEventListener('touchstart', (e) => {
  console.log('Touch started at:', e.touches[0].clientX);
});
```

---

## Resumen

| Aspecto | Implementación |
|--------|--|
| **Patrón** | Touch events nativos (sin librerías) |
| **Estado** | `useRef` para coordenada X inicial |
| **Cálculo** | `deltaX = final X - inicial X` |
| **Dirección** | `deltaX < 0` → siguiente; `> 0` → anterior |
| **Seguridad** | Umbral de 50px, límites con Math.min/max |
| **Performance** | Cero dependencias, `useCallback` para memoización |
| **Accesibilidad** | Funciona en toda la pantalla, no interfiere con elementos |
| **Mantenibilidad** | Array `SECTIONS` centralizado, fácil de extender |

La implementación es **minimalista, performante y robusta** — exacto lo que esperas en un portfolio profesional.


# Optimización de Performance

## Métricas clave a mirar

### Web Vitals (las que importan para UX real)
| Métrica | Qué mide | Objetivo |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Cuándo aparece el contenido principal | < 2.5s |
| **FID / INP** | Respuesta a la primera interacción | < 100ms |
| **CLS** (Cumulative Layout Shift) | Cuánto "salta" el layout al cargar | < 0.1 |
| **FCP** (First Contentful Paint) | Cuándo aparece algo en pantalla | < 1.8s |
| **TTFB** | Tiempo hasta el primer byte del servidor | < 600ms |

Medirlas: abrí DevTools → **Lighthouse** → corre un audit en modo incógnito.

### Tamaños de bundle (ya los tenés en el build)
```
dist/assets/index-DjtHeCAW.js   202.94 kB │ gzip: 63.84 kB  ← este es el que importa
```
El **gzip size** es lo que viaja por la red. 63 kB es el tamaño real que descarga el usuario.

---

## Qué podés hacer para minimizar el tiempo de carga

### 1. Eliminar Bootstrap del CDN (mayor impacto)
Bootstrap CSS pesa ~230 kB (gzip ~30 kB) y **bloquea el render** porque está en `<head>`. Solo usás una fracción de Bootstrap.

```bash
npm install bootstrap
```
```tsx
// main.tsx - solo importa lo que usás
import 'bootstrap/dist/css/bootstrap.min.css'
```
Después podés usar **PurgeCSS** (integrado con Vite) para eliminar las clases de Bootstrap que no usás:
```bash
npm install -D vite-plugin-purgecss
```
Resultado típico: de ~230 kB a ~5-10 kB.

### 2. Google Fonts → self-hosted (segundo mayor impacto)
Ahora hacés 2 requests externos bloqueantes a Google. Con `fontsource`:
```bash
npm install @fontsource/open-sans @fontsource/lato
```
```tsx
// main.tsx
import '@fontsource/open-sans'
import '@fontsource/lato'
```
Las fuentes quedan en tu bundle, con hash de contenido, cacheadas para siempre.

### 3. Convertir GIFs a video (impacto visual grande)
`cuentita.gif` y `tecnoshop.gif` son probablemente los archivos más pesados del sitio. Un GIF se puede reemplazar por un `<video>` que pesa 5-10x menos:
```bash
ffmpeg -i cuentita.gif -c vp9 -b:v 0 -crf 41 cuentita.webm
ffmpeg -i cuentita.gif -c libx264 -pix_fmt yuv420p cuentita.mp4
```
```tsx
<video autoPlay loop muted playsInline width={300} height={600}>
  <source src="cuentita.webm" type="video/webm" />
  <source src="cuentita.mp4" type="video/mp4" />
</video>
```

### 4. Imágenes en formato WebP
Las PNG/JPG del `public/` podés convertirlas a WebP (30-50% más livianas):
```bash
npx sharp-cli --input "public/*.png" --output public/ --format webp
```

### 5. Preload del chunk principal
En `vite.config.ts` podés agregar `modulePreload` para que el browser descargue los chunks lazy antes de que el usuario los necesite:
```ts
build: {
  target: 'esnext',
  modulePreload: { polyfill: false },
}
```

---

## Prioridad recomendada para tu caso

```
1. GIFs → video          (probablemente el mayor ahorro en MB)
2. Bootstrap self-hosted + PurgeCSS   (elimina ~200kB bloqueantes)
3. Google Fonts self-hosted           (elimina 2 requests externos)
4. Imágenes → WebP                   (30-50% menos por imagen)
```

Los primeros 3 son los que más impactan en LCP y FCP.




JavaScript
✅ Vite hace tree-shaking automático del JS. Si importas Bootstrap como npm package, solo incluye lo que usas. Bootstrap modular se reduce bastante.

CSS
❌ El CSS no se hace tree-shaking automático. Cuando haces:


import 'bootstrap/dist/css/bootstrap.min.css'
Todo el CSS de Bootstrap (~230 kB gzip) se incluye, aunque solo uses el 20%.

Para eliminar CSS no usado necesitás PurgeCSS o similar.

Pero para tu caso...
Honestamente, Bootstrap es overkill para un CV. Solo usás:

Grid system (row, col, col-md, col-lg)
Spacing utilities (mb-2, m-2, p-4, mt-2)
Text utilities (text-center, w-100)
Iconos (que ya tenés como SVG embebido)
Podrías escribir CSS puro en ~150 líneas y eliminar Bootstrap completamente:


// App.css - reemplaza todo Bootstrap
.container { max-width: 1200px; margin: 0 auto; }
.row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
.col { flex: 1; }
.col-md-1 { width: 8.33%; }
.col-lg-2 { width: 16.66%; }

/* Spacing utilities */
.m-2 { margin: 0.5rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mt-2 { margin-top: 0.5rem; }
.p-4 { padding: 1.5rem; }

/* Text utilities */
.text-center { text-align: center; }
.w-100 { width: 100%; }
Impacto: De ~200 kB bloqueantes → 0 kB, más 1-2 kB de tu CSS personalizado.

¿Prefiero PurgeCSS o escribir CSS custom?


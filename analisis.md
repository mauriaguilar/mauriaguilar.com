# Análisis UX/Marketing — mauriaguilar.com

Evaluación como landing de conversión para recruiters, no solo como pieza de diseño.

## Veredicto rápido

**Como pieza de diseño: 8/10.** Limpio, profesional, dark-navy + azul = "backend, confiable, técnico". Buen gusto, buena performance, minimalista como se pidió. La estética sí comunica "dev competente y prolijo".

**Como herramienta de venta: 5/10.** La web está construida de forma que esconde el activo más fuerte (impacto medible) y no tiene los elementos de conversión que un recruiter espera. Vende "programador ordenado", no "Senior con impacto medible".

La diferencia entre esos dos números es donde se están perdiendo entrevistas.

---

## 🔴 Problema #1 (el más caro)

**La landing por defecto es "Studies". El recruiter aterriza en lo más débil.**

Un recruiter escanea 6-7 segundos antes de decidir si sigue o cierra. Con el layout de "tab bar" tipo app móvil, lo primero que ve es:

> *Computer Engineer — Universidad Nacional de Córdoba (2008 - 2022)*

Eso es lo que muestra un junior. Un Senior lidera con impacto, no con el título. La munición pesada —"13 REST APIs para un SaaS con 500+ usuarios", "11.000 usuarios concurrentes", "Intel", "McAfee"— está enterrada detrás de un click en la pestaña Experience, que la mayoría no va a dar en esos 7 segundos.

Además, el modelo de "una sección a la vez" tiene costos ocultos para un CV:
- El recruiter no puede hacer Ctrl+F sobre todo el contenido (los ATS y los humanos buscan keywords: "AWS", "Python", "microservices").
- No puede imprimir / guardar como PDF la página completa.
- Fragmenta la narrativa. Un CV es una historia lineal; se partió en 3 pantallas aisladas.

**Fix:** cambiar el orden por defecto a Experience, o mejor, convertir las 3 secciones en un scroll vertical único (Hero → Experience → Skills → Studies), dejando el tab bar como scroll-spy de navegación rápida. Un scroll largo vende más que 3 tabs para un CV.

---

## 🔴 Problema #2 — No hay "pitch". El header no vende.

El header actual dice: nombre + "Senior Backend Engineer" + email. Falta la línea de posicionamiento que un Senior necesita en el primer segundo. Algo como:

> **Senior Backend Engineer** · 6+ años construyendo microservicios Python/Go sobre AWS para SaaS de ciberseguridad y fintech.

Y peor: hay métricas de oro que no aparecen en ningún lado visible. Una tira de stats en el hero pegaría durísimo:

`6+ años` · `500+ usuarios` · `11K concurrentes` · `13 APIs` · `AWS`

Eso es puro "sell" y ya está escrito, solo está sepultado en el body de una tab.

---

## 🔴 Problema #3 — No hay CTA ni descarga de CV

Existen `src/assets/Mauricio Aguilar - Curriculum vitae - english.pdf` y la versión en español, pero no están enlazados en ningún lado de la UI. El botón flotante solo tiene GitHub y LinkedIn.

La acción #1 de un recruiter es "bajame el PDF" o "mandale un mail". Ahora mismo:
- El email es un link de texto gris perdido en el header.
- El CV no se puede descargar.

Falta un CTA primario claro: **"Download CV"** y/o **"Contact me"**.

---

## 🔴 Problema #4 — El link comparte pésimo (y las marcas top no se usan)

**Meta social:** no hay Open Graph ni Twitter card. Cuando un recruiter pega el link en Slack o un mail, aparece una preview vacía. Ya existe `linkedin-banner.png` en `public/` —el asset perfecto para `og:image`— sin conectar. El `<title>` dice *"Mauri Aguilar profile"* (débil) y el meta description dice *"Software Engineer"* (inconsistente con "Senior Backend Engineer" del header).

**Marcas = credibilidad instantánea desperdiciada.** Trabajó con Intel, McAfee, Telecom, Wazuh. Esos logos son oro para un recruiter. Hoy aparecen como screenshots sueltos dentro de las cards. Una tira "Worked with" con esos logos arriba de todo genera confianza en 1 segundo, antes de leer una palabra.

---

## 🟡 Problemas de layout / jerarquía (segundo orden)

1. **Cards de Experience alternadas izq/der al 92%:** el zig-zag sin una línea de timeline que las conecte se lee como desalineación, no como ritmo intencional. Para minimalismo senior, cards full-width consistentes transmiten más confianza.

2. **Empresa/rol/fecha metidos en un solo pill azul:** `"Wazuh, Inc. | Software Engineer (Apr 2023-Mar 2026)"` todo en una etiqueta aplana la jerarquía. Debería ser: empresa en bold → rol secundario → fecha muted a la derecha. Un job title no es un "tag".

3. **Sobreuso del pill azul (`item-info-c1/c2/c3`):** se usa para títulos de grado, empresas y categorías de skills. Cuando todo es acento, nada resalta. Reservar el pill para categorías; usar tipografía real para los títulos.

4. **Skills como texto gris `<small>` en lista con comas:** bajo peso visual y difícil de escanear. Justo las keywords que más busca un recruiter (Python, AWS, Go) están en el elemento de menor jerarquía. Convertirlas en chips escanea mejor y ayuda al keyword-matching.

5. **Fechas inconsistentes:** "Apr 2023-Mar 2026", "2020-2023", "07/2021 - 09/2021", "2008 - 2022". Un recruiter lo nota. Unificar el formato.

6. **Contraste:** `--text-muted #6b7280` sobre navy en texto chico queda al borde de fallar WCAG AA. Subirlo un punto para fechas y skills.

---

## Quick wins ordenados por ROI

| # | Acción | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 | Default = Experience (o scroll único) | 🔥🔥🔥 | Bajo |
| 2 | Línea de posicionamiento + tira de métricas en el hero | 🔥🔥🔥 | Bajo |
| 3 | Botón Download CV + CTA de contacto visible | 🔥🔥🔥 | Bajo |
| 4 | OG tags + `og:image` (ya existe el banner) + fix `<title>` | 🔥🔥 | Bajo |
| 5 | Tira de logos "Worked with" (Intel, McAfee, Wazuh) | 🔥🔥 | Medio |
| 6 | Cards full-width + jerarquía empresa/rol/fecha | 🔥 | Medio |
| 7 | Skills como chips | 🔥 | Bajo |

---

**Resumen honesto:** el envoltorio es de un dev con buen gusto. Pero un CV es una landing de conversión, y a esta le faltan las tres cosas que cierran: arrancar por lo más fuerte, un pitch con números, y un CTA claro. Arreglando los puntos 1-4 se pasa de "se ve prolijo" a "quiero entrevistar a este tipo".

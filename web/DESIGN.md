# Decisiones de diseño

## Punto de partida: la marca y el espacio
- **Logotipo:** una muela con las iniciales FAG en azul petróleo (`#184878`–`#306078`) y verde azulado (`#30C0A8`).
- **Consultorio:** mármol blanco, madera clara, latón y asientos champagne.
- **Especialidad real** (según los rótulos y las marcas de agua de las fotos): **ortodoncia y ortopedia maxilar**.

Antes la web usaba azul bebé, cian y degradados genéricos que no salían de ninguna de esas tres cosas.

## Paleta (tokens en `src/app/globals.css`)
| Rol | Token | Valor |
| --- | --- | --- |
| Fondo (mármol) | `--marble` · `--marble-deep` · `--paper` | `#F6F4F0` · `#ECE8E1` · `#FFFFFF` |
| Principal (azul petróleo) | `--navy-950` · `--navy-900` · `--navy-800` | `#0F2A3D` · `#17415C` · `#1F5577` |
| Acento (verde azulado) | `--teal-400` (relleno) · `--teal-700` (texto) · `--teal-300` (sobre oscuro) | `#2FBFA6` · `#0B7A6A` · `#4FD6C0` |
| Texto secundario / línea | `--muted` · `--line` | `#4F6272` · `#D9D3C9` |
| Estados | `--danger` · `--wa` | `#B3261E` · `#177A45` (solo para WhatsApp) |

Contrastes (WCAG): texto principal sobre mármol 13,5:1 · azul petróleo sobre mármol 9,8:1 · texto secundario 5,8:1 · verde azulado de texto 4,8:1 · verde azulado claro sobre azul petróleo 6,0:1 · blanco sobre el verde de WhatsApp 5,4:1. Todo cumple AA.

## Tipografía
- **Bricolage Grotesque** (títulos): un grotesco con carácter, de aire técnico, que encaja con un oficio de precisión como la ortodoncia.
- **Source Sans 3** (cuerpo): ya estaba en el sitio y se mantiene por su legibilidad.
- Poppins y Raleway salen. Las fuentes se autoalojan con `next/font` (antes entraban por `@import` de Google, que bloquea el render).
- Sin etiquetas en mayúsculas sobre los títulos ni sombras en el texto (antes, 5 px de sombra dura).

## Forma
- Radios: `--radius-control` 8 px (botones, campos) y `--radius-panel` 16 px (superficies).
- Sombras: `--shadow-soft` y `--shadow-lift`. Todo valor visual sale de un token; los tonos translúcidos usan `color-mix` sobre el token.
- Espaciado en múltiplos de 4 px (rem).
- Cada sección abre con una **línea fina con una marca verde azulada** (`.section-rule`): señala el comienzo de un bloque nuevo.
- Los servicios van en filas separadas por líneas, no en tarjetas idénticas.

## Estructura de la página
Hero → Servicios → **Casos** (nuevo) → El doctor → Consultorio → Opiniones → Preguntas → Contacto.
El hero muestra la recepción real, con el rótulo del doctor. La foto de cuerpo entero del doctor va en su sección, recortada desde la cabeza hasta las rodillas para que se vea el rostro.

## Movimiento
- Hero: una secuencia de entrada solo con CSS (se ve aunque falle el JavaScript).
- Resto: un fundido por scroll (`Reveal`), sin desplazamiento. Se omite con `prefers-reduced-motion`, y en un navegador sin JavaScript el contenido se muestra igual (`<noscript>`).

## Accesibilidad
Enlace "Saltar al contenido", navegación con enlaces reales y `aria-current`, menú móvil con `aria-expanded` y Esc, foco visible (verde oscuro sobre claro y verde claro sobre oscuro), preguntas frecuentes con `<details>` nativo, formulario con etiquetas asociadas, errores `aria-live` y `aria-invalid`, áreas táctiles de 48 px y textos alternativos descriptivos.

## Contenido
Quité cifras sin base (+500 pacientes, 7+ años), el texto "[Universidad]" y el voseo argentino. Las opiniones están marcadas como **demo**. Las fotos de casos clínicos son del portafolio del doctor (llevan su marca de agua); **antes de publicarlas hace falta el consentimiento por escrito de cada paciente**.

## Excepciones documentadas
- `Reveal`, `Navbar` y `Contact` son componentes de cliente; el resto son de servidor. `Reveal` ya no usa librerías: IntersectionObserver + CSS (se quitó `framer-motion`, que quedó sin uso).
- `themeColor` en `layout.tsx` repite `--navy-900`: los metadatos de Next no pueden leer variables CSS.
- `next.config.ts` declara las calidades de imagen permitidas (`[75, 82, 85, 88]`): Next 16 lo exige.
- El número de WhatsApp y el mensaje siguen repetidos en Navbar, Hero y Contact, como en la versión original; extraerlos a una constante compartida queda pendiente de decisión.
- Las opiniones son **demo** (nombres y textos ilustrativos) y las respuestas médicas de las preguntas frecuentes deben confirmarlas el doctor antes de publicar.
- Los valores de las sombras llevan `rgb()` porque son la definición del token.
- La foto del doctor se muestra recortada (es de cuerpo entero) y la foto del logotipo (`logo.jpg`) se funde con `mix-blend-mode: multiply` porque tiene fondo blanco.

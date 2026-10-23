# Dr. Felipe Gómez Amaya · Ortodoncia y ortopedia maxilar

Landing de una página para el consultorio del Dr. Felipe Gómez Amaya (Armenia, Quindío). **Next.js 16 (App Router) + React 19**, CSS Modules y `framer-motion`.

## Cómo correrlo
Requiere Node 20+.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm start       # sirve el build
```

Al publicar, define `NEXT_PUBLIC_SITE_URL` con el dominio real (se usa para las imágenes de Open Graph).

## Estructura
```
src/
  app/            layout.tsx (fuentes, SEO, JSON-LD) · page.tsx · globals.css (tokens)
  components/
    Navbar  Hero  Services  Cases  Doctor  Clinic  Testimonials  FAQs  Contact  Footer
    Reveal/       fundido al hacer scroll (único uso de framer-motion en secciones)
public/           fotos del consultorio, del doctor y de casos; logo
```
Cada componente lleva su `*.module.css`. Los tokens de diseño viven en `globals.css`; las decisiones, en `DESIGN.md`.

## Qué es real y qué es demo
- **Real:** fotos, logo, nombre, teléfono/WhatsApp, correo y dirección que ya estaban en el sitio.
- **Demo / por confirmar:** las **opiniones** (marcadas como demo), los textos de la sección del doctor (sin cifras ni universidad) y el horario (lunes a sábado, 8 a. m.–6 p. m., como estaba).
- **Casos clínicos:** fotos del portafolio del doctor; se necesita el consentimiento escrito de cada paciente para publicarlas.
- El formulario de contacto **no envía a un servidor**: abre WhatsApp con el mensaje armado.

# Track Specification: "Sobre mí" Page & Rebranding to "Ingeniería de Vida"

## Overview
Crear la página `/sobre-mi` integrando el contenido de `about.me/diegomarchetti` con un enfoque filosófico y técnico avanzado. Simultáneamente, realizar un rebranding global del sitio cambiando el nombre a "Ingeniería de Vida" y el tagline a “Automatizá lo repetitivo. Enfocate en lo que importa.”

## Functional Requirements
- **Global Branding Update:**
  - **Nombre del Sitio:** "mi-web-personal" → **"Ingeniería de Vida"**.
  - **Tagline:** **“Automatizá lo repetitivo. Enfocate en lo que importa.”**
  - Actualizar el `Header` (enlace principal), `Footer` (copyright) y `Layout` (etiqueta `<title>` por defecto y meta tags).
- **New Page: `/sobre-mi` (`src/pages/sobre-mi.astro`):**
  - **Contenido:** Basado en `about.me` (Bio, intereses, roles profesionales) pero adaptado a la narrativa de "Ingeniería de Vida".
  - **Imagen de Perfil:** Utilizar la URL de `about.me` con una máscara orgánica (CSS `clip-path` o `mask-image`).
  - **Secciones:** 
    - Introducción (Manifiesto técnico/personal).
    - Áreas de enfoque (Sistemas, BI, GenAI).
    - Intereses personales (Música, Fotografía).
- **Style & Aesthetic:**
  - Mantener la paleta accesible (Track 03) y la navegación móvil (Track 05).
  - Usar tipografía que refleje precisión técnica y calidez humana.

## Non-Functional Requirements
- **SEO:** Asegurar que los metadatos reflejen el nuevo nombre y tagline para indexación.
- **Performance:** Carga optimizada de la imagen externa.

## Acceptance Criteria
- [ ] La página `/sobre-mi` es accesible y no devuelve error 404.
- [ ] El título "Ingeniería de Vida" aparece en el Header, Footer y pestañas del navegador.
- [ ] El tagline es visible y legible en las secciones correspondientes.
- [ ] La estética de la página "Sobre mí" es orgánica y de alta calidad técnica.

## Out of Scope
- Migración de la imagen a un hosting propio (se usará la URL externa por ahora).
- Formulario de contacto avanzado.

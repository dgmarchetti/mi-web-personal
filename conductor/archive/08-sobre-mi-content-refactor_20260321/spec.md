# Track Specification: "Sobre mí" Content Refactor

## Overview
Refactorizar completamente el contenido de la página `/sobre-mi` (`src/pages/sobre-mi.astro`), reemplazando el texto actual con el nuevo manifiesto de "Ingeniería de Vida". Se mantendrá el diseño visual orgánico, la animación de la foto de perfil y la paleta de colores accesibles, integrando el nuevo contenido según la jerarquía HTML proporcionada.

## Functional Requirements
- **Content Replacement (`src/pages/sobre-mi.astro`):**
  - Reemplazar todo el texto de la sección principal con el contenido proporcionado.
  - Mantener la imagen de perfil actual (`profile.image`) con su clase `.organic-mask`.
- **Semantic Hierarchy & Styling:**
  - `<h1>` principal: "No estoy acá para trabajar más."
  - `<h2>` para las secciones: "El problema", "El descubrimiento", "Qué es Ingeniería de Vida", "Cómo lo aplico", "Casos reales", "El lado humano", "Continuar".
  - `<h3>` para los artículos dentro de "Cómo lo aplico", presentados usando el layout de grid de 2 columnas existente (clases Tailwind de borde y fondo cálido/oscuro).
  - Usar etiquetas `<strong>` para enfatizar frases clave según el HTML provisto.
  - Formatear listas (`<ul>`, `<li>`) con estilos de Tailwind para mantener la estética.
- **Call to Action (CTA):**
  - Transformar la navegación final ("Ver proyectos", "Leer ideas", "Suscribirse") en un grupo de botones interactivos usando estilos de Tailwind (ej. `bg-accent-earth text-bg-base rounded-organic ...`).
  - Enlaces por defecto: "Ver proyectos" (`/`), "Leer ideas" (`/blog`), "Suscribirse" (mantener como `#` por ahora).

## Non-Functional Requirements
- **Accessibility:** Asegurar contrastes correctos (Track 03) y estructura semántica válida.
- **Responsive:** El layout debe adaptarse correctamente a pantallas móviles (especialmente el grid de "Cómo lo aplico" y los botones finales).

## Acceptance Criteria
- [ ] Todo el texto antiguo ha sido reemplazado por el nuevo manifiesto.
- [ ] La jerarquía H1 > H2 > H3 se respeta estrictamente.
- [ ] El grid de "Cómo lo aplico" se visualiza correctamente en 2 columnas en desktop y 1 en móvil.
- [ ] Los enlaces finales tienen apariencia de botones estilizados.
- [ ] La foto con máscara orgánica sigue presente y funcionando.

## Out of Scope
- Creación de un sistema real de suscripción (newsletter).
- Cambios en los componentes globales (Header/Footer).

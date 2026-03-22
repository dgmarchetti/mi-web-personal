# Track Specification: Home Strategic Redesign (Content-First)

## Overview
Rediseñar el contenido de la página de inicio para alejarla del concepto de "portfolio genérico" y posicionarla como el portal de entrada a la filosofía de "Ingeniería de Vida". El enfoque se traslada de "quién soy" a "por qué esto importa", priorizando la automatización y la recuperación de tiempo.

## Functional Requirements
- **Hero Section Transformation:**
  - Headline: "Automatizo lo que no debería ocupar tu tiempo."
  - Subheadline: "Diseño sistemas, uso inteligencia artificial y automatización para eliminar trabajo operativo y recuperar tiempo para lo que realmente importa."
  - CTAs: "Ver cómo lo hago" (enlace a `/sobre-mi`) y "Explorar proyectos" (enlace a una futura página de proyectos, por ahora `/blog`).
- **Context Block Implementation:**
  - Nueva sección debajo del Hero enfocada en la filosofía: "No es sobre tecnología. Es sobre cómo vivís."
  - Texto enfatizando la reducción de fricción y el aumento de vida/foco.
- **Service/Focus Areas Refactor:**
  - Reemplazar la sección de "Qué hago" por una cuadrícula de 4 pilares:
    1. Automatización con IA.
    2. Sistemas personales.
    3. Domótica.
    4. Ecosistemas digitales.
- **Differential Section:**
  - Añadir sección: "Esto no es contenido. Es práctica."
  - Enfatizar que son sistemas usados en la vida real, no teorías.
- **Bridges & Closing:**
  - Enlaces directos a "Qué es Ingeniería de Vida" (`/sobre-mi`) y "Ver proyectos" (`/blog`).
  - Cierre: "La tecnología debería devolverte tiempo."

## Non-Functional Requirements
- **Tone & Voice:** Minimalist Command. Directo, profesional, de alta autoridad técnica pero humano.
- **Layout Consistency:** No se altera la estructura de componentes de Astro ni el stack tecnológico. Se utiliza el sistema de diseño orgánico y accesible ya implementado.
- **SEO:** Actualizar meta tags de la home para reflejar el nuevo posicionamiento.

## Acceptance Criteria
- [ ] La Home comunica claramente la propuesta de valor de "Ingeniería de Vida".
- [ ] No existen menciones genéricas de presentación personal en el Hero.
- [ ] Los 4 pilares de aplicación están presentes y estilizados como tarjetas.
- [ ] La jerarquía visual guía al usuario desde la filosofía (Hero/Contexto) hasta la acción (Proyectos/Sobre mí).
- [ ] El diseño móvil se mantiene impecable.

## Out of Scope
- Cambio de layout base.
- Implementación de nuevas animaciones complejas.
- Creación de la página de proyectos (se usará un enlace temporal).

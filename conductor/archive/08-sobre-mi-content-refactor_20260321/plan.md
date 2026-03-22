# Implementation Plan: "Sobre mí" Content Refactor

## Objective
Refactorizar la página `/sobre-mi` (`src/pages/sobre-mi.astro`) para integrar el nuevo manifiesto de "Ingeniería de Vida", respetando la jerarquía semántica HTML proporcionada, manteniendo la estética orgánica y la foto animada, y añadiendo botones CTA al final.

## Key Files & Context
- `src/pages/sobre-mi.astro`: El único archivo a modificar. Contiene el layout actual, estilos de Tailwind y la animación de la máscara (`.organic-mask`).

## Implementation Steps

### Phase 1: Content Replacement & Hierarchy
- [x] Task: Replace Text Content
    - [x] Editar `src/pages/sobre-mi.astro`.
    - [x] Borrar el texto actual dentro del contenedor `<div class="flex-grow prose...">`.
    - [x] Pegar el nuevo contenido HTML validando la jerarquía de títulos (`h1`, `h2`, `h3`).
    - [x] Aplicar etiquetas `<strong>` a las frases clave designadas en el texto original.
- [x] Task: Apply Tailwind Typography & Spacing
    - [x] Asegurar que el contenedor principal mantenga las clases `prose prose-neutral dark:prose-invert max-w-none`.
    - [x] Aplicar clases específicas a los `h1` y `h2` para mantener la estética consistente (ej. `font-organic`, márgenes, bordes inferiores).
- [x] Task: Conductor - User Manual Verification 'Phase 1: Content Replacement & Hierarchy' (Protocol in workflow.md)

### Phase 2: Styling Grids & Interactive Elements
- [x] Task: Style the "Cómo lo aplico" Grid
    - [x] Envolver las etiquetas `<article>` en un div con `class="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose"`.
    - [x] Aplicar las clases de tarjeta existentes (fondo cálido/oscuro, borde, `rounded-organic`, `hover:shadow-md`) a cada `<article>`.
- [x] Task: Style Lists and CTA Buttons
    - [x] Estilizar las listas (`<ul>`, `<li>`) para que coincidan con la estética del sitio.
    - [x] Convertir la sección final `<nav>` en un grupo de flexbox interactivo (`flex gap-4 flex-wrap`).
    - [x] Estilizar los enlaces ("Ver proyectos", "Leer ideas", "Suscribirse") como botones con fondos de acento (`bg-accent-earth text-white rounded-lg px-6 py-2 transition-transform hover:-translate-y-1`, etc.).
- [x] Task: Conductor - User Manual Verification 'Phase 2: Styling Grids & Interactive Elements' (Protocol in workflow.md)

## Verification & Testing
- Automated: Ejecutar `npm run check`.
- Manual: 
    - Navegar a `/sobre-mi` en un navegador (desktop y móvil).
    - Verificar la fluidez de la lectura y jerarquía.
    - Confirmar que las tarjetas y botones son responsivos y accesibles.

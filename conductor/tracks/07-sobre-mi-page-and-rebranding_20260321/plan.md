# Implementation Plan: "Sobre mí" Page & Rebranding

## Objective
Realizar el rebranding global del sitio a "Ingeniería de Vida" y crear la página `/sobre-mi` con un diseño orgánico y contenido adaptado de `about.me`.

## Key Files & Context
- `src/layouts/Layout.astro`: Para el cambio de título global y meta tags.
- `src/components/Header.astro`: Actualizar el nombre de marca.
- `src/components/Footer.astro`: Actualizar copyright.
- `src/pages/sobre-mi.astro`: Nueva página.
- `src/pages/index.astro`: Actualizar el título/tagline en la home si aplica.

## Implementation Steps

### Phase 1: Global Rebranding
- [ ] Task: Update Global Branding in Layout & UI
    - [ ] Cambiar el título por defecto y meta tags en `src/layouts/Layout.astro`.
    - [ ] Actualizar el nombre de la marca en `src/components/Header.astro`.
    - [ ] Actualizar el texto de copyright y branding en `src/components/Footer.astro`.
    - [ ] Actualizar el título principal en `src/pages/index.astro` si es necesario.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Global Rebranding' (Protocol in workflow.md)

### Phase 2: Page Creation (/sobre-mi)
- [ ] Task: Create Sobre-mí Page Structure
    - [ ] Crear `src/pages/sobre-mi.astro` usando el `Layout` base.
    - [ ] Implementar el contenido extraído de `about.me` con la narrativa "Philosophical/GenAI Focus".
- [ ] Task: Implement Organic Profile Picture
    - [ ] Insertar la imagen de `about.me` con una máscara orgánica usando CSS moderno.
    - [ ] Asegurar que sea responsive y accesible (alt text).
- [ ] Task: Apply Advanced Styling
    - [ ] Refinar la tipografía y el espaciado para un perfil de alta capacidad técnica.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Page Creation (/sobre-mi)' (Protocol in workflow.md)

### Phase 3: Final Integration & SEO
- [ ] Task: Final SEO & Link Audit
    - [ ] Verificar que todos los enlaces internos apunten a los nombres correctos.
    - [ ] Comprobar los metadatos en redes sociales (Open Graph) si están presentes.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Integration & SEO' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run check`.
- Manual: 
    - Navegar a `/sobre-mi` y verificar el diseño.
    - Comprobar el título de la pestaña del navegador en todas las páginas.
    - Verificar que el tagline en la Home sea correcto.

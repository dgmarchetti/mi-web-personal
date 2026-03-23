# Implementation Plan: Home Strategic Redesign (Content-First)

## Objective
Reemplazar el contenido actual de la página de inicio por el nuevo manifiesto estratégico de "Ingeniería de Vida", alineando el mensaje con la propuesta de valor de automatización y recuperación de tiempo.

## Key Files & Context
- `src/pages/index.astro`: El archivo principal a modificar.
- `src/layouts/Layout.astro`: Para verificar si algún meta tag específico de la Home necesita ajuste.

## Implementation Steps

### Phase 1: Content Replacement (Hero & Context)
- [x] Task: Refactor Hero Section
    - [x] Editar `src/pages/index.astro`.
    - [x] Reemplazar el H1 por "Automatizo lo que no debería ocupar tu tiempo."
    - [x] Reemplazar el Subheadline por el nuevo texto de sistemas e IA.
    - [x] Actualizar los botones CTA con los nuevos textos y rutas (`/sobre-mi`, `/blog`).
- [x] Task: Add Philosophical Context Block
    - [x] Insertar la nueva sección "No es sobre tecnología. Es sobre cómo vivís." debajo del Hero.
    - [x] Aplicar tipografía de impacto para el cierre: "Más tiempo. Más foco. Más vida."
- [x] Task: Conductor - User Manual Verification 'Phase 1: Content Replacement (Hero & Context)' (Protocol in workflow.md)

### Phase 2: Core Pillars & Differential
- [x] Task: Refactor "Cómo lo aplico" Grid
    - [x] Actualizar las 4 tarjetas de pilares (Automatización IA, Sistemas personales, Domótica, Ecosistemas digitales) con sus respectivas descripciones.
    - [x] Asegurar que el diseño de tarjeta sea consistente con el resto del sitio (bordes orgánicos, fondos sutiles).
- [x] Task: Add Differential Block
    - [x] Implementar la sección "Esto no es contenido. Es práctica." enfatizando la aplicación real de los sistemas.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Core Pillars & Differential' (Protocol in workflow.md)

### Phase 3: Navigation Bridges & Closing
- [x] Task: Implement Navigation Bridges
    - [x] Añadir los enlaces de puente a `/sobre-mi` y `/blog` con una estética de alta calidad (iconos de flecha o botones secundarios).
- [x] Task: Add Final Closing Statement
    - [x] Insertar el cierre: "La tecnología debería devolverte tiempo." en una posición de impacto final.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Navigation Bridges & Closing' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run build` para asegurar que el contenido se compila correctamente.
- Manual: 
    - Verificar la lectura fluida en escritorio y móvil.
    - Confirmar que los CTAs llevan a las páginas correctas.
    - Asegurar que no hay inconsistencias visuales en el espaciado entre los nuevos bloques.

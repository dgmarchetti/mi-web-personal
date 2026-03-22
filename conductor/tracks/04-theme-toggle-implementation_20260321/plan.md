# Implementation Plan: Theme Toggle Implementation

## Objective
Implementar un sistema robusto de alternancia de tema (claro/oscuro) que persista en `localStorage`, detecte preferencias del sistema y elimine el destello de contenido no tematizado (FOUC).

## Key Files & Context
- `src/layouts/Layout.astro`: Para inyectar el script bloqueante en el `<head>`.
- `src/components/ThemeToggle.astro`: Nuevo componente de UI.
- `src/components/Header.astro`: Para integrar el toggle en la navegación.
- `src/styles/global.css`: Variables ya definidas en el Track A.

## Implementation Steps

### Phase 1: Logic & Flash Prevention
- [x] Task: Implement Head Script for FOUC Prevention
    - [x] Crear un script inline en el `<head>` de `Layout.astro`.
    - [x] Leer el `localStorage` y la preferencia del sistema (`prefers-color-scheme`).
    - [x] Aplicar la clase `.dark` al elemento `document.documentElement` de forma inmediata.
- [~] Task: Conductor - User Manual Verification 'Phase 1: Logic & Flash Prevention' (Protocol in workflow.md)

### Phase 2: UI Component Implementation
- [x] Task: Create ThemeToggle Component
    - [x] Diseñar el componente con iconos minimalistas (Sol/Luna) usando SVG.
    - [x] Añadir estilos de Tailwind para el estado activo/hover acorde a la estética orgánica.
    - [x] Implementar la lógica de cliente (`<script>`) para manejar el click, actualizar el `localStorage` y emitir un evento personalizado para sincronización si es necesario.
- [x] Task: Integrate Toggle in Header
    - [x] Añadir `ThemeToggle.astro` al final de la lista de navegación en `Header.astro`.
    - [x] Asegurar que el diseño sea responsive (móvil/desktop).
- [x] Task: Conductor - User Manual Verification 'Phase 2: UI Component Implementation' (Protocol in workflow.md)

### Phase 3: Polish & Accessibility
- [x] Task: Final Accessibility Audit
    - [x] Verificar que el botón tenga un `aria-label` descriptivo.
    - [x] Asegurar que el foco del teclado (`Tab`) sea claramente visible.
    - [x] Probar la persistencia en diferentes navegadores.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Polish & Accessibility' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run check` to verify types and Astro structure.
- Manual: 
    - Activar modo oscuro, recargar la página y verificar que no hay destello blanco.
    - Cambiar el tema del sistema y ver si el sitio responde (si no hay override manual).
    - Verificar accesibilidad con DevTools.

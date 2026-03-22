# Track Specification: Theme Toggle Implementation

## Overview
Implementar un componente de alternancia de tema (claro/oscuro) en la interfaz, con persistencia en `localStorage` y prevención de destellos de contenido no tematizado (FOUC).

## Functional Requirements
- **Theme Toggle Component:**
  - Un botón con iconos de Sol/Luna que cambie entre los modos.
  - Estilo: Icono minimalista que encaje con la estética orgánica.
  - Ubicación: Al final de la navegación en el `Header`.
- **Logic & Persistence:**
  - Persistencia indefinida mediante `localStorage` (clave `theme`).
  - Detección automática de la preferencia del sistema (`prefers-color-scheme`) en la primera visita.
  - Sincronización en tiempo real: Si el usuario cambia el tema del sistema mientras el sitio está abierto, el toggle debe responder (a menos que haya una elección manual previa).
- **FOUC Prevention (Flash of Un-themed Content):**
  - Inyectar un script bloqueante mínimo en el `<head>` de `Layout.astro` para aplicar la clase `.dark` antes del renderizado inicial.
- **Accessibility:**
  - El botón debe ser accesible mediante teclado (`Tab`).
  - Debe incluir atributos `aria-label` descriptivos.

## Non-Functional Requirements
- **Performance:** El script del `<head>` debe pesar menos de 1KB para no impactar en el LCP (Largest Contentful Paint).
- **UX:** La transición debe ser suave (ya configurada en el Track A), pero el estado del icono debe actualizarse instantáneamente.

## Acceptance Criteria
- [ ] El toggle cambia correctamente entre los modos claro y oscuro.
- [ ] La preferencia se mantiene al recargar la página o navegar a otras secciones.
- [ ] No hay destellos blancos al cargar la página si el modo oscuro está activo.
- [ ] El componente es totalmente accesible.

## Out of Scope
- Configuración de temas adicionales (e.g., modo sepia).
- Cambio de iconos mediante animaciones complejas (Lottie, etc.).

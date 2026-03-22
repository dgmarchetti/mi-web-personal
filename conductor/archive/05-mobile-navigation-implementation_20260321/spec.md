# Track Specification: Mobile Navigation (Hamburger Menu)

## Overview
Implementar un sistema de navegación responsive utilizando un menú de hamburguesa para pantallas móviles, asegurando accesibilidad, rendimiento y una estética coherente con el proyecto.

## Functional Requirements
- **Hamburger Toggle Component:**
  - Un botón de tres barras (hamburguesa) que se transforme en una 'X' al activarse.
  - Ubicación: En el `Header`, visible únicamente en pantallas pequeñas (`sm`/`md`).
  - Animación: Transición suave y orgánica de los trazos del icono.
- **Mobile Menu Drawer:**
  - Un panel lateral (side drawer) que se deslice desde un lateral al activarse.
  - Contenido: Debe incluir todos los enlaces de navegación actuales.
  - Comportamiento: El menú debe cerrarse al hacer clic en un enlace o fuera del panel.
- **Header Persistence:**
  - El **Theme Toggle** debe permanecer visible en el `Header` principal junto al botón de hamburguesa en móviles para facilitar el cambio de tema rápido.
- **Logic & Accessibility:**
  - Uso de Vanilla JS para el manejo del estado (clases de CSS).
  - Accesibilidad: Uso de `aria-expanded`, `aria-controls` y gestión del foco (trap focus) si es posible para mejorar la experiencia con lectores de pantalla.

## Non-Functional Requirements
- **Performance:** Animaciones optimizadas mediante CSS `transform` y `opacity` para evitar *repaints*.
- **Responsive:** Punto de quiebre (breakpoint) alineado con los estándares de Tailwind (e.g., `< md` o `< lg`).

## Acceptance Criteria
- [ ] El menú de hamburguesa solo es visible en pantallas móviles/tablets.
- [ ] Al hacer clic, el menú lateral se desliza correctamente.
- [ ] El icono de hamburguesa se transforma en 'X' y viceversa.
- [ ] El Theme Toggle es accesible tanto en modo desktop como móvil.
- [ ] La navegación funciona correctamente desde el menú móvil.

## Out of Scope
- Implementación de submenús o menús multinivel.
- Búsqueda dentro del menú móvil.

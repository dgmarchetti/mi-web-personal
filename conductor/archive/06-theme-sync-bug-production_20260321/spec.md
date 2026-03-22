# Track Specification: Theme Sync Bug Fix (Production/Mobile)

## Overview
Corregir un fallo que **solo ocurre en el entorno de producción (y es visible en móviles)**, donde los componentes externos (body, header, footer, mobile menu) no sincronizan correctamente su color al alternar entre temas claro y oscuro, quedando fijos en el modo por defecto del sistema. En el entorno de desarrollo local, la alternancia funciona correctamente.

## Problem Analysis
- Funciona correctamente en `localhost` (dev mode), pero falla tras el `astro build`.
- En producción, los componentes dentro de los grids (tarjetas, artículos) responden correctamente a la clase `.dark`.
- Los contenedores raíz y externos (`main`, `header`, `footer`) parecen ignorar el cambio de tema manual y mantienen el estado basado en `prefers-color-scheme` o en estilos fijos.
- Esto indica un problema de especificidad CSS en el bundle final de producción, o una resolución incorrecta de la cascada de variables entre la clase `.dark` y la media query del sistema cuando CSS es minificado por Tailwind v4/Vite.

## Functional Requirements
- **Global Theme Persistence:**
  - Asegurar que la clase `.dark` en el `<html>` sea la única fuente de verdad con la máxima especificidad para **todos** los elementos del sitio en producción.
- **CSS Variable Sincronización:**
  - Refactorizar `global.css` para resolver el conflicto de especificidad entre `@media (prefers-color-scheme: dark)` y la clase `.dark`. Es probable que necesitemos forzar que la clase `.dark` sobrescriba las variables de la media query independientemente del orden de minificación.
- **Header & Mobile Menu Fix:**
  - Asegurar que el `MobileMenu` y el `Header` hereden las variables correctas en el build estático.

## Acceptance Criteria
- [ ] En un entorno emulado de producción (`npm run build && npm run preview`), al alternar el tema, **todo** el sitio cambia de color instantáneamente.
- [ ] La preferencia guardada se aplica correctamente a todos los niveles del DOM.
- [ ] El comportamiento es consistente entre el entorno local (`dev`) y el entorno de producción (`preview`/producción real).

## Out of Scope
- Adición de nuevos colores.

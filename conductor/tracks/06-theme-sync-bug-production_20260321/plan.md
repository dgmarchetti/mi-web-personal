# Implementation Plan: Theme Sync Bug Fix (Production)

## Objective
Corregir el bug de sincronización de temas que ocurre exclusivamente en producción, asegurando que los contenedores raíz y externos hereden correctamente los colores del modo oscuro/claro basados en la clase `.dark`, resolviendo conflictos de especificidad CSS que surgen durante el build.

## Key Files & Context
- `src/styles/global.css`: El foco principal. El orden de las declaraciones de variables y media queries debe ajustarse para sobrevivir a la minificación.
- `src/layouts/Layout.astro`: Verificar que la inyección de la clase `.dark` y la definición inicial no estén siendo sobrescritas en producción.
- `package.json`: Para utilizar los scripts de `build` y `preview`.

## Implementation Steps

### Phase 1: CSS Specificity & Refactoring
- [ ] Task: Refactor CSS Variable Specificity
    - [ ] Modificar `src/styles/global.css`.
    - [ ] Mover las definiciones base (`:root`) a un bloque aislado.
    - [ ] Redefinir la media query `@media (prefers-color-scheme: dark)` para que solo aplique si NO está presente la clase `.light` en el HTML (forzando un control de prioridad).
    - [ ] Asegurar que la clase `.dark` tenga la máxima especificidad (e.g., usando `html.dark` o anidamiento explícito) para que no sea ignorada por el empaquetador de Tailwind v4 en producción.
- [ ] Task: Verify Tailwind v4 Theme directive
    - [ ] Revisar si la sintaxis `@theme` de Tailwind v4 requiere un manejo especial en producción para las variables nativas, y ajustar si es necesario.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: CSS Specificity & Refactoring' (Protocol in workflow.md)

### Phase 2: Production Emulation & Testing
- [ ] Task: Emulate Production Environment
    - [ ] Ejecutar `npm run build`.
    - [ ] Ejecutar `npm run preview` para levantar el servidor de producción local.
- [ ] Task: Verify Fix in Emulated Environment
    - [ ] Navegar por el sitio en el entorno `preview`.
    - [ ] Alternar el toggle de tema.
    - [ ] Confirmar que el `body`, `Header` y `MobileMenu` cambian de color simultáneamente con las tarjetas internas, sin quedarse fijos.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Production Emulation & Testing' (Protocol in workflow.md)

## Verification & Testing
- Automated: El build (`npm run build`) debe completarse sin errores.
- Manual: La prueba de fuego debe realizarse siempre sobre el build de producción (`npm run preview`) y, si es posible, simulando un dispositivo móvil en las DevTools durante el preview.

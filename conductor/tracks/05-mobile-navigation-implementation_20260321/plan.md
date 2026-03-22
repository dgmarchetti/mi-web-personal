# Implementation Plan: Mobile Navigation (Hamburger Menu)

## Objective
Implementar un menú de navegación tipo hamburguesa (responsive) con un panel lateral (side drawer) deslizable, utilizando Vanilla JS y animaciones CSS optimizadas, manteniendo la accesibilidad y el Theme Toggle visible en todo momento.

## Key Files & Context
- `src/components/Header.astro`: Principal archivo de integración.
- `src/components/MobileMenu.astro`: Nuevo componente de panel lateral.
- `src/components/HamburgerToggle.astro`: Nuevo componente de icono animado.
- `src/styles/global.css`: Para animaciones globales si es necesario.

## Implementation Steps

### Phase 1: Logic & Basic Structure
- [x] Task: Create HamburgerToggle Component
    - [x] Diseñar un icono de tres líneas con SVG.
    - [x] Añadir animaciones CSS para transformar las líneas en una 'X'.
    - [x] Añadir atributos `aria-label` y `aria-expanded` para accesibilidad.
- [x] Task: Integrate Toggle in Header
    - [x] Modificar `Header.astro` para mostrar el `HamburgerToggle` solo en móviles (breakpoint `lg`).
    - [x] Asegurar que el Theme Toggle esté ubicado correctamente junto al botón de hamburguesa.
- [~] Task: Conductor - User Manual Verification 'Phase 1: Logic & Basic Structure' (Protocol in workflow.md)

### Phase 2: Mobile Menu Drawer & Animation
- [x] Task: Create MobileMenu Component
    - [x] Diseñar el panel lateral deslizable (side drawer) con un fondo semi-transparente y desenfoque (`backdrop-blur`).
    - [x] Incluir la lista de navegación duplicada o centralizada para móviles.
    - [x] Implementar la animación de entrada/salida (`transform: translateX`).
- [x] Task: Implement Navigation Logic (JS)
    - [x] Añadir un script en el cliente para manejar el evento `click` del toggle.
    - [x] Gestionar la clase `open`/`active` en el menú y el toggle.
    - [x] Implementar el cierre automático al hacer clic en un enlace o fuera del panel.
- [~] Task: Conductor - User Manual Verification 'Phase 2: Mobile Menu Drawer & Animation' (Protocol in workflow.md)

### Phase 3: Accessibility & Final Polish
- [x] Task: Refine Accessibility (A11y)
    - [x] Asegurar que el menú móvil sea navegable mediante teclado (`Tab`).
    - [x] Probar con lectores de pantalla (VoiceOver/TalkBack).
    - [x] Verificar que no haya desbordamiento de scroll (`overflow-hidden` en el `body`) cuando el menú esté abierto.
- [x] Task: Final Responsive Audit
    - [x] Verificar el comportamiento en diferentes tamaños de pantalla (iPhone, iPad, Desktop).
- [x] Task: Conductor - User Manual Verification 'Phase 3: Accessibility & Final Polish' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run check` para validar tipos y estructura.
- Manual: 
    - Abrir y cerrar el menú en modo móvil.
    - Verificar que el icono cambie de forma.
    - Navegar a través de los enlaces del menú móvil.
    - Probar en un dispositivo real o simulador de navegador.

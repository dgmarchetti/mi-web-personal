# Track Specification: Remove Application Pillars from Home

## Overview
This track involves the complete removal of the "Cómo aplico esto" (How I apply this) section from the Home page (`src/pages/index.astro`). This section currently lists the four pillars: "Automatización con IA", "Sistemas personales", "Domótica", and "Ecosistemas digitales".

## Functional Requirements
- **Content Removal:**
  - Remove the entire `<section>` containing the "Cómo aplico esto" heading and the grid of four articles.
- **Layout Adjustments:**
  - Tighten the vertical spacing between the preceding "Bloque de Contexto" and the following "Diferencial" section to ensure a smooth visual flow.
  - The page will become shorter and more focused on the core manifesto and practice.

## Non-Functional Requirements
- **Consistency:** Maintain the minimalist and organic aesthetic by ensuring no awkward gaps are left behind.
- **Clean Code:** Ensure no unused CSS classes or stray HTML tags remain in the component after removal.

## Acceptance Criteria
- [ ] The "Cómo aplico esto" section is completely gone from the Home page.
- [ ] The page layout remains visually balanced with tightened spacing.
- [ ] No build errors occur after the removal.

## Out of Scope
- Adding new content or sections.
- Reordering other sections beyond simple spacing adjustments.

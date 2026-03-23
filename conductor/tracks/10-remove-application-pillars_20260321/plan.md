# Implementation Plan: Remove Application Pillars from Home

## Objective
Completely remove the "Cómo aplico esto" section from the Home page (`src/pages/index.astro`) and adjust the surrounding layout for better focus and flow.

## Key Files & Context
- `src/pages/index.astro`: The file where the section needs to be removed.

## Implementation Steps

### Phase 1: Content Removal & Layout Adjustment [checkpoint: 94f75d0]
- [x] Task: Remove "Cómo aplico esto" Section
    - [x] Locate the `<section>` containing the "Cómo aplico esto" header and the 4-article grid in `src/pages/index.astro`.
    - [x] Delete the entire section block.
- [x] Task: Adjust Vertical Spacing
    - [x] Review the `mb-24` (or similar) margin classes on the preceding and following sections.
    - [x] Adjust spacing if necessary to ensure the transition between the Context block and the Differential block feels organic and intentional.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Content Removal & Layout Adjustment' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run build` to ensure the project still compiles correctly.
- Manual: 
    - Open the Home page in a browser (dev mode).
    - Confirm the section is gone.
    - Check the vertical rhythm and spacing between "No es sobre tecnología..." and "Esto no es contenido. Es práctica."

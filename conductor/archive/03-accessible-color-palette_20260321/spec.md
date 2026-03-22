# Track Specification: Accessible Color Palette (WCAG 2.1 AA)

## Overview
Define a color palette and system for light and dark modes that strictly follows WCAG 2.1 AA standards (4.5:1 ratio for normal text and 3:1 for large text). This track focuses on the foundational design tokens and their application across the site using Tailwind CSS v4.

## Functional Requirements
- **Accessible Palette (WCAG 2.1 AA):**
  - Define contrasting colors for light and dark modes.
  - Normal text (4.5:1) and large text (3:1) must meet requirements.
  - Use "Inverted Organics" as the basis for the dark mode (deep earthy/neutral tones).
- **Tailwind v4 Variables:**
  - Define all color tokens in `src/styles/global.css` using the `@theme` directive.
  - Use CSS variables for easy overriding (e.g., `--color-text-main`, `--color-bg-base`).
- **Theming Implementation:**
  - Use a `.dark` class or `data-theme` attribute to switch themes.
  - The site must respect the system preference (`prefers-color-scheme`) by default.
  - Apply an organic, smooth transition during theme changes to maintain the relaxing feel.
- **Scope & Application:**
  - Update `src/layouts/Layout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`.
  - Ensure the MDX blog post content (`src/pages/blog/[id].astro`) correctly adapts.
  - Update all home page sections.

## Non-Functional Requirements
- **Accessibility:** Ensure 100% compliance with WCAG 2.1 AA contrast standards for all text-on-background combinations.
- **Validation:** 
  - Automated CI checks (axe-core) for contrast ratios.
  - Unit tests to verify the color tokens and their contrast.
- **Performance:** Ensure no cumulative layout shift (CLS) occurs when themes are applied.

## Acceptance Criteria
- [ ] Light and dark modes correctly apply to all pages and components.
- [ ] All text-to-background combinations meet WCAG 2.1 AA contrast ratios.
- [ ] Theme switches smoothly with an organic transition.
- [ ] Automated accessibility tests pass.
- [ ] System preference is respected by default.

## Out of Scope
- Implementation of the theme toggle UI component (Track B).
- High-level AAA compliance (unless specifically required for certain items).
- Contrast for non-textual decorative elements.

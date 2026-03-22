# Implementation Plan: Accessible Color Palette (WCAG 2.1 AA)

## Objective
Define a WCAG 2.1 AA accessible color palette for light and dark modes, using Tailwind CSS v4 variables and ensuring all text-on-background combinations meet the required contrast ratios (4.5:1 for normal text, 3:1 for large text).

## Key Files & Context
- `src/styles/global.css`: CSS variables and Tailwind @theme configuration.
- `src/layouts/Layout.astro`: Base layout container for theme classes.
- `src/components/Header.astro`, `src/components/Footer.astro`: Core UI components to be themed.
- `src/pages/blog/[id].astro`: Blog content rendering with MDX.
- `package.json`: For adding potential accessibility testing dependencies.

## Implementation Steps

### Phase 1: Palette Definition & Tokenization
- [x] Task: Define WCAG 2.1 AA Accessible Color Tokens
    - [x] Research and select neutral/earthy colors for light and dark modes.
    - [x] Verify contrast ratios (4.5:1 / 3:1) for all text/background pairs.
    - [x] Update `src/styles/global.css` with `@theme` variables for light and dark modes.
    - [x] Apply a smooth, organic transition to color changes (`transition: color 0.3s, background-color 0.3s`).
- [x] Task: Add Accessibility Validation Dependencies
    - [x] Evaluate and add `axe-core` or a similar tool for CLI contrast checks.
    - [x] Create a script for automated accessibility testing.
- [~] Task: Conductor - User Manual Verification 'Phase 1: Palette Definition & Tokenization' (Protocol in workflow.md)

### Phase 2: Theme Application & Integration
- [ ] Task: Implement Theme Support in Layout
    - [ ] Update `src/layouts/Layout.astro` to include the base theme classes (e.g., `bg-neutral-soft dark:bg-neutral-900 text-text-main dark:text-neutral-100`).
    - [ ] Ensure system preference is respected by default using CSS media queries or initial script detection.
- [ ] Task: Update Core UI Components (Header/Footer)
    - [ ] Theme `src/components/Header.astro` with the new accessible tokens.
    - [ ] Theme `src/components/Footer.astro` with the new accessible tokens.
    - [ ] Ensure all link and button states (hover, focus, active) are accessible.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Theme Support in Layout' (Protocol in workflow.md)

### Phase 3: Content & Blog Theme Polish
- [ ] Task: Theme MDX Blog Content
    - [ ] Update `src/pages/blog/[id].astro` to ensure MDX content (headings, paragraphs, code blocks) correctly adapts to dark mode.
    - [ ] Ensure the Table of Contents and social links are accessible in both themes.
- [ ] Task: Theme Home/Landing Page Sections
    - [ ] Update all content sections on the home page with accessible color tokens.
- [ ] Task: Final Accessibility Audit & Validation
    - [ ] Run automated accessibility checks.
    - [ ] Manually verify contrast ratios for all visible text using browser DevTools.
    - [ ] Confirm smooth, organic transition between themes.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Content & Blog Theme Polish' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run test:a11y` (or similar script) after each task.
- Manual: Use browser accessibility tools (e.g., Chrome DevTools Accessibility tab) to verify contrast ratios.
- Build Check: Confirm themes correctly apply in production builds.

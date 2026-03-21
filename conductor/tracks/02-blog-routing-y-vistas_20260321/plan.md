# Implementation Plan: 02-blog-routing-y-vistas

## Objective
Implement the blog routing and rendering system using Astro v6 Content Collections API, creating the index list and dynamic post views with a minimalist and organic aesthetic using Tailwind CSS.

## Key Files & Context
- `src/pages/blog/index.astro`: Article list view.
- `src/pages/blog/[slug].astro`: Dynamic article detail view.
- `src/content.config.ts`: Configuration for Astro Content Collections.
- `src/layouts/Layout.astro`: Base layout to be used.
- `src/styles/global.css`: Global styles including Tailwind.

## Implementation Steps

### Phase 1: Content Collection & Initial Routing
- [ ] Task: Update Content Collection Configuration
    - [ ] Verify `src/content.config.ts` has the 'blog' collection defined with the required schema (title, description, date, draft, tags).
    - [ ] Create mock blog posts in `src/content/blog/` to test rendering (including one draft).
- [ ] Task: Implement Blog Index Page (`/blog`)
    - [ ] Create `src/pages/blog/index.astro`.
    - [ ] Implement `getCollection('blog')` with environment-aware draft filtering.
    - [ ] Create a basic minimalist list structure with title, description, and short numeric date.
    - [ ] Apply initial Tailwind classes for organic styling.
- [ ] Task: Implement Dynamic Post Page (`/blog/[slug]`)
    - [ ] Create `src/pages/blog/[slug].astro`.
    - [ ] Implement `getStaticPaths` to generate routes for all blog posts.
    - [ ] Use the `render()` function to display MDX content.
    - [ ] Integrate with the base `Layout`.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Content Collection & Initial Routing' (Protocol in workflow.md)

### Phase 2: Enhanced Features & Metadata
- [ ] Task: Enhance MDX Rendering Features
    - [ ] Configure Astro to support optimized images in MDX.
    - [ ] Ensure Shiki code highlighting is enabled.
    - [ ] Implement a Table of Contents (ToC) component or utility for the post page.
- [ ] Task: Add Metadata and Post Navigation
    - [ ] Calculate and display estimated reading time for each post.
    - [ ] Add "Back to Blog" link and taxonomy tags to the post page.
    - [ ] Implement "Previous" and "Next" post navigation links.
    - [ ] Add social sharing links based on post metadata.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Enhanced Features & Metadata' (Protocol in workflow.md)

### Phase 3: Final Styling & Polish
- [ ] Task: Refine Organic Aesthetic & Responsive Design
    - [ ] Fine-tune Tailwind classes (neutral tones, spacing, organic shapes).
    - [ ] Ensure full responsiveness (mobile-first approach).
    - [ ] Perform a final audit of accessibility (semantic HTML, ARIA).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Styling & Polish' (Protocol in workflow.md)

## Verification & Testing
- Automated: Run `npm run check` and `npm run test` (if applicable) after each task.
- Manual: Verify the blog index and posts in the development server (`npm run dev`).
- Build Check: Run `npm run build` to confirm drafts are correctly hidden in production.

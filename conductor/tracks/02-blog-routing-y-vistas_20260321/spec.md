# Track Specification: 02-blog-routing-y-vistas

## Overview
Implement the blog routing and rendering system using Astro v6 Content Collections API. This track focuses on creating the article list (index) and individual post views, ensuring they follow the project's minimalist and organic aesthetic using Tailwind CSS.

## Functional Requirements
- **Blog Index Page (`/src/pages/blog/index.astro`):**
  - List all blog articles using `getCollection('blog')`.
  - Filter out articles with `draft: true` in production (visible in development).
  - Display for each article: Title, Description, Date (Short Numeric Format), and Reading Time.
  - Layout: Minimalist list with organic, clean spacing.
- **Blog Post Page (`/src/pages/blog/[slug].astro`):**
  - Use `getStaticPaths` for dynamic routing based on the article's slug.
  - Use the `render()` function from Astro Content Collections to display MDX content.
  - Support for optimized images, code highlighting (Shiki), and Table of Contents.
  - Include navigation elements: "Back to Blog" link, Taxonomies (tags/categories), and "Previous/Next" post links.
  - Social sharing links (metadata-based).
- **Styling:**
  - Apply Tailwind CSS classes following the "Zero-Budget" ecosystem aesthetic (neutral tones, organic shapes, relaxing design).
  - Use the project's base `Layout`.

## Non-Functional Requirements
- **Performance:** Ensure fast page loads using Astro's SSG capabilities.
- **Accessibility:** Ensure semantic HTML and proper ARIA labels where necessary.
- **Responsive Design:** Mobile-first approach for all views.

## Acceptance Criteria
- [ ] `/blog` correctly lists all non-draft articles.
- [ ] `/blog/[slug]` correctly renders MDX content with styling.
- [ ] Drafts are hidden in production builds but visible in development.
- [ ] Navigation elements (Back, Prev/Next) work as expected.
- [ ] Design matches the established project aesthetic.

## Out of Scope
- Search functionality.
- Commenting system.
- RSS feed (reserved for a future track).

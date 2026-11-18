# Repository guidance

## Project structure

- This is a Vite + React portfolio using JavaScript, Tailwind CSS, React Router, Framer Motion, and Lenis.
- Keep portfolio content in the existing data modules under `src/data/`; follow their current schema and component patterns.
- Application routes are declared in `src/AppRoutes.jsx`. Keep page routes lazy-loaded and add route-specific pages there.

## Portfolio behavior and content

- The CV PDF lives in `public/`; `site.resumeUrl` in `src/data/site.js` is its public URL. Use that shared value for CV links. The view links open the PDF in a new tab; the download link uses the `download` attribute.
- Project cards and modal content are driven by `src/data/projects.js`. The card opens a modal; keep its live, source, and optional detail actions together in the modal action row.
- A project has a detail page when `src/content/projects/<project-id>.md` exists, where `<project-id>` matches its `id` in `src/data/projects.js`. The page route is `/projects/<project-id>`.
- Write project detail content in Markdown. Store images and GIFs in `public/` and reference them with root-relative URLs such as `/images/example.gif`.
- Render Markdown through `src/components/MarkdownContent.jsx`; its wrapper owns the prose styles. Preserve GFM and fenced-code highlighting.
- The project modal locks page scrolling and pauses Lenis while open. Keep the modal card itself scrollable and allow Lenis-prevented native scrolling inside it.
- The project detail page returns to `/#projects`; preserve the home page's offset-aware scroll behavior so the fixed navbar does not cover the section heading.

## Validation

- Run `npm run build` after application changes.
- Run ESLint on the changed JavaScript/JSX files, for example `npx eslint src/components/Projects.jsx`.

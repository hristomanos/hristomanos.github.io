# Portfolio

## Stack

- Vite + React
- Tailwind CSS
- React Router
- Framer Motion + Lenis
- react-markdown (blog)
- EmailJS (optional contact)

## Project detail pages

Add a Markdown file in `src/content/projects/` named after the project's `id`
in `src/data/projects.js` to show a **View project details** link on its card.
For example, `src/content/projects/project-two.md` creates the page at
`/projects/project-two`.

Write the page content in Markdown. To add an image or GIF, put it in `public/`
and reference its URL, for example:

```md
![Gameplay capture](/images/card-sorter-gameplay.gif)
```

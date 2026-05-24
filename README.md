# Portfolio

A dark, animated developer portfolio built with Vite, React, and Tailwind CSS. Inspired by modern single-page portfolios; all content is driven from `src/data/`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize content

See [CONTENT.md](./CONTENT.md) for which files to edit. Start with `src/data/site.js` and replace placeholder images in `public/images/`.

## Contact form

1. Copy `.env.example` to `.env`
2. Add [EmailJS](https://www.emailjs.com/) service, template, and public key
3. Restart the dev server

Without EmailJS, the form falls back to `mailto:`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel

Push to GitHub and import the repo. `vercel.json` handles SPA routing.

### Netlify

Build command: `npm run build`  
Publish directory: `dist`  
`public/_redirects` handles SPA routing.

After deploy, update `site.url` in `src/data/site.js` and meta tags in `index.html`.

## Stack

- Vite + React
- Tailwind CSS
- React Router
- Framer Motion + Lenis
- react-markdown (blog)
- EmailJS (optional contact)

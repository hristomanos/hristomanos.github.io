# Content guide

All copy and structured data lives in `src/data/`. Components read from these files — you should not need to edit JSX for routine updates.

## `src/data/site.js`

| Field | Purpose |
|-------|---------|
| `name`, `title`, `tagline` | Hero and page identity |
| `location`, `email`, `url` | Contact and SEO canonical |
| `avatar` | Path under `public/` (e.g. `/images/profile.webp`) |
| `resumeUrl` | Link to PDF in `public/resume.pdf` |
| `available` | Shows “Available for opportunities” badge |
| `bio` | Array of paragraphs for About |
| `stats` | Stat cards (label + value) |
| `socials` | `github`, `linkedin`, `twitter` URLs |
| `seo` | Meta description and keywords |

Also update matching fields in `index.html` (title, OG tags, JSON-LD).

## `src/data/skills.js`

Edit `skillGroups`: each group has `title` and `skills` (`name`, optional `icon` path).

## `src/data/experience.js`

Array of jobs: `company`, `role`, `period`, `location`, `description`, `highlights[]`.

## `src/data/projects.js`

Array of projects plus `projectCategories` for filters. Per project:

- `id`, `title`, `description`, `longDescription`
- `tech[]`, `image`, `links.live`, `links.github`
- `featured`, `category` (must match a category `id`)

## `src/data/posts.js`

Array of blog posts: `slug`, `title`, `date` (ISO), `excerpt`, `tags[]`, `readTime`, `content` (markdown string).

## Images

Place files in `public/images/`. Prefer `.webp` for photos. Update paths in data files.

## Contact form (optional)

Copy `.env.example` to `.env` and add [EmailJS](https://www.emailjs.com/) credentials. Without them, submit opens the user’s mail client.

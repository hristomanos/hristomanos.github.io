export const posts = [
  {
    slug: "hello-world",
    title: "Hello, World — Starting This Blog",
    date: "2026-01-15",
    excerpt:
      "Why I started writing about software, and what you can expect from future posts.",
    tags: ["meta", "career"],
    readTime: "3 min",
    content: `## Welcome

This is a **sample blog post**. Replace it with your own writing in \`src/data/posts.js\`.

### What to write about

- Technical deep-dives from projects you shipped
- Lessons learned from debugging hard problems
- Short tutorials on tools you use daily

\`\`\`js
// Example code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> Good posts are specific. Pick one idea and explain it clearly.

Happy building!`,
  },
  {
    slug: "building-fast-interfaces",
    title: "Building Fast Interfaces with React",
    date: "2026-02-20",
    excerpt:
      "Practical tips for keeping React apps snappy: memoization, lazy loading, and perceived performance.",
    tags: ["react", "performance"],
    readTime: "5 min",
    content: `## Perceived performance matters

Users forgive slow networks more than janky interactions. Focus on:

1. **Skeleton states** instead of blank screens
2. **Lazy routes** for pages that are not on the critical path
3. **Reduced motion** respect via \`prefers-reduced-motion\`

### Lazy loading example

Split heavy pages with \`React.lazy\` and a lightweight fallback:

\`\`\`jsx
const BlogList = lazy(() => import("./pages/BlogList"));
\`\`\`

Measure with Lighthouse, then optimize what the data shows — not guesses.`,
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(count = 3) {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

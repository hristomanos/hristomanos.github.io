import{a as e,i as t,n,r,t as i}from"./index-OYUmGshj.js";var a=t(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),o=n();function s({children:t,backTo:n=`/blog`,backLabel:s=`All posts`}){return(0,o.jsxs)(`div`,{className:`min-h-screen bg-bg relative z-10`,children:[(0,o.jsx)(`header`,{className:`border-b border-border`,children:(0,o.jsxs)(`div`,{className:`max-w-3xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between`,children:[(0,o.jsx)(e,{to:`/`,className:`font-heading font-semibold hover:text-accent transition-colors`,children:r.name}),(0,o.jsxs)(e,{to:n,className:`inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors`,children:[(0,o.jsx)(a,{size:16}),s]})]})}),(0,o.jsx)(`main`,{className:`max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16`,children:t}),(0,o.jsx)(i,{})]})}var c=[{slug:`hello-world`,title:`Hello, World — Starting This Blog`,date:`2026-01-15`,excerpt:`Why I started writing about software, and what you can expect from future posts.`,tags:[`meta`,`career`],readTime:`3 min`,content:`## Welcome

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

Happy building!`},{slug:`building-fast-interfaces`,title:`Building Fast Interfaces with React`,date:`2026-02-20`,excerpt:`Practical tips for keeping React apps snappy: memoization, lazy loading, and perceived performance.`,tags:[`react`,`performance`],readTime:`5 min`,content:`## Perceived performance matters

Users forgive slow networks more than janky interactions. Focus on:

1. **Skeleton states** instead of blank screens
2. **Lazy routes** for pages that are not on the critical path
3. **Reduced motion** respect via \`prefers-reduced-motion\`

### Lazy loading example

Split heavy pages with \`React.lazy\` and a lightweight fallback:

\`\`\`jsx
const BlogList = lazy(() => import("./pages/BlogList"));
\`\`\`

Measure with Lighthouse, then optimize what the data shows — not guesses.`}];function l(e){return c.find(t=>t.slug===e)}export{c as n,s as r,l as t};
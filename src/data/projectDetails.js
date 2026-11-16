const detailFiles = import.meta.glob("../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const detailsBySlug = Object.fromEntries(
  Object.entries(detailFiles).map(([path, content]) => [
    path.split("/").pop().replace(/\.md$/, ""),
    content,
  ]),
);

export function getProjectDetails(slug) {
  return detailsBySlug[slug];
}

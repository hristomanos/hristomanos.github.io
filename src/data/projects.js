export const projects = [
  {
    id: "project-one",
    title: "Bowling Fury",
    description:
      "Bowling Fury is a competitive and fast paced mobile bowling game with over 500K installs and 4.6 average rating on app stores.",
    longDescription:
      "Expand on the problem you solved, your technical decisions, and the outcome. Recruiters skim for impact and stack.",
    tech: ["Multi-layered C# application", "Unity","GCP", "Redis"],
    image: "/images/BowlingFuryLogo.webp",
    links: {
      live: "https://play.google.com/store/apps/details?id=uk.co.yakuto.Bowling&pcampaignid=web_share",
    },
    featured: true,
    category: "fullstack",
  },
  // {
  //   id: "project-two",
  //   title: "Project Beta",
  //   description:
  //     "An open-source CLI or library that automates a repetitive workflow for developers.",
  //   longDescription:
  //     "Describe adoption, design goals, and any interesting implementation details.",
  //   tech: ["TypeScript", "Rust", "Docker"],
  //   image: "/images/project-2.svg",
  //   links: {
  //     live: null,
  //     github: "https://github.com/yourusername/project-beta",
  //   },
  //   featured: true,
  //   category: "tools",
  // },
  // {
  //   id: "project-three",
  //   title: "Project Gamma",
  //   description:
  //     "A mobile-friendly marketing site or landing page with animations and strong performance scores.",
  //   longDescription:
  //     "Mention Lighthouse scores, animation approach, or CMS integration if relevant.",
  //   tech: ["Vite", "React", "Framer Motion"],
  //   image: "/images/project-3.svg",
  //   links: {
  //     live: "https://example.com",
  //     github: "https://github.com/yourusername/project-gamma",
  //   },
  //   featured: false,
  //   category: "frontend",
  // },
  // {
  //   id: "project-four",
  //   title: "Project Delta",
  //   description:
  //     "API service with caching, observability, and deployment on a cloud provider.",
  //   longDescription:
  //     "Cover architecture, scaling considerations, and monitoring setup.",
  //   tech: ["Go", "Redis", "AWS"],
  //   image: "/images/project-4.svg",
  //   links: {
  //     live: null,
  //     github: "https://github.com/yourusername/project-delta",
  //   },
  //   featured: false,
  //   category: "backend",
  // },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

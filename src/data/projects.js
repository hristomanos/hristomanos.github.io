export const projects = [
  {
    id: "project-one",
    title: "Bowling Fury: Ten Pin King",
    year: "2023 – 2024 · Released",
    description:
      "Bowling Fury is a competitive and fast paced mobile bowling game with over 500K installs and 4.6 average rating on app stores.",
    longDescription:
      "As a Junior Software Developer, I contributed to the development of Bowling Fury by tackling a variety of tasks across the codebase. I implemented new features, optimized performance, and fixed bugs to enhance the overall gaming experience. I also collaborated closely with the product and art teams to ensure seamless integration of assets and smooth gameplay. With 1M+ installs across multiple platforms, I am proud to have been part of a team that was diligent, passionate and professional, and I gained valuable experience in programming, software architecture and teamwork.",
    tech: ["C#", "Unity","GCP", "Redis"],
    image: "/images/BowlingFuryLogo.webp",
    images: [
      // "/images/BowlingFuryLogo.webp",
      // "/images/Achievements.webp",
      // "/images/Components.webp",
    ],
    links: {
      live: "https://apps.apple.com/gb/app/bowling-fury-ten-pin-king/id6450177184",
    },
    featured: true,
    category: "shippedTitles",
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
  { id: "shippedTitles", label: "Shipped Titles" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

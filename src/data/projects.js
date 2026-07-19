export const projects = [
  {
    id: "project-one",
    title: "Bowling Fury: Ten Pin King",
    year: "2023 – 2024 · Released",
    description:
      "Competitive and fast paced mobile bowling game with over 500K installs and 4.6 average rating on app stores.",
    longDescription:
      "As a Junior Software Developer, I contributed to the development of Bowling Fury by tackling a variety of tasks across the codebase. I implemented new features, optimized performance, and fixed bugs to enhance the overall gaming experience. I also collaborated closely with the product and art teams to ensure seamless integration of assets and smooth gameplay. With 1M+ installs across multiple platforms, I am proud to have been part of a team that was diligent, passionate and professional, and I gained valuable experience in programming, software architecture and teamwork.",
    tech: ["C#", "Unity","GCP", "Redis", "Kubernetes", "Firebase", "TeamCity", "DOTween"],
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
  {
    id: "project-two",
    title: "Card Sorter",
    year: "2026 · Completed",
    description:
      "A satisfying hyper-casual card-sorting puzzle game where players tap stacks of cards, fill matching containers, and avoid conveyor overflow.",
    longDescription:
      "I built the core gameplay loop in Unity, including card stack interaction, spline-based conveyor movement, container matching, deck overflow failure, win/loss state handling, and animated UI feedback using DOTween. A key technical challenge was coordinating asynchronous card animations with gameplay state, especially ensuring cards could safely transition between stacks, conveyor lanes, containers, and the deck without race conditions. On the design side, I focused on making the prototype feel immediately readable and satisfying by using color-coded ScriptableObject configurations, designer-friendly lane/container data, staggered card motion, and responsive feedback for successful sorting, level completion, and failure states.",
    tech: ["C#", "Unity3D", "DOTween", "Splines"],
    image: "/images/CardSorter.webp",
    links: {
      live: "https://chrima.itch.io/card-sorter",
      github: "https://github.com/hristomanos/Voodoo_Code_Test_Marketing_Unity_Developer",
    },
    featured: false,
    category: "unity",
  },
  {
    id: "project-three",
    title: "Mine Jack",
    year: "2026 · Completed",
    description:
      "A casino-style tower streak game where players try to find randomly placed keys and avoid the bombs.",
    longDescription:
      "Implemented everything from scratch in Unity, including the core gameplay loop, procedural grid generation, difficulty progression, player input handling, and UI feedback. A key technical challenge was ensuring that the randomly generated tower layouts were always solvable and provided a fair challenge to players. I also focused on creating a visually appealing and responsive user interface that clearly communicated game state and player progress.",
    tech: ["C#", "Unity3D"],
    image: "/images/MineJack.webp",
    links: {
      live: "https://chrima.itch.io/minejack",
      github: "https://github.com/hristomanos/MineJack",
    },
    featured: false,
    category: "unity",
  },
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
  { id: "unity", label: "Unity" },
  //{ id: "backend", label: "Backend" },
  //{ id: "tools", label: "Tools" },
];

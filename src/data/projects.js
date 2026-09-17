export const projects = [
  {
    id: "project-one",
    title: "Bowling Fury: Ten Pin King",
    year: "2023 – 2024 · Released",
    description:
      "Competitive and fast-paced mobile bowling game with over 500K installs and 4.6 average rating on app stores.",
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
    tech: ["C#", "Unity", "DOTween", "Splines"],
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
    tech: ["C#", "Unity"],
    image: "/images/MineJack.webp",
    links: {
      live: "https://chrima.itch.io/minejack",
      github: "https://github.com/hristomanos/MineJack",
    },
    featured: false,
    category: "unity",
  },
  {
    id: "project-four",
    title: "Dynamic Tactical Formations in Video Games",
    description:
      "Postgraduate research project exploring dynamic tactical formations for units in real-time strategy games, focusing on obstacle avoidance and pathfinding algorithms.",
    longDescription:
      "Curious about how AI agents behave in groups and a fan of real-time strategy games, I embarked on a research project to explore dynamic tactical formations. " + 
      "Using Unity and C#, I developed a 3D obstacle course that allows players to control units in various formations while navigating complex environments with obstacle avoidance and pathfinding algorithms to ensure coherent movement of units while maintaining their formations." + 
      "Implementing dynamic tactical formations in real-time strategy games presented several challenges. The primary challenge is ensuring that units maintain their formation while navigating complex environments with obstacles and changing terrain. " + 
      "Additionally, the system must be responsive to player commands and adapt to evolving battlefield conditions.",
    tech: ["C#", "Unity", "Unit management", "Pathfinding", "Obstacle avoidance"],
    image: "/images/head_to_head.png",
    links: {
      live: null,
      github: "https://github.com/hristomanos/DynamicTacticalFormations",
    },
    featured: false,
    category: "unity",
  },
  {
    id: "project-five",
    title: "DirectX 11 Graphics Techniques Showcase",
    description:
      "A DirectX 11 application demonstrating various advanced graphics techniques.",
    longDescription:
      "DirectX 11 is a low-level C++ rendering API that enables us to create visually stunning real-time applications. Interacting with DirectX 11 requires a deep understanding of graphics programming concepts. Implementing those concepts as part of my university course was the best way for me to learn. This project features normal mapping, parallax mapping, post-processing effects and lighting. Additionally, procedural terrain generation was implemented using a heighmap. However, it resulted to sharp edges and a lack of natural-looking terrain.The solution was to implement the Diamond-Square algorithm for terrain smoothing, which resulted in a more natural-looking landscape with smoother edges and better overall terrain quality." , 
    tech: ["C++", "DirectX 11", "HLSL","IMGUI", "Graphics programming", "Shader development", "Lighting", "Post-processing", "Normal mapping", "Parallax mapping", "Procedural terrain generation"],
    image: "/images/parallax.png",
    links: {
      live: null,
      github: "https://github.com/hristomanos/DirectX11",
    },
    featured: false,
    category: "directX11",
  },
  {
    id: "project-six",
    title: "Predators and Prey",
    description:
      "It models the behavior of animals in a virtual environment, including their movement, feeding, and reproduction patterns.",
    longDescription:
      "This project focuses on the implementation of Behavioral Trees and State Machines to create autonomous agents that simulate predator-prey interactions within a virtual ecosystem. It demonstrates an autonomous ecosystem simulation where predators and prey interact based on survival instincts such as hunting, fleeing, and breeding. The prey is represented by the small blue (male) and pink (female) circles and is an autonomous agent that reacts to its survival instincts including eating, drinking and breeding. Additionally, having a wider field of view, it flees from predators and employs a behavior tree to manage its behavior." ,
    tech: ["C#", "Unity","Behavioral Trees", "State Machines", "Autonomous Agents", "Ecosystem Simulation"],
    image: "/images/searching_for_food.png",
    links: {
      live: null,
      github: "https://github.com/hristomanos/PredatorsAndPrey",
    },
    featured: false,
    category: "unity",
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "shippedTitles", label: "Shipped Titles" },
  { id: "unity", label: "Unity" },
  { id: "directX11", label: "DirectX 11" },
  //{ id: "tools", label: "Tools" },
];

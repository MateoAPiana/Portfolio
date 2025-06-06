export const studies = [
  {
    title: "Conocimientos básicos Front-end React Js y backend Node.js",
    corporation: "Autodidacta - Remoto",
  },
  {
    title: "Curso de Full-Stack con Next.js y manejo de bases de datos MongoDB",
    corporation: "Platzi - Remoto",
    date: "02/2025 - 06/2025",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },
  {
    title: "Zustand",
    icon: IconKeys.zustand,
  },
]

export const projects = [
  {
    img: "../../../img/chess-project.png",
    title: "Chess",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.vite,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.zustand,
      },
      {
        icon: IconKeys.nodejs,
      },
    ],
  },
  {
    img: "../../../img/Encuesta-enj.png",
    title: "Encuesta ENJ",
    link: "https://encuesta-ENJ.mateoapiana.website/",
    description: `Encuesta organizada por alumnos de la Escuela del Niño Jesús`,
    technologies: [
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.react,
      },
    ],
  }
];

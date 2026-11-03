export const EMAIL = "navadiyaneel0736@gmail.com"
export const RESUME = "/Neel_Navadiya_Resume.pdf"

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/navadiya-neel-658190265" },
  { name: "GitHub", href: "https://github.com/NeelAdmin" },
  { name: "Instagram", href: "https://www.instagram.com/engin.eel_09" },
]

export type Project = {
  id: string
  name: string
  what: string
  role: string
  stack: string[]
  points: string[]
}

export const PROJECTS: Project[] = [
  {
    id: "custama",
    name: "Custama",
    what: "An AI chatbot builder",
    role: "React front end, Node knowledge-base module",
    stack: ["React.js", "Node.js", "AWS", "AI APIs"],
    points: [
      "Built the builder itself: configurable knowledge bases with a live preview of the bot as you edit.",
      "Wired AI APIs to suggest FAQs, which a person approves before the bot may use them.",
      "Designed the schema for the knowledge base, with structured FAQs and version tracking.",
    ],
  },
  {
    id: "verifix",
    name: "Verifix",
    what: "A loan verification system",
    role: "The whole front end, end to end",
    stack: ["React.js", "Redux Toolkit", "RTK Query", "MUI"],
    points: [
      "Owned the UI architecture and every screen of the verification workflow.",
      "Redux Toolkit and RTK Query for state, caching and fetching without waterfalls.",
      "Authentication and role-based authorisation, so each verifier sees only their queue.",
    ],
  },
  {
    id: "community",
    name: "CommUnity",
    what: "A platform for free and paid communities",
    role: "The whole back end, from schema to admin",
    stack: ["Node.js", "MongoDB", "REST APIs", "React.js"],
    points: [
      "RBAC for four roles: Super Admin, Admin, Community Owner and User.",
      "APIs for discovery, joining, categories, memberships, subscriptions and classrooms.",
      "Chat, posts, comments, likes, reporting, moderation and an analytics dashboard.",
    ],
  },
]

export const STACK = [
  {
    id: "lang",
    name: "Languages",
    count: "3",
    items: "JavaScript, TypeScript and SQL. TypeScript by default, SQL when the ORM gets in the way.",
  },
  {
    id: "front",
    name: "Front end",
    count: "8",
    items: "React.js, Next.js, Redux Toolkit, RTK Query, MUI, Tailwind CSS, responsive layouts and component architecture.",
  },
  {
    id: "access",
    name: "Access control",
    count: "3",
    items: "Authentication, authorisation and role-based access control, designed before the first screen is drawn.",
  },
  {
    id: "back",
    name: "Back end",
    count: "4",
    items: "Node.js, Express.js, NestJS and REST API design, with the boring parts (validation, errors) done properly.",
  },
  {
    id: "data",
    name: "Databases and ORM",
    count: "3",
    items: "PostgreSQL, MongoDB and Prisma. Schemas for CRUD systems, dashboards and versioned content.",
  },
  {
    id: "cloud",
    name: "Cloud and tools",
    count: "4",
    items: "AWS, Git and GitHub, third-party and AI API integration, and debugging across every layer above.",
  },
] as const

export const PATH = [
  {
    year: "2021",
    title: "Started a B.Tech in Computer Engineering",
    text: "Four years of data structures, networks, databases and far too many lab files.",
  },
  {
    year: "2024",
    title: "Joined WebOsmotic as an intern",
    text: "Six months of learning how real products get built, reviewed and shipped.",
  },
  {
    year: "2024",
    title: "Stayed on as a full-stack developer",
    text: "Custama, Verifix and CommUnity: front ends, APIs, auth and the dashboards on top.",
  },
  {
    year: "2025",
    title: "Finished the degree",
    text: "B.Tech in Computer Engineering, done while working full time on production code.",
  },
  {
    year: "Now",
    title: "Going deeper on the back end",
    text: "NestJS, Prisma and PostgreSQL, plus TypeScript and Next.js across everything new.",
  },
]

export const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redux Toolkit",
  "RTK Query",
  "MUI",
  "Tailwind CSS",
  "REST APIs",
  "RBAC",
  "AWS",
  "AI APIs",
  "Git",
]

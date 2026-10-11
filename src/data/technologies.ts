import type { Technology, TechnologyCategory } from "@/types"

export const technologies: Technology[] = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    icon: "Layers",
    description: "Production React framework with App Router, SSR, and lightning-fast page loading.",
    proficiency: "Primary Core",
    featured: true,
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "Component",
    description: "Component-driven declarative UI library for building reactive, interactive web interfaces.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "Code2",
    description: "Statically typed JavaScript ensuring type safety, fewer bugs, and clean maintainable code.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Sparkles",
    description: "Utility-first CSS framework delivering rapid, modern, responsive design and animations.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "LayoutGrid",
    description: "Battle-tested responsive grid framework for structured web layouts and rapid styling.",
    proficiency: "Expert",
    featured: false,
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    icon: "Globe",
    description: "Modern semantic markup, responsive media queries, and flexbox/grid layouts.",
    proficiency: "Expert",
    featured: false,
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    icon: "Smartphone",
    description: "Cross-platform mobile application development for iOS and Android with native performance.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Expo",
    category: "Mobile",
    icon: "Smartphone",
    description: "Streamlined React Native ecosystem for rapid mobile iteration, testing, and deployment.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: "Zap",
    description: "Cross-platform framework for building natively compiled, fluid mobile applications.",
    proficiency: "Advanced",
    featured: true,
  },

  // Backend & Cloud
  {
    name: "Node.js",
    category: "Backend & Cloud",
    icon: "Server",
    description: "Asynchronous, event-driven JavaScript runtime powering high-concurrency backend services.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Express.js",
    category: "Backend & Cloud",
    icon: "Workflow",
    description: "Fast, unopinionated, minimalist web framework for building robust RESTful APIs.",
    proficiency: "Expert",
    featured: true,
  },

  // Database & DevOps / Hosting
  {
    name: "Supabase",
    category: "Database & DevOps",
    icon: "Database",
    description: "Scalable backend platform with PostgreSQL, real-time database updates, and authentication.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "MongoDB",
    category: "Database & DevOps",
    icon: "Database",
    description: "Flexible, document-based NoSQL database for modern data-driven applications.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Docker",
    category: "Database & DevOps",
    icon: "Boxes",
    description: "Containerization platform ensuring reliable, consistent application deployments everywhere.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "AWS",
    category: "Database & DevOps",
    icon: "Cloud",
    description: "Scalable cloud hosting, S3 storage, and serverless compute infrastructure.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Hostinger",
    category: "Database & DevOps",
    icon: "Server",
    description: "Fast, cost-effective VPS and cloud hosting configurations for live applications.",
    proficiency: "Expert",
    featured: true,
  },

  // Design & Creative (including Poster Designing)
  {
    name: "Figma",
    category: "Design & UX",
    icon: "Palette",
    description: "Collaborative UI/UX design, interactive prototyping, and design system creation.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Poster Designing",
    category: "Design & UX",
    icon: "Sparkles",
    description: "Creative promotional posters, digital marketing banners, flyers, and branding graphics.",
    proficiency: "Creative",
    featured: true,
  },

  // AI Integration
  {
    name: "AI Integration",
    category: "AI & Automation",
    icon: "Bot",
    description: "Seamless integration of OpenAI, Gemini, and intelligent LLM workflows into apps.",
    proficiency: "Advanced",
    featured: true,
  },
]

export const technologyCategories: TechnologyCategory[] = [
  "Frontend",
  "Mobile",
  "Backend & Cloud",
  "Database & DevOps",
  "Design & UX",
  "AI & Automation",
]

export function getTechnologiesByCategory(category: TechnologyCategory): Technology[] {
  return technologies.filter((tech) => tech.category === category)
}

export function getFeaturedTechnologies(): Technology[] {
  return technologies.filter((tech) => tech.featured)
}

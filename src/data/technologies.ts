import type { Technology, TechnologyCategory } from "@/types"

export const technologies: Technology[] = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    icon: "Layers",
    description: "React framework with Server Components, App Router, and edge runtime capabilities.",
    proficiency: "Primary Core",
    featured: true,
  },
  {
    name: "React 19",
    category: "Frontend",
    icon: "Component",
    description: "Component-driven declarative UI library powering modern reactive user interfaces.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "Code2",
    description: "Statically typed JavaScript for rock-solid type safety, maintainability, and clean codebases.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Sparkles",
    description: "Modern utility-first CSS framework delivering rapid, responsive, and consistent styling.",
    proficiency: "Expert",
    featured: true,
  },
  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    icon: "Smartphone",
    description: "Cross-platform native mobile engineering for iOS and Android with unified codebase.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: "Zap",
    description: "Google's UI toolkit for natively compiled applications across mobile and desktop.",
    proficiency: "Advanced",
    featured: false,
  },
  {
    name: "Expo",
    category: "Mobile",
    icon: "Smartphone",
    description: "Modern framework and tooling ecosystem for React Native applications and OTA deployments.",
    proficiency: "Expert",
    featured: false,
  },
  // Backend & Cloud
  {
    name: "Node.js",
    category: "Backend & Cloud",
    icon: "Server",
    description: "Asynchronous event-driven JavaScript runtime for scalable network applications.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Go (Golang)",
    category: "Backend & Cloud",
    icon: "Cpu",
    description: "High-concurrency compiled language engineered for cloud microservices and high-load APIs.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Python / FastAPI",
    category: "Backend & Cloud",
    icon: "Terminal",
    description: "Modern, high-performance web frameworks for AI pipelines and asynchronous APIs.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "GraphQL & REST",
    category: "Backend & Cloud",
    icon: "Network",
    description: "Flexible, type-safe API schemas and high-throughput RESTful web services.",
    proficiency: "Expert",
    featured: false,
  },
  // Database & DevOps
  {
    name: "PostgreSQL",
    category: "Database & DevOps",
    icon: "Database",
    description: "Advanced open-source relational database with robust ACID compliance and relational indexing.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Supabase",
    category: "Database & DevOps",
    icon: "Database",
    description: "Open-source Firebase alternative with PostgreSQL, real-time subscriptions, and auth.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Redis",
    category: "Database & DevOps",
    icon: "Cpu",
    description: "In-memory data structure store used as a distributed cache, message broker, and queue.",
    proficiency: "Expert",
    featured: false,
  },
  {
    name: "Docker & K8s",
    category: "Database & DevOps",
    icon: "Boxes",
    description: "Containerization and automated cluster orchestration across multi-cloud environments.",
    proficiency: "Advanced",
    featured: true,
  },
  {
    name: "AWS & Vercel",
    category: "Database & DevOps",
    icon: "Cloud",
    description: "Global edge CDN distribution, serverless compute, and resilient infrastructure scaling.",
    proficiency: "Expert",
    featured: true,
  },
  // Design & UX
  {
    name: "Figma",
    category: "Design & UX",
    icon: "Palette",
    description: "Industry-standard collaborative interface design, wireframing, and interactive prototyping.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "Design Systems",
    category: "Design & UX",
    icon: "LayoutGrid",
    description: "Reusable multi-brand design tokens, UI components, and design system governance.",
    proficiency: "Expert",
    featured: false,
  },
  // AI & Automation
  {
    name: "OpenAI & Gemini",
    category: "AI & Automation",
    icon: "Bot",
    description: "State-of-the-art multimodal LLMs, embeddings, and tool-calling integration.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "LangChain & RAG",
    category: "AI & Automation",
    icon: "Workflow",
    description: "Retrieval-augmented generation pipelines and autonomous multi-agent orchestration.",
    proficiency: "Expert",
    featured: true,
  },
  {
    name: "pgvector",
    category: "AI & Automation",
    icon: "Binary",
    description: "High-performance vector similarity search natively integrated within PostgreSQL.",
    proficiency: "Advanced",
    featured: false,
  },
]

export const technologyCategories: TechnologyCategory[] = [
  "Frontend",
  "Backend & Cloud",
  "Mobile",
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

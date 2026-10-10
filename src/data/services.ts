import type { Service, ServiceSlug } from "@/types"

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "High-performance, responsive web applications engineered for lightning speed, SEO dominance, and effortless scale.",
    description:
      "We design and build modern full-stack web applications using cutting-edge frameworks like Next.js, React, and TypeScript. From blazing-fast marketing platforms to complex SaaS architectures, our web engineering guarantees enterprise security, optimal Core Web Vitals, and seamless integrations.",
    icon: "Globe",
    features: [
      "Next.js App Router & SSR Architecture",
      "Jamstack & Headless CMS Integration",
      "High-Performance Core Web Vitals Optimization",
      "Progressive Web App (PWA) Capabilities",
      "Enterprise Grade Accessibility (a11y) & SEO",
      "Automated CI/CD Deployment Pipelines",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
    deliverables: [
      "Production-ready codebase",
      "Lighthouse 95+ performance score",
      "Automated CI/CD workflows",
      "Comprehensive API documentation",
    ],
    benefits: [
      "Sub-second page load times that maximize conversions",
      "Scalable infrastructure that grows seamlessly with your user base",
      "Clean, modular architecture tailored for rapid feature iterations",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps delivering fluid 120Hz UX, offline resilience, and secure device integrations.",
    description:
      "Crafting intuitive mobile experiences across iOS and Android. Whether using React Native, Flutter, or native Swift/Kotlin, we deliver pixel-perfect user interfaces, offline-first data caching, biometric authentication, and frictionless app-store deployment.",
    icon: "Smartphone",
    features: [
      "Cross-Platform iOS & Android Codebase",
      "Native Performance & 120 FPS Fluid Animations",
      "Offline-First Sync & Local Database Architecture",
      "Biometrics & Secure Enclave Hardware Auth",
      "Push Notifications & Deep Linking Support",
      "End-to-End App Store & Google Play Launch Management",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
    deliverables: [
      "App Store & Play Store ready builds",
      "Cross-platform component library",
      "Automated OTA update configuration",
      "Analytics & crash reporting setup",
    ],
    benefits: [
      "50% faster time-to-market with unified cross-platform code",
      "Exceptional user retention with fluid micro-interactions",
      "Rock-solid stability with proactive crash monitoring",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Design Systems",
    shortDescription:
      "Conversion-centric product design, interactive prototyping, and unified design systems engineered for scale.",
    description:
      "Transforming complex workflows into engaging, frictionless human experiences. We bridge the gap between design vision and technical reality by delivering high-fidelity interactive prototypes, user journey mapping, accessibility audits, and comprehensive token-based design systems.",
    icon: "Palette",
    features: [
      "User Research, Personas & Journey Mapping",
      "Wireframing & High-Fidelity Interactive Prototypes",
      "Multi-Brand Design Systems with Token Architecture",
      "WCAG 2.1 AA Accessibility Standards",
      "Micro-Interactions & Motion Design Specifications",
      "Seamless Figma-to-Code Developer Handoff",
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook", "Framer", "Zeroheight"],
    deliverables: [
      "Figma design system with complete components & variants",
      "Interactive clickable prototypes",
      "Developer handoff documentation & export tokens",
      "Accessibility audit report",
    ],
    benefits: [
      "Dramatically reduced engineering handoff friction",
      "Consistent, polished brand identity across all digital touchpoints",
      "Higher conversion funnels validated through usability testing",
    ],
  },
  {
    slug: "backend-api",
    title: "Backend & API Architecture",
    shortDescription:
      "Resilient cloud-native microservices, GraphQL/REST APIs, and scalable distributed databases with zero downtime.",
    description:
      "Powering mission-critical platforms with robust backend architectures. We engineer fault-tolerant microservices, high-throughput streaming pipelines, GraphQL/REST APIs, real-time WebSockets, and secure database clustering built to handle millions of concurrent queries.",
    icon: "Server",
    features: [
      "Scalable RESTful & High-Efficiency GraphQL APIs",
      "Event-Driven Architecture with Kafka & Redis",
      "Microservices & Serverless Cloud Infrastructure",
      "PostgreSQL, MongoDB & Distributed Data Warehouses",
      "Role-Based Access Control (RBAC) & OAuth 2.0 / JWT",
      "Comprehensive Load Balancing & Auto-Scaling",
    ],
    technologies: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    deliverables: [
      "High-throughput API endpoints with OpenAPI specs",
      "Database migration scripts & schema models",
      "Dockerized container configurations",
      "Observability & logging dashboards",
    ],
    benefits: [
      "Sub-50ms server response times under peak traffic loads",
      "Strict data isolation and enterprise-grade security protocols",
      "Zero-downtime rolling deployments and automated disaster recovery",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Enterprise Software",
    shortDescription:
      "Tailor-made ERP, CRM, and automation workflows engineered to optimize operations and displace legacy technical debt.",
    description:
      "When off-the-shelf software falls short, we engineer bespoke enterprise systems tailored precisely to your operational requirements. From complex logistics ERPs to automated financial reconciliations, our solutions automate bottlenecks and unlock operational efficiency.",
    icon: "Cpu",
    features: [
      "Bespoke Enterprise Resource Planning (ERP)",
      "Legacy Software Modernization & Refactoring",
      "Custom Workflow Automation & RPA Systems",
      "Third-Party Cloud & Hardware API Integrations",
      "Real-Time Analytics Dashboards & Auditing",
      "Strict Compliance (SOC2, HIPAA, GDPR Readiness)",
    ],
    technologies: ["TypeScript", "Python", "PostgreSQL", "Next.js", "Kubernetes", "Supabase"],
    deliverables: [
      "Full-stack custom software application",
      "Legacy data migration scripts",
      "Role-based permission security suite",
      "Enterprise administrator training manual",
    ],
    benefits: [
      "Eliminate expensive monthly SaaS licensing overhead",
      "100% custom workflows built around your exact business logic",
      "Total intellectual property ownership with no vendor lock-in",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    shortDescription:
      "LLM integration, autonomous AI agents, semantic search, and custom machine learning pipelines for modern teams.",
    description:
      "Unlock the next generation of productivity with practical AI applications. We integrate large language models, retrieval-augmented generation (RAG) pipelines, custom NLP classifiers, and AI-assisted workflows directly into your web and mobile platforms.",
    icon: "Bot",
    features: [
      "Custom RAG (Retrieval-Augmented Generation) Knowledge Bases",
      "Autonomous Multi-Agent AI Workflow Pipelines",
      "Vector Search with pgvector, Pinecone & Milvus",
      "Enterprise LLM Fine-Tuning & Prompt Engineering",
      "Automated Document Processing & Sentiment Analysis",
      "Guardrails, Safety Filters & Cost Optimization",
    ],
    technologies: ["OpenAI", "Gemini", "LangChain", "pgvector", "Python", "FastAPI"],
    deliverables: [
      "Embedded intelligent chatbot or agent pipeline",
      "Vector database embeddings pipeline",
      "Prompt orchestration and fallback mechanisms",
      "Latency and token spend monitoring dashboard",
    ],
    benefits: [
      "Instant 24/7 intelligent customer inquiry resolution",
      "Automate hours of repetitive manual data synthesis",
      "Data privacy compliance with private cloud model hosting",
    ],
  },
]

export function getServiceBySlug(slug: ServiceSlug | string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

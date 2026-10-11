import type { Service, ServiceSlug } from "@/types"

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "High-performance, responsive web applications engineered for speed, SEO, and seamless user experiences.",
    description:
      "We design and build modern full-stack web applications using Next.js, React.js, TypeScript, Tailwind CSS, Bootstrap, and semantic HTML & CSS. From high-converting websites to dynamic client portals, our web development delivers clean code and responsive layouts across all screens.",
    icon: "Globe",
    features: [
      "Next.js App Router & Server Components",
      "React.js Interactive User Interfaces",
      "Tailwind CSS & Bootstrap Responsive Styling",
      "TypeScript for Type-Safe Codebases",
      "Semantic HTML5 & Modern CSS3 Layouts",
      "Mobile-First Optimization & Fast Load Times",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML & CSS"],
    deliverables: [
      "Production-ready web application",
      "Fast Lighthouse performance scores",
      "Fully responsive mobile & desktop UI",
      "Clean source code & documentation",
    ],
    benefits: [
      "Fast page load times that maximize user engagement",
      "Clean, modular components for easy future upgrades",
      "Mobile-responsive design that looks great on every screen",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    shortDescription:
      "Cross-platform mobile applications for iOS and Android using React Native, Expo, and Flutter.",
    description:
      "Crafting intuitive, high-performance mobile applications across iOS and Android. Using React Native, Expo, and Flutter, we deliver fluid user interfaces, offline-ready features, push notifications, and seamless device integrations with unified codebases.",
    icon: "Smartphone",
    features: [
      "React Native & Expo Development",
      "Flutter Cross-Platform Solutions",
      "Unified iOS & Android Codebases",
      "Fluid 60 FPS Micro-Interactions",
      "Push Notifications & Offline Data Caching",
      "App Store & Google Play Build Preparation",
    ],
    technologies: ["React Native", "Expo", "Flutter", "TypeScript"],
    deliverables: [
      "iOS and Android deployable builds",
      "Cross-platform UI component library",
      "Offline storage and state handling",
      "Complete app source code handover",
    ],
    benefits: [
      "Faster development by targeting iOS and Android together",
      "Smooth, native-feeling user experiences on mobile devices",
      "Easy updates and maintenance with modern tooling",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Poster Design",
    shortDescription:
      "User interface design, Figma prototypes, and creative poster & marketing banner designing.",
    description:
      "Transforming ideas into visually engaging digital interfaces and creative graphics. We design interactive Figma wireframes and prototypes, responsive UI layouts with Tailwind CSS and Bootstrap, and create eye-catching poster designs, digital banners, and promotional artwork for your brand.",
    icon: "Palette",
    features: [
      "Figma UI/UX Wireframing & Prototyping",
      "Creative Poster Designing & Marketing Graphics",
      "Social Media Banners & Promotional Art",
      "Responsive Dark & Light Theme UI Layouts",
      "Tailwind CSS & Bootstrap Styling Systems",
      "Developer-Ready Asset & Spec Handover",
    ],
    technologies: ["Figma", "Poster Designing", "Tailwind CSS", "Bootstrap", "HTML & CSS"],
    deliverables: [
      "Figma UI design files and interactive prototypes",
      "High-resolution digital poster and banner exports",
      "UI component specifications for developers",
      "Design assets in web-ready formats (SVG, PNG)",
    ],
    benefits: [
      "Professional brand presentation across web and marketing channels",
      "Clear, user-friendly layouts that improve user retention",
      "Creative custom posters for announcements and promotions",
    ],
  },
  {
    slug: "backend-api",
    title: "Backend & API Architecture",
    shortDescription:
      "Fast, secure REST APIs and cloud databases powered by Node.js, Express.js, Supabase, and MongoDB.",
    description:
      "Powering your applications with clean backend architectures. We develop robust REST APIs using Node.js and Express.js, structure scalable data models in Supabase and MongoDB, and containerize your workloads with Docker for reliable hosting on AWS and Hostinger.",
    icon: "Server",
    features: [
      "Node.js & Express.js REST API Development",
      "Supabase Database, Auth & Real-Time Setup",
      "MongoDB Document Schemas & Aggregations",
      "Secure JWT Authentication & Authorization",
      "Docker Containerization for Predictable Environments",
      "Production Deployment on AWS & Hostinger",
    ],
    technologies: ["Node.js", "Express.js", "Supabase", "MongoDB", "Docker", "AWS", "Hostinger"],
    deliverables: [
      "Structured REST API endpoints with clear documentation",
      "Database schemas, indexes, and connection logic",
      "Docker configuration files (Dockerfile, docker-compose)",
      "Live deployment on AWS or Hostinger",
    ],
    benefits: [
      "Fast API response times with reliable Node.js execution",
      "Flexible database choice between Supabase and MongoDB",
      "Predictable, easy deployments with Docker containerization",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software & Automation",
    shortDescription:
      "Bespoke business tools, administrative portals, and automated workflows built with modern JavaScript & TypeScript.",
    description:
      "Eliminate manual bottlenecks with custom software engineered specifically for your business operations. We build tailored admin portals, internal tools, and automated workflows using Next.js, React, Node.js, Express, Supabase, and MongoDB.",
    icon: "Cpu",
    features: [
      "Custom Admin Consoles & Dashboards",
      "Operational Workflows & Automated Tasks",
      "Supabase & MongoDB Database Integrations",
      "Node.js & Express API Micro-Services",
      "Role-Based User Access Control",
      "Production Hosting on AWS & Hostinger",
    ],
    technologies: ["TypeScript", "Next.js", "React.js", "Node.js", "Express.js", "Supabase", "MongoDB", "Docker"],
    deliverables: [
      "Full-stack custom web software application",
      "Administrative dashboard and management views",
      "Secure database schemas and API services",
      "Deployment setup on AWS or Hostinger",
    ],
    benefits: [
      "Software crafted 100% around your specific workflow needs",
      "Direct reduction in repetitive manual tasks",
      "Complete ownership of code and infrastructure without licensing fees",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Integration & Smart Features",
    shortDescription:
      "Practical AI integration, intelligent assistants, and prompt workflows using modern LLM APIs.",
    description:
      "Empower your web and mobile applications with practical AI capabilities. We integrate OpenAI, Google Gemini, and AI APIs directly into your software using Node.js, Express, and Next.js—adding intelligent search, automated answers, and smart content tools.",
    icon: "Bot",
    features: [
      "OpenAI & Google Gemini API Integration",
      "In-App Intelligent Chatbots & Assistants",
      "Automated Text & Inquiry Processing",
      "Prompt Engineering & Response Formatting",
      "Node.js & Express AI Backend Endpoints",
      "Safe API Key & Token Usage Management",
    ],
    technologies: ["AI Integration", "Node.js", "TypeScript", "Next.js", "Express.js", "Supabase"],
    deliverables: [
      "Configured AI integration endpoints and frontend UI",
      "Prompt templates and conversational handler logic",
      "Error handling and API quota fallbacks",
      "Documentation on managing and updating AI keys",
    ],
    benefits: [
      "Instant 24/7 intelligent answers for your users",
      "Modern AI features added directly into existing products",
      "Cost-effective API integrations without heavy infrastructure",
    ],
  },
]

export function getServiceBySlug(slug: ServiceSlug | string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

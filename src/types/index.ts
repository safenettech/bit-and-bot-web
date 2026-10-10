export type ServiceSlug =
  | "web-development"
  | "mobile-development"
  | "ui-ux-design"
  | "backend-api"
  | "custom-software"
  | "ai-automation"

export interface Service {
  slug: ServiceSlug
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
  deliverables: string[]
  benefits: string[]
}

export type ProjectCategory =
  | "Travel Booking Platform"
  | "Fintech & Payments"
  | "Healthcare & MedTech"
  | "SaaS & Analytics"
  | "Enterprise Software"
  | "AI & Automation"

export interface ProjectMetric {
  label: string
  value: string
}

export interface ProjectTestimonial {
  quote: string
  author: string
  role: string
  avatar?: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  client?: string
  year?: string
  challenge?: string
  solution?: string
  deliverables?: string[]
  metrics?: ProjectMetric[]
  testimonial?: ProjectTestimonial
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export type TechnologyCategory =
  | "Frontend"
  | "Backend & Cloud"
  | "Mobile"
  | "Design & UX"
  | "Database & DevOps"
  | "AI & Automation"

export interface Technology {
  name: string
  category: TechnologyCategory
  icon: string
  description: string
  proficiency?: string
  featured?: boolean
}

export interface ProcessStep {
  step: number
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  icon: string
}

export interface NavigationItem {
  title: string
  href: string
  description?: string
  badge?: string
  children?: {
    title: string
    href: string
    description?: string
  }[]
}

export interface FooterLinkGroup {
  title: string
  links: {
    title: string
    href: string
    external?: boolean
  }[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
  projectSlug?: string
}

export interface WhyUsItem {
  title: string
  description: string
  icon: string
  highlight?: string
}

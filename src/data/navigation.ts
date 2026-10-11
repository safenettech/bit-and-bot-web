import type { NavigationItem, FooterLinkGroup, SocialLink } from "@/types"

export const headerNavigation: NavigationItem[] = [
  {
    title: "Services",
    href: "/services",
    description: "End-to-end digital engineering and product design capabilities.",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
        description: "High-performance Next.js & React web platforms.",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-development",
        description: "Native iOS & Android apps with 120 FPS performance.",
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "Design systems, user research & interactive prototypes.",
      },
      {
        title: "Backend & API Architecture",
        href: "/services/backend-api",
        description: "Scalable microservices, distributed databases & APIs.",
      },
      {
        title: "Custom Enterprise Software",
        href: "/services/custom-software",
        description: "Bespoke ERP, CRM & operational automation engines.",
      },
    ],
  },
  {
    title: "Work",
    href: "/work",
    description: "Selected case studies and digital transformation stories.",
  },
  {
    title: "Process",
    href: "/process",
    description: "Our agile engineering lifecycle and delivery methodology.",
  },
  {
    title: "About",
    href: "/about",
    description: "Who we are, our engineering principles and culture.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Schedule a discovery call or get an engineering estimate.",
  },
]

export const footerNavigation: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Mobile Development", href: "/services/mobile-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-design" },
      { title: "Backend & APIs", href: "/services/backend-api" },
      { title: "Custom Software", href: "/services/custom-software" },
      { title: "All Capabilities", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Bit and Bot", href: "/about" },
      { title: "Engineering Process", href: "/process" },
      { title: "Case Studies", href: "/work" },
      { title: "Careers", href: "/about#careers" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  // {
  //   title: "Featured Work",
  //   links: [
  //     { title: "Club Travel", href: "/work/club-travel" },
  //     { title: "PayFlow Global", href: "/work/payflow-gateway" },
  //     { title: "Zenith Health", href: "/work/zenith-health" },
  //     { title: "Nexus Insights", href: "/work/nexus-analytics" },
  //     { title: "Aura AI Assistant", href: "/work/aura-ai" },
  //   ],
  // },
  {
    title: "Legal & Standards",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Security & SOC2", href: "/security" },
      { title: "SLA Guarantee", href: "/sla" },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/bitandbot",
    icon: "Github",
  },
  {
    platform: "Twitter / X",
    href: "https://twitter.com/bitandbot",
    icon: "Twitter",
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/company/bitandbot",
    icon: "Linkedin",
  },
]

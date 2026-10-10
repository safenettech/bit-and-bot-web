import type { ProcessStep } from "@/types"

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Strategy",
    subtitle: "Aligning product vision with technical feasibility",
    description:
      "We dive deep into your market opportunities, technical constraints, user workflows, and business KPIs. We deliver an actionable product blueprint and clear architectural roadmap before writing a single line of code.",
    deliverables: [
      "Technical architecture specification",
      "Scope & milestone schedule",
      "User persona & workflow mapping",
      "Risk assessment & mitigation plan",
    ],
    icon: "Compass",
  },
  {
    step: 2,
    title: "Architecture & UX Design",
    subtitle: "Interactive prototypes and resilient system blueprints",
    description:
      "Our designers craft pixel-perfect user journeys and component-driven design systems, while our systems architects design database schemas, API contracts, and cloud infrastructure graphs.",
    deliverables: [
      "Figma interactive clickable prototypes",
      "Design tokens & component library",
      "Database schema & ERD blueprints",
      "API contracts & OpenAPI specifications",
    ],
    icon: "Layers",
  },
  {
    step: 3,
    title: "Agile Sprint Development",
    subtitle: "Two-week test-driven iterations with transparent builds",
    description:
      "We execute in focused, test-driven sprints. You receive live preview URLs at every sprint end, ensuring complete transparency, rapid feedback incorporation, and zero surprises.",
    deliverables: [
      "Live preview deployment environments",
      "Weekly sprint demo & walkthrough",
      "Unit & integration test suites",
      "Peer-reviewed clean TypeScript code",
    ],
    icon: "Code2",
  },
  {
    step: 4,
    title: "QA, Security & Performance Hardening",
    subtitle: "Rigorously tested under peak loads and vulnerability scans",
    description:
      "Before production cutover, we subject the application to automated regression testing, penetration testing, cross-browser validation, and Core Web Vitals optimization.",
    deliverables: [
      "Lighthouse 95+ performance report",
      "Automated E2E test coverage",
      "Security audit & dependency scan",
      "Load & stress testing benchmarks",
    ],
    icon: "ShieldCheck",
  },
  {
    step: 5,
    title: "Zero-Downtime Launch & Continuous Evolution",
    subtitle: "Cloud infrastructure cutover and ongoing SLA support",
    description:
      "We orchestrate a seamless deployment with automated rollback guards, configure 24/7 telemetry monitoring and error alerting, and partner with you for continuous product scaling.",
    deliverables: [
      "Zero-downtime production cutover",
      "Cloud monitoring & APM alerting",
      "Comprehensive handover documentation",
      "Post-launch SLA & feature iterations",
    ],
    icon: "Rocket",
  },
]

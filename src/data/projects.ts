import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "club-travel",
    title: "Club Travel",
    category: "Travel Booking Platform",
    summary:
      "A next-generation bespoke travel booking engine and itinerary management portal for luxury clubs and frequent flyers.",
    description:
      "Club Travel revolutionizes luxury leisure planning with a unified booking experience. Integrating live global flight and hotel GDS feeds, dynamic group split-billing, and real-time flight delay alerts, the platform delivers an uncompromising digital concierge for premium travel clubs.",
    image: "/projects/club-travel.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"],
    features: [
      "Real-time GDS Flight & Hotel Inventory Sync",
      "Interactive Collaborative Group Itinerary Planner",
      "Automated Split-Payments & Multi-Currency Checkout",
      "Instant Flight Status Updates & SMS Re-routing Alerts",
      "VIP Concierge Live Chat & Custom Add-on Booking",
      "Offline-Ready Digital Boarding Passes & Itinerary Vault",
    ],
    client: "Club Travel International Ltd.",
    year: "2025",
    challenge:
      "Legacy booking engines suffered from 8+ second search latency, brittle multi-vendor inventory lockouts, and fragmented payment reconciliations that caused an unacceptable 34% checkout drop-off rate.",
    solution:
      "We engineered a distributed caching tier with Redis and Next.js App Router, alongside optimistic UI updates and an automated payment orchestrator that cuts search latency down to under 600ms while guaranteeing zero double-bookings.",
    deliverables: [
      "Full-stack responsive booking application",
      "Global flight/hotel aggregator microservice",
      "Admin revenue analytics & reservation dashboard",
      "Native mobile companion PWA",
    ],
    metrics: [
      { label: "Search Latency Reduction", value: "82%" },
      { label: "Checkout Conversion Lift", value: "+46%" },
      { label: "Monthly Active Travelers", value: "180K+" },
      { label: "Gross Bookings Processed", value: "$42M+" },
    ],
    testimonial: {
      quote:
        "Bit and Bot transformed our technology stack completely. Our members now book complex multi-destination itineraries in seconds, and our operational overhead dropped by nearly half.",
      author: "Marcus Vance",
      role: "VP of Digital Operations, Club Travel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    liveUrl: "https://example.com/club-travel",
    featured: true,
  },
  {
    slug: "payflow-gateway",
    title: "PayFlow Global",
    category: "Fintech & Payments",
    summary:
      "High-throughput cross-border payments orchestrator processing multi-currency settlements with sub-second finality.",
    description:
      "PayFlow Global simplifies cross-border enterprise settlements. Built with Go microservices and event-driven architecture, it connects regional payment rails, validates AML compliance automatically, and provides real-time treasury management for multinational businesses.",
    image: "/projects/payflow.jpg",
    technologies: ["Go", "TypeScript", "React", "PostgreSQL", "Kafka", "Docker", "AWS"],
    features: [
      "Instant Multi-Currency FX Settlement Engine",
      "Automated Anti-Money Laundering (AML) Screening",
      "Webhook Pipeline with Guaranteed At-Least-Once Delivery",
      "Virtual Multi-Currency Account Generation",
      "PCI-DSS Level 1 Compliant Card Vault",
      "Real-Time Treasury Liquidity Dashboard",
    ],
    client: "PayFlow Financial Inc.",
    year: "2025",
    challenge:
      "The client required an ultra-low latency transaction processing engine capable of sustaining 15,000 transactions per second during flash sales with zero data loss and strict regulatory compliance.",
    solution:
      "We designed an event-sourced distributed ledger using Apache Kafka and Go, paired with idempotent transaction workers and partitioned PostgreSQL databases that achieve 99.999% uptime.",
    deliverables: [
      "Core payment gateway engine & SDKs",
      "Merchant onboarding & verification portal",
      "High-speed developer API with interactive docs",
      "Automated compliance audit logger",
    ],
    metrics: [
      { label: "Peak TPS Supported", value: "22,000" },
      { label: "Average Settlement Time", value: "340ms" },
      { label: "Payment Success Rate", value: "99.98%" },
      { label: "Total Volume Handled", value: "$1.4B+" },
    ],
    testimonial: {
      quote:
        "The architecture delivered by the Bit and Bot team gave us enterprise-grade resilience right out of the box. Our platform handled Black Friday volume without a single glitch.",
      author: "Elena Rostova",
      role: "CTO, PayFlow Global",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    },
    liveUrl: "https://example.com/payflow",
    featured: true,
  },
  {
    slug: "zenith-health",
    title: "Zenith Health",
    category: "Healthcare & MedTech",
    summary:
      "HIPAA-compliant telemedicine platform with WebRTC video consultations, electronic health records (EHR), and smart prescriptions.",
    description:
      "Zenith Health connects over 80,000 patients with board-certified physicians. Featuring encrypted video consultations, automated prescription dispatch to local pharmacies, and seamless integration with existing hospital EHR systems.",
    image: "/projects/zenith-health.jpg",
    technologies: ["Next.js", "React Native", "WebRTC", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    features: [
      "End-to-End Encrypted WebRTC Video Consultations",
      "FHIR/HL7 Compliant EHR Integration",
      "Digital Prescription Dispatch & Pharmacy Route Sync",
      "Intelligent Patient Triage Chatbot",
      "Automated Insurance Eligibility Verification",
      "Secure In-App Medical History Document Vault",
    ],
    client: "Zenith Telehealth Network",
    year: "2024",
    challenge:
      "Patients faced long wait times and unstable video connections in rural zones, while doctors wasted up to 25 minutes per appointment manually cross-referencing outdated medical paperwork.",
    solution:
      "We built adaptive bitrate WebRTC streaming with automated FHIR data syncing and AI triage note generation, freeing up doctors to focus purely on patient diagnosis.",
    deliverables: [
      "Patient web portal & cross-platform mobile apps",
      "Doctor clinical workstation application",
      "Pharmacy partner fulfillment portal",
      "HIPAA compliance security verification pack",
    ],
    metrics: [
      { label: "Patient Wait Time Drop", value: "-65%" },
      { label: "Clinical Note Time Saved", value: "18 min/visit" },
      { label: "Active Doctors on Platform", value: "1,200+" },
      { label: "Patient Satisfaction Score", value: "4.9 / 5" },
    ],
    testimonial: {
      quote:
        "Zenith Health has set a new standard for patient care. The platform is blindingly fast, intuitive for both seniors and specialists, and rigorously secure.",
      author: "Dr. Alistair Finch",
      role: "Chief Medical Officer, Zenith Health",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    liveUrl: "https://example.com/zenith-health",
    featured: true,
  },
  {
    slug: "nexus-analytics",
    title: "Nexus Insights",
    category: "SaaS & Analytics",
    summary:
      "Real-time event streaming and product analytics suite processing billions of customer interactions with interactive data visualizers.",
    description:
      "Nexus Insights empowers product teams to track user behavior, cohort funnels, and retention curves in real time. Built with high-speed columnar data storage and lightweight web SDKs for sub-millisecond event capture.",
    image: "/projects/nexus-analytics.jpg",
    technologies: ["Next.js", "TypeScript", "ClickHouse", "Rust", "Tailwind CSS", "Chart.js"],
    features: [
      "Sub-Second Ad-Hoc Funnel & Cohort Queries",
      "Lightweight 3KB Tracking SDK with Offline Batching",
      "Real-Time Session Replay & Heatmap Generation",
      "Automated Anomaly Detection & Slack Alerts",
      "Role-Based Multi-Tenant Workspace Permissions",
      "Custom SQL / Visual Query Builder",
    ],
    client: "Nexus SaaS Corp",
    year: "2024",
    challenge:
      "Traditional analytics warehouses were running out of memory on billion-row queries, causing dashboard timeouts and astronomical cloud query bills for the client.",
    solution:
      "We migrated the ingestion pipeline to ClickHouse with a Rust event collector, coupled with Next.js streaming charts that render billion-row aggregations in under 200ms.",
    deliverables: [
      "Interactive data analytics web application",
      "Rust tracking collector service",
      "Client JavaScript / React tracking libraries",
      "Embedded shareable reports generator",
    ],
    metrics: [
      { label: "Query Execution Speedup", value: "14x" },
      { label: "Cloud Storage Cost Reduction", value: "70%" },
      { label: "Events Tracked Per Day", value: "4.2 Billion" },
      { label: "Customer NPS Increase", value: "+38 pts" },
    ],
    testimonial: {
      quote:
        "The performance leap was staggering. Our analytics dashboards feel instant now, even when querying multi-month retention cohorts across tens of millions of users.",
      author: "Samantha Lee",
      role: "Head of Product, Nexus SaaS",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    liveUrl: "https://example.com/nexus-analytics",
    featured: false,
  },
  {
    slug: "logix-erp",
    title: "Logix Enterprise ERP",
    category: "Enterprise Software",
    summary:
      "Cloud-native supply chain orchestration and inventory logistics suite connecting 14 automated distribution centers.",
    description:
      "Logix ERP replaced fragmented legacy software with a centralized real-time inventory management platform. Features RFID scanner integration, automated purchase order triggers, and dynamic truck route optimization.",
    image: "/projects/logix-erp.jpg",
    technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Real-Time RFID Warehouse Bin Tracking",
      "Automated Reorder Algorithm & Supplier PO Dispatch",
      "Fleet Dispatch & Dynamic Route Optimization",
      "Multi-Currency International Customs Documentation",
      "Role-Based Floor Worker Tablet Interfaces",
      "Predictive Stockout Forecasting with ML",
    ],
    client: "Logix Global Freight Corp",
    year: "2024",
    challenge:
      "Warehouse workers suffered from frequent inventory discrepancies, manual spreadsheet data entry, and delayed shipments that cost the company millions annually in carrier penalties.",
    solution:
      "We engineered an offline-first floor tablet application that syncs in real-time with an event-driven inventory core, providing instantaneous picking confirmation and routing.",
    deliverables: [
      "Cloud ERP master operations portal",
      "Warehouse worker tablet web app",
      "Carrier API EDI connector",
      "Automated bill-of-lading generator",
    ],
    metrics: [
      { label: "Order Picking Speed", value: "+54%" },
      { label: "Inventory Accuracy Rate", value: "99.94%" },
      { label: "Annual Shipping Penalty Savings", value: "$3.8M" },
      { label: "Warehouses Connected", value: "14 Facilities" },
    ],
    testimonial: {
      quote:
        "Bit and Bot understood the realities of warehouse logistics. Their software is built like an armored vehicle—reliable, fast, and completely foolproof.",
      author: "David Chen",
      role: "Chief Supply Chain Officer, Logix Freight",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    liveUrl: "https://example.com/logix-erp",
    featured: false,
  },
  {
    slug: "aura-ai",
    title: "Aura AI Assistant",
    category: "AI & Automation",
    summary:
      "Enterprise customer intelligence and autonomous support agent resolving 70% of tickets with strict brand safety guardrails.",
    description:
      "Aura AI connects company knowledge repositories directly into customer communication channels. Using hybrid vector search and structured tool-calling, Aura resolves complex customer queries and issues refunds autonomously.",
    image: "/projects/aura-ai.jpg",
    technologies: ["Next.js", "Python", "FastAPI", "pgvector", "LangChain", "OpenAI"],
    features: [
      "Autonomous Tool-Calling for Refunds & Re-bookings",
      "Hybrid Semantic & Keyword Knowledge Base Search",
      "Real-Time Sentiment Analysis & Human Escalation",
      "Multi-Channel Support (Web, WhatsApp, Email, Zendesk)",
      "Strict PII Redaction & Hallucination Guardrails",
      "Comprehensive AI Cost & Quality Analytics",
    ],
    client: "Aura Consumer Brands",
    year: "2025",
    challenge:
      "Customer support teams were overwhelmed with 40,000 weekly tickets, causing 48-hour response delays and skyrocketing headcount expenses without improving CSAT scores.",
    solution:
      "We deployed a deterministic multi-agent RAG workflow with semantic caching and safe API tool execution that resolves routine tickets in under 5 seconds while escalating complex nuances gracefully.",
    deliverables: [
      "Embedded AI chat widget and customer dashboard",
      "Vector search indexing pipeline with pgvector",
      "Agent orchestration microservice",
      "Human-in-the-loop escalation portal",
    ],
    metrics: [
      { label: "Ticket Auto-Resolution Rate", value: "72%" },
      { label: "Average Response Time", value: "< 4s" },
      { label: "Support Cost Reduction", value: "58%" },
      { label: "Post-Chat CSAT Score", value: "4.8 / 5" },
    ],
    testimonial: {
      quote:
        "The intelligence and reliability of Aura AI is unbelievable. Our customers receive instant answers and our support team can finally focus on deep relationship building.",
      author: "Rachel Green",
      role: "VP of Customer Experience, Aura Brands",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    },
    liveUrl: "https://example.com/aura-ai",
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

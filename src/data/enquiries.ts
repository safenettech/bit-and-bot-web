export interface Enquiry {
  id: string
  fullName: string
  email: string
  company: string
  phone?: string
  serviceType: string
  budget: string
  subject: string
  message: string
  date: string
  timestamp: string
  isRead: boolean
  isStarred: boolean
  status: "new" | "in_review" | "replied" | "archived"
}

export const initialEnquiries: Enquiry[] = [
  {
    id: "enq-001",
    fullName: "Sarah Jenkins",
    email: "s.jenkins@vanguard-logistics.io",
    company: "Vanguard Global Freight",
    phone: "+1 (415) 890-2341",
    serviceType: "Custom Enterprise Software",
    budget: "$50,000 - $100,000",
    subject: "Automated Dispatch & Real-Time Tracking Portal Rebuild",
    message:
      "Hello Bit & Bot team,\n\nWe are looking to modernize our logistics operations. Currently, our dispatchers manage 250+ freight runs across 4 hubs using disparate legacy spreadsheets. We need a unified real-time dashboard built on Next.js and PostgreSQL with live WebSocket tracking, driver mobile access, and automated bill-of-lading generation.\n\nOur target launch deadline is Q3. Could we schedule a discovery call this Thursday to review our technical requirements and get an initial sprint architecture estimate?\n\nBest regards,\nSarah Jenkins\nDirector of Operations",
    date: "10:42 AM",
    timestamp: "2026-10-10T10:42:00Z",
    isRead: false,
    isStarred: true,
    status: "new",
  },
  {
    id: "enq-002",
    fullName: "Marcus Aurelius Vance",
    email: "marcus@clubtravel.com",
    company: "Club Travel International",
    phone: "+44 20 7946 0912",
    serviceType: "Web Development",
    budget: "$25,000 - $50,000",
    subject: "Phase 2 Itinerary Sync & Multi-Currency Settlement Engine",
    message:
      "Hi team,\n\nFollowing up on our successful Phase 1 launch of Club Travel! Our executive board has approved the Phase 2 expansion for multi-currency split checkout and real-time flight alert webhooks. We would love to book our development sprint slot with the same senior squad that delivered Phase 1.\n\nLet me know your availability for a roadmap review next Monday.\n\nCheers,\nMarcus",
    date: "Yesterday",
    timestamp: "2026-10-09T16:15:00Z",
    isRead: false,
    isStarred: true,
    status: "new",
  },
  {
    id: "enq-003",
    fullName: "Dr. Evelyn Reed",
    email: "ereed@apexmedtech.org",
    company: "Apex Health Diagnostics",
    phone: "+1 (617) 555-0199",
    serviceType: "Mobile App Development",
    budget: "$75,000 - $150,000",
    subject: "HIPAA Compliant Cross-Platform Telehealth Application",
    message:
      "Dear Engineering Leads,\n\nWe are seeking an experienced engineering studio to architect a patient-facing iOS and Android application with end-to-end encrypted WebRTC consultations, biometric authentication, and FHIR data sync.\n\nSecurity is paramount as we are pursuing SOC2 Type II and HIPAA compliance. We were impressed by your Zenith Health case study. We would like to initiate an NDA and share our technical specifications document.\n\nSincerely,\nDr. Evelyn Reed\nChief Innovation Officer",
    date: "Oct 8",
    timestamp: "2026-10-08T14:30:00Z",
    isRead: true,
    isStarred: false,
    status: "in_review",
  },
  {
    id: "enq-004",
    fullName: "Liam Thorne",
    email: "liam@finscale.capital",
    company: "FinScale Trading Systems",
    phone: "+1 (212) 555-8832",
    serviceType: "Backend & API Architecture",
    budget: "$100,000+",
    subject: "Node.js & Express Real-Time API Architecture",
    message:
      "Bit & Bot team,\n\nWe need to build a high-performance REST and real-time API backend using Node.js, Express.js, and Supabase for our platform.\n\nDo you have capacity to take on this build starting next month? Let us know if you can jump on a quick call.\n\nLiam Thorne\nPartner & Head of Technology",
    date: "Oct 7",
    timestamp: "2026-10-07T11:20:00Z",
    isRead: true,
    isStarred: false,
    status: "in_review",
  },
  {
    id: "enq-005",
    fullName: "Chloe Zhang",
    email: "chloe@zeno-ai.dev",
    company: "Zeno AI Solutions",
    phone: "+1 (408) 555-3412",
    serviceType: "AI & Automation",
    budget: "$30,000 - $60,000",
    subject: "Enterprise RAG Pipeline & Multi-Agent Customer Support Hub",
    message:
      "Hi there,\n\nWe are looking to embed an autonomous agent workflow into our customer support SaaS platform. We require hybrid semantic retrieval using pgvector, structured function calling, and strict hallucination guardrails.\n\nLooking forward to hearing from your technical team.\n\nBest,\nChloe Zhang",
    date: "Oct 6",
    timestamp: "2026-10-06T09:12:00Z",
    isRead: true,
    isStarred: true,
    status: "replied",
  },
  {
    id: "enq-006",
    fullName: "Patrick O'Connor",
    email: "patrick@urbanroots.ie",
    company: "Urban Roots Sustainable Architecture",
    phone: "+353 1 496 0123",
    serviceType: "UI/UX Design",
    budget: "$15,000 - $30,000",
    subject: "Design System & Interactive 3D Architectural Showcase",
    message:
      "Hello!\n\nWe need a world-class redesign of our international portfolio with interactive token-based design systems and WebGL project viewports.\n\nCould you send over your design sprint availability and rate sheet?\n\nKind regards,\nPatrick O'Connor",
    date: "Oct 4",
    timestamp: "2026-10-04T15:45:00Z",
    isRead: true,
    isStarred: false,
    status: "archived",
  },
]

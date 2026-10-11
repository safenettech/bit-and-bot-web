import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import { SectionHeading } from "@/components/ui/section-heading"

const startupCommitments = [
  {
    icon: "Users",
    title: "Direct Engineer Access",
    subtitle: "No middle managers",
    description: "You collaborate directly with the senior developers architecting and writing your code.",
  },
  {
    icon: "CreditCard",
    title: "Flexible 10% Advance",
    subtitle: "Transparent pricing",
    description: "Begin with a baseline 10% advance deposit tailored to your customized project quotation.",
  },
  {
    icon: "PhoneCall",
    title: "Always Connected",
    subtitle: "Direct callback guarantee",
    description: "Call us anytime. If we're deep in a coding sprint, we log your call and call you back promptly.",
  },
  {
    icon: "Lock",
    title: "100% Code Ownership",
    subtitle: "Full IP handover",
    description: "All source code, git repositories, and design assets are 100% yours upon completion.",
  },
]

const coreOfferings = [
  {
    icon: "Monitor",
    badge: "Web Engineering",
    title: "Modern Web Apps & SaaS Platforms",
    description:
      "High-speed, production-grade web applications built with Next.js, React, and TypeScript. Optimized for SEO, 95+ Lighthouse scores, and seamless mobile responsiveness.",
    features: ["Server-Side Rendering (SSR)", "Custom Dashboards & Portals", "Responsive Dark/Light UI"],
    href: "/services/web-development",
  },
  {
    icon: "Smartphone",
    badge: "Mobile Apps",
    title: "Cross-Platform iOS & Android Apps",
    description:
      "Intuitive, fast mobile applications designed for fluid performance. From clean user interfaces to secure offline data storage and instant push notifications.",
    features: ["Native iOS & Android Builds", "Smooth 60/120 FPS Motion", "App Store Deployment"],
    href: "/services/mobile-development",
  },
  {
    icon: "Cpu",
    badge: "Backend & Cloud",
    title: "Scalable APIs & Database Architecture",
    description:
      "Resilient cloud backends, PostgreSQL/Supabase database schemas, and robust REST APIs that secure your data and handle growing traffic without breaking.",
    features: ["PostgreSQL & Supabase", "Secure Auth & JWT Guards", "Automated Webhooks & APIs"],
    href: "/services/backend-api",
  },
  {
    icon: "Layers",
    badge: "UI/UX & Design",
    title: "Product Design & Design Systems",
    description:
      "Interactive prototypes, token-based design systems, and engaging user flows crafted in Figma to turn complex ideas into intuitive digital experiences.",
    features: ["User Journey Wireframes", "Figma Design Systems", "Interactive Prototypes"],
    href: "/services/ui-ux-design",
  },
  {
    icon: "Sparkles",
    badge: "Custom Software",
    title: "Bespoke Business Automation & Tools",
    description:
      "Eliminate repetitive manual tasks with custom software engineered specifically for your business operations, internal workflows, and client portals.",
    features: ["Automated Invoicing & Mails", "Operational Workflows", "Custom Admin Consoles"],
    href: "/services/custom-software",
  },
  {
    icon: "Rocket",
    badge: "Startup Launchpad",
    title: "Rapid MVP in 2 to 4 Weeks",
    description:
      "Have a fresh startup vision? We help founders scope, design, and launch a polished Minimum Viable Product quickly so you can test the market and onboard real users.",
    features: ["Rapid Sprint Delivery", "Lean MVP Scope", "Production Launch Support"],
    href: "/contact",
  },
]

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Scope Discussion",
    description: "We talk through your idea, technical specifications, and goals to provide a transparent custom quotation.",
  },
  {
    step: "02",
    title: "10% Advance & Sprint Kickoff",
    description: "Lock in your dedicated development slot with a flexible baseline 10% advance deposit. We begin coding immediately.",
  },
  {
    step: "03",
    title: "Live Updates & Clean Handover",
    description: "Receive regular progress demos and reviews throughout development, followed by full source code and asset transfer.",
  },
]

export function StartupCapabilitiesSection() {
  return (
    <section className="py-16 sm:py-24 space-y-20 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Startup Trust & Value Pillars */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-center text-muted-foreground">
            Built for Founders, Startups &amp; Growing Businesses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {startupCommitments.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-2 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <DynamicIcon name={item.icon} size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground font-heading">
                      {item.title}
                    </h3>
                    <span className="text-[0.65rem] text-primary font-medium">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading for Core Offerings */}
        <div className="space-y-6">
          <SectionHeading
            badge="What We Build"
            title="End-to-End Digital Engineering for Modern Products"
            description="We are a senior freelance collective dedicated to building fast, clean, and reliable digital experiences without agency overhead."
          />

          {/* Core Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {coreOfferings.map((offering) => (
              <Card
                key={offering.title}
                className="border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <CardHeader className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <DynamicIcon name={offering.icon} size={20} />
                    </div>
                    <Badge variant="outline" className="text-[0.65rem] font-mono">
                      {offering.badge}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                    {offering.title}
                  </CardTitle>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                  <div className="space-y-1.5 pt-2 border-t border-border/40">
                    {offering.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-foreground/80">
                        <DynamicIcon name="CheckCircle2" size={13} className="text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={offering.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Learn more</span>
                      <DynamicIcon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transparent 3-Step Working Model */}
        <div className="p-6 sm:p-10 rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 via-card/40 to-muted/20 backdrop-blur-md space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="glow" size="sm">
              Simple 3-Step Process
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              How We Kick Off &amp; Deliver Your Project
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              No complicated corporate red tape. Clear scoping, fair advance milestones, and continuous progress updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl border border-border/50 bg-background/50 space-y-2 relative overflow-hidden"
              >
                <span className="font-heading text-3xl font-black text-primary/20 absolute top-3 right-4 select-none">
                  {step.step}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground pt-1">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="default" className="font-semibold shadow-md">
              <Link href="/contact">
                Schedule a Discovery Call
                <DynamicIcon name="ArrowRight" size={15} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="default" className="text-xs">
              <Link href="/terms">
                Read Our Terms &amp; Working Agreement
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

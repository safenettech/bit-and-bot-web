import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import { SectionHeading } from "@/components/ui/section-heading"

const startupCommitments = [
  {
    icon: "Terminal",
    title: "Direct Engineer Access",
    subtitle: "No middle managers",
    description: "Collaborate directly with the senior engineers writing your code for faster decisions.",
  },
  {
    icon: "Zap",
    title: "Rapid Sprint Delivery",
    subtitle: "Agile milestones",
    description: "Fast turnaround with working preview deployments and continuous progress demos.",
  },
  {
    icon: "Phone",
    title: "Always Connected",
    subtitle: "Direct callback guarantee",
    description: "Call us anytime. If we are deep in code, we log your call and call you back promptly.",
  },
  {
    icon: "ShieldCheck",
    title: "100% Code Ownership",
    subtitle: "Full IP handover",
    description: "All source code, git repositories, and design assets are completely yours.",
  },
]

const coreOfferings = [
  {
    icon: "Globe",
    badge: "Web Engineering",
    title: "Modern Web Apps & Platforms",
    description:
      "High-speed, production-grade web applications built with Next.js, React.js, TypeScript, Tailwind CSS, and Bootstrap. Optimized for SEO and seamless responsiveness.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    features: ["Next.js & React.js", "Tailwind CSS & Bootstrap UI", "TypeScript & HTML/CSS"],
    href: "/services/web-development",
  },
  {
    icon: "Smartphone",
    badge: "Mobile Apps",
    title: "iOS & Android Mobile Applications",
    description:
      "Fluid, responsive mobile applications built with React Native, Expo, and Flutter. Featuring offline storage, local caching, push alerts, and clean user interfaces.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    features: ["React Native & Expo", "Flutter Cross-Platform Builds", "Smooth 60 FPS Mobile UX"],
    href: "/services/mobile-development",
  },
  {
    icon: "Server",
    badge: "Backend & Hosting",
    title: "APIs, Databases & Cloud Hosting",
    description:
      "Clean REST APIs with Node.js and Express.js, configured with Supabase and MongoDB databases, and deployed with Docker on AWS and Hostinger.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    features: ["Node.js & Express.js REST APIs", "Supabase & MongoDB Databases", "AWS, Hostinger & Docker"],
    href: "/services/backend-api",
  },
  {
    icon: "Palette",
    badge: "UI/UX & Creative",
    title: "Product Design & Poster Designing",
    description:
      "Interactive Figma prototypes, design systems, and creative digital poster designing, social media banners, and marketing graphics for your brand.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
    features: ["Figma UI/UX Wireframes", "Poster & Marketing Banner Design", "Design Systems & Asset Exports"],
    href: "/services/ui-ux-design",
  },
  {
    icon: "Workflow",
    badge: "Custom Software",
    title: "Bespoke Business Automation & Tools",
    description:
      "Eliminate repetitive manual tasks with custom software engineered specifically for your operations using React, Next.js, Node.js, Supabase, and MongoDB.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    features: ["Admin Consoles & Portals", "Automated Workflows & Tasks", "Full Source Code Handover"],
    href: "/services/custom-software",
  },
  {
    icon: "Rocket",
    badge: "AI & Startup MVP",
    title: "Rapid MVP & AI Integration",
    description:
      "Launch a clean Minimum Viable Product in 2 to 4 weeks with intelligent AI integration (OpenAI & Gemini APIs) and production hosting on AWS or Hostinger.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    features: ["OpenAI & Gemini AI Integration", "Rapid Sprint Execution", "AWS & Hostinger Deployment"],
    href: "/contact",
  },
]

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We clarify your product goals, user flows, and technical scope to draft a straightforward roadmap.",
  },
  {
    step: "02",
    title: "Agile Development Sprints",
    description: "Rapid development cycles with live preview deployments, continuous updates, and zero red tape.",
  },
  {
    step: "03",
    title: "Launch & Full Handover",
    description: "Complete testing, cloud deployment, and 100% transfer of source code, git repos, and assets.",
  },
]

export function StartupCapabilitiesSection() {
  return (
    <section className="py-8 sm:py-12 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Startup Trust & Value Pillars */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest font-semibold text-center text-muted-foreground">
            Built for Founders, Startups &amp; Growing Businesses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {startupCommitments.map((item) => (
              <div
                key={item.title}
                className="p-3.5 sm:p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1.5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <DynamicIcon name={item.icon} size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground font-heading">
                      {item.title}
                    </h3>
                    <span className="text-[0.65rem] text-primary font-medium block">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-[0.75rem] text-muted-foreground leading-relaxed pt-0.5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading for Core Offerings */}
        <div className="space-y-5">
          <SectionHeading
            badge="What We Build"
            title="End-to-End Digital Engineering for Modern Products"
            description="We are a senior freelance collective dedicated to building fast, clean, and reliable digital experiences without agency overhead."
          />

          {/* Core Offerings Grid with Sleek Imagery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-1">
            {coreOfferings.map((offering) => (
              <div
                key={offering.title}
                className="group rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-muted/40">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                      <div className="size-8 rounded-lg bg-background/80 backdrop-blur-md text-primary flex items-center justify-center shadow-sm">
                        <DynamicIcon name={offering.icon} size={16} />
                      </div>
                      <Badge variant="secondary" className="bg-background/85 backdrop-blur-md text-[0.65rem] font-mono shadow-sm">
                        {offering.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 pt-3 space-y-2.5">
                    <h3 className="text-base font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {offering.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-border/40">
                      {offering.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-foreground/80">
                          <DynamicIcon name="CheckCircle2" size={13} className="text-primary shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={offering.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Learn more</span>
                    <DynamicIcon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step Working Model (Tight padding, no 10% advance mention) */}
        <div className="p-4 sm:p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 via-card/40 to-muted/20 backdrop-blur-md space-y-5">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <Badge variant="glow" size="sm">
              Simple 3-Step Process
            </Badge>
            <h2 className="font-heading text-lg sm:text-2xl font-bold text-foreground">
              How We Kick Off &amp; Deliver Your Project
            </h2>
            <p className="text-xs text-muted-foreground">
              Clear scoping, agile development sprints, and continuous progress updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-3.5 sm:p-4 rounded-xl border border-border/50 bg-background/50 space-y-1.5 relative overflow-hidden"
              >
                <span className="font-heading text-2xl font-black text-primary/20 absolute top-2 right-3 select-none">
                  {step.step}
                </span>
                <h3 className="font-heading text-sm font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-[0.75rem] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <Button asChild size="sm" className="font-semibold shadow-sm">
              <Link href="/contact">
                Schedule a Discovery Call
                <DynamicIcon name="ArrowRight" size={14} className="ml-1.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="text-xs">
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

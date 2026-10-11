import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"
import { SectionHeading } from "@/components/ui/section-heading"

export const metadata: Metadata = {
  title: "About Bit & Bot | Emerging Tech Startup & Freelance Collective",
  description:
    "Learn about Bit & Bot — an early-stage startup and freelance developer studio delivering modern web, mobile, and cloud software with direct collaboration and founder-level dedication.",
}

const startupAdvantages = [
  {
    icon: "Zap",
    title: "100% Focused Attention",
    description:
      "You are not competing with dozens of corporate accounts. Your project receives our undivided focus, energy, and craftsmanship.",
  },
  {
    icon: "Terminal",
    title: "Direct Developer Contact",
    description:
      "No non-technical middle managers or communication lag. You speak directly with the engineers architecting and writing your code.",
  },
  {
    icon: "Phone",
    title: "Always Accessible & Responsive",
    description:
      "Call or message us anytime. If we are deep in a coding sprint, don't worry—we log every missed call and promptly call you back.",
  },
  {
    icon: "ShieldCheck",
    title: "Full Code & IP Ownership",
    description:
      "Every line of source code, design asset, and cloud configuration is 100% yours from milestone completion. Zero vendor lock-in.",
  },
]

const corePrinciples = [
  {
    icon: "Layers",
    title: "Pragmatic Architecture",
    description:
      "We build with modern, production-proven technologies (Next.js, React.js, Node.js, Express.js, Supabase, MongoDB, Tailwind CSS) for speed, reliability, and effortless scaling.",
  },
  {
    icon: "Rocket",
    title: "Rapid MVP & Sprint Cadence",
    description:
      "We deliver in focused, transparent milestones with live preview deployments so you can see and interact with your product as it evolves.",
  },
  {
    icon: "Eye",
    title: "Transparent Collaboration",
    description:
      "We discuss project requirements thoroughly before starting, provide realistic estimates, and keep you updated every step of the journey.",
  },
  {
    icon: "Sparkles",
    title: "Passionate Craftsmanship",
    description:
      "As an early-stage startup, our reputation is built on the success of every single release. We care deeply about every pixel and API response.",
  },
]

const techStack = [
  { category: "Web Engineering", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML & CSS"] },
  { category: "Mobile Apps", items: ["React Native", "Expo", "Flutter", "iOS & Android"] },
  { category: "Backend & Data", items: ["Node.js", "Express.js", "Supabase", "MongoDB", "REST APIs"] },
  { category: "Cloud & Hosting", items: ["AWS", "Hostinger", "Docker"] },
  { category: "UI/UX & Creative", items: ["Figma Wireframes", "Poster Designing", "Marketing Banners", "Responsive UI"] },
  { category: "AI Integration", items: ["OpenAI & Gemini APIs", "AI In-App Assistants", "Smart Prompt Workflows"] },
]

const collaborativeProcess = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description:
      "We discuss your concept in detail, analyze user workflows, and outline a straightforward milestone plan tailored to your budget.",
  },
  {
    step: "02",
    title: "Agile Coding & Live Demos",
    description:
      "Development begins with rapid sprint cycles. You receive regular preview links and progress reviews to provide feedback early.",
  },
  {
    step: "03",
    title: "Testing, Launch & Handover",
    description:
      "Thorough cross-device testing, cloud deployment, and full handover of all git repositories, documentation, and credentials.",
  },
]

export default function AboutPage() {
  return (
    <main className="py-8 sm:py-12 space-y-10 sm:space-y-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header */}
        <SectionHeading
          badge="Our Story &amp; Vision"
          title="An Ambitious Tech Startup Engineered for Builders"
          description="We are a hands-on freelance collective and early-stage software studio. Hungry, agile, and dedicated to crafting clean, high-performance digital products from the ground up."
        />

        {/* Narrative & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <div className="inline-flex items-center gap-2">
              <Badge variant="glow" size="sm">
                Built by Builders, Driven Like Founders
              </Badge>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-snug">
              Why We Started Bit &amp; Bot
            </h2>

            <p>
              Bit &amp; Bot was formed by passionate freelance engineers who believe software development should be direct, transparent, and exhilarating—free from corporate agency bloat and layers of non-technical middlemen.
            </p>

            <p>
              As an emerging startup studio, we don&apos;t treat your project like ticket #450 in a corporate queue. Because we are at the beginning of our journey, every project we take on is our showcase. We pour our full dedication, attention, and technical craftsmanship into delivering software that works flawlessly.
            </p>

            <p>
              Every project begins with an honest, detailed discussion. We stay in close touch throughout development, provide regular progress demos, and remain accessible whenever you need advice or updates.
            </p>
          </div>

          {/* Right Column: Visual Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border/60 bg-card/70 overflow-hidden shadow-lg group">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-muted/30">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Bit and Bot collaborative developer squad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-background/85 backdrop-blur-md text-xs font-mono shadow-sm">
                    Early-Stage Collective
                  </Badge>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3">
                <h3 className="font-heading text-base font-bold text-foreground">
                  Personal Commitment to Every Client
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We take on a limited number of clients at any time to guarantee that your software receives undivided engineering focus from kickoff to launch.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 border-t border-border/40">
                  <span className="text-[0.7rem] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                    1-on-1 Focus
                  </span>
                  <span className="text-[0.7rem] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                    Direct Hotline
                  </span>
                  <span className="text-[0.7rem] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                    100% IP Handover
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Startup Advantages */}
        <div className="space-y-4 pt-2">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <Badge variant="outline" size="sm">
              The Startup Advantage
            </Badge>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              What It Means to Partner with an Agile Studio
            </h2>
            <p className="text-xs text-muted-foreground">
              Bigger agencies come with bigger overhead. Here is why working with an ambitious startup team delivers better outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {startupAdvantages.map((adv) => (
              <div
                key={adv.title}
                className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-2 hover:border-primary/40 transition-colors"
              >
                <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <DynamicIcon name={adv.icon} size={18} />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground">
                  {adv.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Principles We Stand By */}
        <div className="space-y-4 pt-2">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              Core Principles We Stand By
            </h2>
            <p className="text-xs text-muted-foreground">
              Our engineering philosophy is grounded in simplicity, direct communication, and lasting quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {corePrinciples.map((val) => (
              <Card key={val.title} className="border-border/60 bg-card/60">
                <CardHeader className="p-4 space-y-2">
                  <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <DynamicIcon name={val.icon} size={18} />
                  </div>
                  <CardTitle className="text-sm font-bold text-foreground font-heading">
                    {val.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Engineering Stack */}
        <div className="p-5 sm:p-7 rounded-2xl border border-border/60 bg-muted/20 backdrop-blur-sm space-y-4">
          <div className="space-y-1">
            <Badge variant="secondary" size="sm">
              Our Technical Toolkit
            </Badge>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
              Modern Technologies We Specialize In
            </h3>
            <p className="text-xs text-muted-foreground">
              We focus on battle-tested, high-performance stacks that scale effortlessly without unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1">
            {techStack.map((stack) => (
              <div key={stack.category} className="p-3.5 rounded-xl border border-border/50 bg-card/60 space-y-2">
                <h4 className="text-xs font-bold text-primary font-heading tracking-wide uppercase">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[0.68rem] font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Collaborate with Clients */}
        <div className="p-5 sm:p-7 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 via-card/40 to-muted/20 backdrop-blur-md space-y-5">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <Badge variant="glow" size="sm">
              Collaborative Flow
            </Badge>
            <h2 className="font-heading text-lg sm:text-2xl font-bold text-foreground">
              How We Work With You
            </h2>
            <p className="text-xs text-muted-foreground">
              Straightforward, transparent collaboration from first discussion to production launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {collaborativeProcess.map((step) => (
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
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Startup Call to Action */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-background p-6 sm:p-8 text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-3">
            <Badge variant="glow" size="sm">
              Let&apos;s Build Together
            </Badge>

            <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-foreground">
              Have an Idea in Mind? We&apos;d Love to Hear It.
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Whether you need a high-speed web application, an intuitive mobile app, or automated workflows—let&apos;s talk through your vision and explore how we can bring it to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button asChild size="default" className="font-semibold shadow-md">
                <Link href="/contact">
                  Start a Conversation
                  <DynamicIcon name="ArrowRight" size={15} className="ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="text-xs">
                <Link href="/terms">
                  Read Our Working Agreement
                </Link>
              </Button>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-[0.7rem] text-muted-foreground">
              <span className="flex items-center gap-1">
                <DynamicIcon name="Phone" size={12} className="text-primary" />
                Direct Developer Callback
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <DynamicIcon name="ShieldCheck" size={12} className="text-primary" />
                100% Code Ownership
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <DynamicIcon name="CheckCircle2" size={12} className="text-primary" />
                Zero Obligations
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

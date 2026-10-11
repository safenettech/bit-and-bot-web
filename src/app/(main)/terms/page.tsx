import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Terms of Service & Working Agreement | Bit & Bot",
  description:
    "Terms of engagement, freelance startup disclosure, advance deposit policy, and client communication standards for Bit & Bot projects.",
}

const keyHighlights = [
  {
    icon: "Users",
    title: "Freelance Startup Collective",
    description:
      "We operate as an agile collective of independent freelance developers and designers. We are in our early startup phase and currently operate on a direct freelance engagement model rather than a formally registered corporate entity.",
  },
  {
    icon: "MessagesSquare",
    title: "Deep Client Collaboration",
    description:
      "Every project is discussed thoroughly before development begins. We maintain close alignment with you, sharing continuous sprint updates, review links, and transparent progress reports at every stage.",
  },
  {
    icon: "CreditCard",
    title: "Advance Deposit Requirement",
    description:
      "Before work starts, an advance payment of at least 10% is mandatory to secure the sprint slot. This percentage is a baseline and may adjust based on custom quotation, project scope, and work complexity.",
  },
  {
    icon: "PhoneCall",
    title: "Call Access & Dedicated Callback",
    description:
      "You have direct call access to us anytime. If we are unable to answer immediately due to deep coding or live deployment sprints, please don't panic—we always call you back promptly to address your needs.",
  },
]

export default function TermsPage() {
  return (
    <main className="py-16 sm:py-24 space-y-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <SectionHeading
          badge="Legal & Working Agreement"
          title="Terms of Service & Client Agreement"
          description="Clear, transparent terms governing our freelance development engagements, project milestones, payments, and client communication."
        />

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyHighlights.map((item) => (
            <Card
              key={item.title}
              className="border-border/60 bg-card/60 backdrop-blur-sm p-2 hover:border-primary/40 transition-colors"
            >
              <CardHeader className="p-5 flex flex-row items-start gap-4 space-y-0">
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <DynamicIcon name={item.icon} size={22} />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-base font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="max-w-4xl mx-auto space-y-10 text-sm leading-relaxed text-muted-foreground">
          {/* Section 1 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 1
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Company Status &amp; Freelance Operation Disclosure
              </h2>
            </div>
            <p>
              Bit &amp; Bot is currently an early-stage, bootstrapped software startup operating as a dedicated collective of independent freelance engineers, architects, and UI/UX designers.
            </p>
            <p>
              During this foundational growth phase, we are <strong className="text-foreground">not yet registered as an incorporated company</strong>. All contracts, service agreements, and client engagements are established directly with our freelance specialist team. By initiating a project with us, you acknowledge and agree to this independent freelance working model.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 2
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Project Discovery, Discussion &amp; Work Updates
              </h2>
            </div>
            <p>
              We believe great software is built on close collaboration and mutual clarity. Every project undergoes a structured workflow:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-foreground">Initial Discovery:</strong> We discuss your ideas, functional goals, technical requirements, and target timeline in depth before issuing a proposal.
              </li>
              <li>
                <strong className="text-foreground">Continuous Work Updates:</strong> Once a project kicks off, our team regularly updates you on sprint progress, completed modules, and staging previews.
              </li>
              <li>
                <strong className="text-foreground">Feedback Loops:</strong> You have continuous opportunities to review, test, and provide input as features are built, preventing surprises at launch.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 3
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Payment Terms, Advance Deposit &amp; Flexible Quotation
              </h2>
            </div>
            <p>
              To allocate dedicated developer bandwidth, procure third-party resources, and initiate architectural design:
            </p>
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-2 text-foreground">
              <div className="flex items-center gap-2 font-semibold text-primary">
                <DynamicIcon name="ShieldAlert" size={16} />
                <span>Mandatory Advance Requirement</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Before we start any development, UI/UX design, or codebase implementation, we must receive an advance deposit. The minimum baseline advance is <strong className="text-foreground">10% of the total project amount</strong>.
              </p>
            </div>
            <p>
              <strong className="text-foreground">Advance Amount Flexibility:</strong> The 10% advance is not a fixed universal amount. It is subject to change depending on the specific project quotation, scope complexity, cloud hosting/API setup requirements, and the technical behavior of the work required. The exact advance percentage and milestone payment breakdown will be explicitly stated in your custom project quotation.
            </p>
            <p>
              Subsequent milestone payments are scheduled alongside agreed deliverables (e.g., prototype delivery, backend integration, and final production handover).
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 4
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Direct Call Communication &amp; &ldquo;Don&rsquo;t Panic&rdquo; Policy
              </h2>
            </div>
            <p>
              We provide open, direct phone and digital communication channels to all clients throughout the project lifecycle.
            </p>
            <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-2">
              <p className="font-semibold text-foreground flex items-center gap-2">
                <DynamicIcon name="PhoneCall" size={16} className="text-emerald-500" />
                <span>Our Call Availability &amp; Response Guarantee</span>
              </p>
              <p className="text-xs text-muted-foreground">
                You are welcome to call our team whenever you have urgent questions or project updates. However, because our engineers may be actively writing code, conducting focused builds, or in technical reviews:
              </p>
              <p className="text-xs font-semibold text-foreground">
                In case we do not connect immediately, please do not panic!
              </p>
              <p className="text-xs text-muted-foreground">
                We log every incoming attempt and will always call you back promptly to understand your needs and provide full assistance.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 5
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Intellectual Property &amp; Code Handover
              </h2>
            </div>
            <p>
              Upon complete settlement of all agreed project invoices, 100% of the customized source code, design assets, configurations, and related intellectual property belong entirely to you. Bit &amp; Bot retains no proprietary claims over your custom business logic.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 6
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Questions &amp; Contact Information
              </h2>
            </div>
            <p>
              If you have any questions regarding these terms, payment structures, or project onboarding, please reach out to our team directly:
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="sm">
                <Link href="/contact">
                  <DynamicIcon name="Mail" size={14} className="mr-1.5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/privacy">
                  <DynamicIcon name="ShieldCheck" size={14} className="mr-1.5" />
                  Read Privacy Policy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  )
}

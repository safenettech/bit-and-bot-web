import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security | Bit & Bot",
  description:
    "How Bit & Bot collects, protects, and respects your personal and project information across our freelance development services.",
}

const privacyHighlights = [
  {
    icon: "ShieldCheck",
    title: "Strict Confidentiality",
    description:
      "As an independent freelance collective and startup team, we treat all client specifications, project concepts, and credentials with strict commercial confidentiality.",
  },
  {
    icon: "Lock",
    title: "Zero Data Selling",
    description:
      "We never sell, rent, or trade your contact information, project ideas, or codebase to advertisers, brokers, or external third parties.",
  },
  {
    icon: "Key",
    title: "Encrypted Credentials",
    description:
      "Any API keys, database URLs, or staging logins shared with us for development are stored in isolated encrypted environments.",
  },
  {
    icon: "PhoneCall",
    title: "Direct Callback Protocol",
    description:
      "Your phone and communication details are used exclusively to discuss your project, provide milestone updates, and return missed calls promptly.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="py-16 sm:py-24 space-y-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <SectionHeading
          badge="Data Protection &amp; Confidentiality"
          title="Privacy Policy &amp; Information Security"
          description="We are committed to absolute transparency. Here is how your personal information and project data are safeguarded when working with our freelance team."
        />

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privacyHighlights.map((item) => (
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

        {/* Detailed Policy Content */}
        <div className="max-w-4xl mx-auto space-y-10 text-sm leading-relaxed text-muted-foreground">
          {/* Section 1 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 1
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Freelance Startup Structure &amp; Scope
              </h2>
            </div>
            <p>
              This Privacy Policy explains how <strong className="text-foreground">Bit &amp; Bot</strong> collects, processes, and protects information submitted through our website and direct communication channels.
            </p>
            <p>
              Bit &amp; Bot is an agile software engineering collective operating as independent freelance professionals in our early startup phase. As disclosed in our Terms of Service, we are currently not a registered corporate entity. We uphold industry-standard privacy safeguards and treat client confidentiality with the highest priority.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 2
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Information We Collect
              </h2>
            </div>
            <p>
              We only collect information that is strictly necessary to evaluate, scope, design, and engineer your software project:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-foreground">Inquiry Details:</strong> When you submit our contact form, we collect your full name, email address, company name, phone number, project subject, budget range, and message details.
              </li>
              <li>
                <strong className="text-foreground">Project &amp; Technical Assets:</strong> During active development sprints, you may provide API keys, cloud provider access, repository invitations, or wireframes required to build the system.
              </li>
              <li>
                <strong className="text-foreground">Communication Records:</strong> Call logs, emails, and direct chat messages exchanged during project discovery and milestone updates.
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
                How We Use Your Information
              </h2>
            </div>
            <p>
              Information gathered is utilized solely for legitimate operational and client engineering purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To evaluate project scope, formulate technical architecture, and prepare customized quotations.</li>
              <li>To discuss advance payment terms (minimum baseline 10% advance deposit) and define sprint deliverables.</li>
              <li>To provide continuous, transparent project updates and staging demonstration previews.</li>
              <li>To contact you directly via phone or email, and promptly return any missed calls to address your project requirements.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 4
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Data Protection &amp; Technical Security
              </h2>
            </div>
            <p>
              We implement comprehensive security controls across all tools and infrastructure:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-foreground">Encrypted Cloud Database:</strong> Form inquiries are securely stored in Supabase with strict Row-Level Security (RLS) policies.
              </li>
              <li>
                <strong className="text-foreground">No Third-Party Sharing:</strong> We do not share, sell, or disclose your contact details or proprietary business concepts to third-party marketing brokers.
              </li>
              <li>
                <strong className="text-foreground">Credential Rotation &amp; Clean Handover:</strong> Upon project completion and final handover, all temporary developer credentials and staging keys can be rotated or deleted as per your instructions.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                Section 5
              </Badge>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Contact &amp; Privacy Inquiries
              </h2>
            </div>
            <p>
              If you have any questions about our privacy policies, data retention, or would like to request removal of your contact details, please reach out directly:
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="sm">
                <Link href="/contact">
                  <DynamicIcon name="Mail" size={14} className="mr-1.5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/terms">
                  <DynamicIcon name="FileText" size={14} className="mr-1.5" />
                  View Terms of Service
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

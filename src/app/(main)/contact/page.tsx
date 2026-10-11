import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactForm } from "@/components/contact/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | Bit & Bot",
  description:
    "Get in touch with Bit and Bot engineers. Schedule an architecture review, request a project proposal, or discuss your digital product needs.",
}

const contactHighlights = [
  {
    title: "Direct Engineering Response",
    description: "Every inquiry is reviewed by a principal software architect within 24 hours.",
    icon: "Clock",
  },
  {
    title: "Strict Confidentiality",
    description: "We sign NDAs before discussing proprietary models, IP, or confidential roadmaps.",
    icon: "ShieldCheck",
  },
  {
    title: "Flexible Engagement Models",
    description: "Fixed-scope milestone sprints, dedicated senior squads, or technical advisory.",
    icon: "Award",
  },
]

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Get In Touch"
          title="Let&apos;s Build Your Next Digital Product"
          description="Have an upcoming project, architecture challenge, or new product idea? Tell us about your goals below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details & expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                What to Expect
              </h2>
              <div className="space-y-4">
                {contactHighlights.map((item) => (
                  <Card key={item.title} className="border-border/60 bg-card/60">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <DynamicIcon name={item.icon} size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-muted/20 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Direct Channels
              </h3>
              <div className="space-y-2 text-sm">
                <Link href="mailto:bitandbot1@gmail.com" className="flex items-center gap-2 text-foreground">
                  <DynamicIcon name="Mail" size={16} className="text-primary" />
                  <span>bitandbot1@gmail.com</span>
                </Link>
                <p className="flex items-center gap-2 text-foreground">
                  <DynamicIcon name="Globe" size={16} className="text-primary" />
                  <span>Distributed globally</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/80 bg-card/80 p-6 sm:p-10 shadow-xl backdrop-blur-sm">
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Project Inquiry Form
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Fill in your details below and we&apos;ll schedule a discovery call.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

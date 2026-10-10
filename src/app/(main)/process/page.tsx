import type { Metadata } from "next"
import { processSteps } from "@/data/process"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProcessStep } from "@/components/process/ProcessStep"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Engineering Process & Methodology | Bit & Bot",
  description:
    "Our structured 5-stage software delivery lifecycle from discovery and architecture to agile sprints and zero-downtime deployment.",
}

const engineeringStandards = [
  {
    title: "100% Peer Code Reviews",
    description: "Every pull request requires approval from at least two senior engineers before merge.",
    icon: "Code2",
  },
  {
    title: "Strict Automated Test Suites",
    description: "Unit, integration, and E2E regression tests guard every build in automated CI/CD.",
    icon: "ShieldCheck",
  },
  {
    title: "Zero-Downtime Deployment",
    description: "Blue/green and rolling deployments with instant rollback mechanisms.",
    icon: "Rocket",
  },
  {
    title: "SOC2 & Privacy Readiness",
    description: "Strict isolation of sensitive customer data and zero-trust authorization barriers.",
    icon: "ShieldAlert",
  },
]

export default function ProcessPage() {
  return (
    <main className="py-16 sm:py-24 space-y-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Engineering Lifecycle"
          title="How We Build Production-Ready Systems"
          description="A transparent, repeatable methodology designed to reduce risk, eliminate rework, and accelerate time-to-market."
        />

        {/* 5-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <ProcessStep key={step.step} step={step} />
          ))}
        </div>

        {/* Engineering Standards */}
        <div className="pt-12 space-y-8">
          <SectionHeading
            badge="Quality Assurance"
            title="Our Engineering Standards"
            description="We build software that stands up to production scale without cutting corners."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringStandards.map((std) => (
              <Card key={std.title} className="border-border/60 bg-card/60">
                <CardHeader className="space-y-3">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <DynamicIcon name={std.icon} size={20} />
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {std.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {std.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  )
}

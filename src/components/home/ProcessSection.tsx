import Link from "next/link"
import { processSteps } from "@/data/process"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProcessStep } from "@/components/process/ProcessStep"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Our Methodology"
          title="Predictable Delivery. Zero Surprises."
          description="How we shepherd your vision from architectural discovery to production scale through structured, test-driven agile cycles."
        />

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <ProcessStep key={step.step} step={step} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Button asChild variant="outline" size="lg" className="font-semibold">
            <Link href="/process">
              Read Our Full Engineering Handbook
              <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

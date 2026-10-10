import type { Metadata } from "next"
import { services } from "@/data/services"
import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/services/ServiceCard"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Services & Capabilities | Bit & Bot",
  description:
    "Explore our full engineering capabilities: Web Development, Mobile Apps, UI/UX Design Systems, Backend APIs, Custom Software, and AI Automation.",
}

export default function ServicesPage() {
  return (
    <main className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="End-to-End Capabilities"
          title="Engineering Services Crafted for Modern Demands"
          description="We deliver full-cycle software engineering from technical discovery and UI design to cloud deployment and autonomous AI integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      <FinalCTA />
    </main>
  )
}

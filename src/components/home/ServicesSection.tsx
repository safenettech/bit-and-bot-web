import Link from "next/link"
import { services } from "@/data/services"
import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/services/ServiceCard"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Capabilities"
          title="Engineered for Performance & Scale"
          description="From modern web platforms to cloud-native microservices and intelligent AI agents, we deliver end-to-end digital solutions that outperform the competition."
        />

        {/* Dynamic grid using reusable ServiceCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="font-semibold">
            <Link href="/services">
              Explore All Engineering Services
              <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

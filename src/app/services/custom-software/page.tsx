import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getServiceBySlug } from "@/data/services"
import { ServiceHero } from "@/components/services/ServiceHero"
import { ServiceFeatures } from "@/components/services/ServiceFeatures"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Custom Enterprise Software | Bit & Bot",
  description:
    "Tailor-made ERP, operational workflows, and automation software engineered to replace legacy technical debt.",
}

export default function CustomSoftwarePage() {
  const service = getServiceBySlug("custom-software")
  if (!service) notFound()

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <FinalCTA />
    </main>
  )
}

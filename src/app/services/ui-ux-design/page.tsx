import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getServiceBySlug } from "@/data/services"
import { ServiceHero } from "@/components/services/ServiceHero"
import { ServiceFeatures } from "@/components/services/ServiceFeatures"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "UI/UX Design & Design Systems | Bit & Bot",
  description:
    "Conversion-focused product design, interactive prototypes, and unified multi-brand design systems.",
}

export default function UIUXDesignPage() {
  const service = getServiceBySlug("ui-ux-design")
  if (!service) notFound()

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <FinalCTA />
    </main>
  )
}

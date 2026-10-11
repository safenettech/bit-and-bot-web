import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getServiceBySlug } from "@/data/services"
import { ServiceHero } from "@/components/services/ServiceHero"
import { ServiceFeatures } from "@/components/services/ServiceFeatures"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "UI/UX & Poster Design | Bit & Bot",
  description:
    "Figma UI/UX wireframes, interactive prototypes, design systems, and creative digital poster designing for marketing & promotions.",
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

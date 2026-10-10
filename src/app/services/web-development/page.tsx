import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getServiceBySlug } from "@/data/services"
import { ServiceHero } from "@/components/services/ServiceHero"
import { ServiceFeatures } from "@/components/services/ServiceFeatures"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Web Development Services | Bit & Bot",
  description:
    "High-performance Next.js, React, and TypeScript web applications engineered for speed, SEO dominance, and scale.",
}

export default function WebDevelopmentPage() {
  const service = getServiceBySlug("web-development")
  if (!service) notFound()

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <FinalCTA />
    </main>
  )
}

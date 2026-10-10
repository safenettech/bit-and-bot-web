import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getServiceBySlug } from "@/data/services"
import { ServiceHero } from "@/components/services/ServiceHero"
import { ServiceFeatures } from "@/components/services/ServiceFeatures"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Backend & API Architecture | Bit & Bot",
  description:
    "Resilient microservices, high-throughput GraphQL/REST APIs, and distributed databases built for zero downtime.",
}

export default function BackendAPIPage() {
  const service = getServiceBySlug("backend-api")
  if (!service) notFound()

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <FinalCTA />
    </main>
  )
}

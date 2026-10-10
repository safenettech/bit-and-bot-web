import { Hero } from "@/components/home/Hero"
import { TrustSection } from "@/components/home/TrustSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { TechnologiesSection } from "@/components/home/TechnologiesSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { WhyUsSection } from "@/components/home/WhyUsSection"
import { AboutPreview } from "@/components/home/AboutPreview"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ProcessSection />
      <WhyUsSection />
      <AboutPreview />
      <FinalCTA />
    </main>
  )
}

import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { ProjectShowcase } from "@/components/projects/ProjectShowcase"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Work & Case Studies | Bit & Bot",
  description:
    "Explore our delivered digital platforms, mobile apps, and enterprise systems including Club Travel, PayFlow Global, and Zenith Health.",
}

export default function WorkPage() {
  const featured = projects.find((p) => p.slug === "club-travel") || projects[0]
  const otherProjects = projects.filter((p) => p.slug !== featured.slug)

  return (
    <main className="py-16 sm:py-24 space-y-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Portfolio"
          title="Engineered Products in Production"
          description="A selection of high-impact digital systems we designed, engineered, and scaled for our global partners."
        />

        {featured && <ProjectShowcase project={featured} />}

        <div className="space-y-6 pt-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            All Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  )
}

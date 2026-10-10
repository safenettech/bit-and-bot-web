import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/data/projects"
import { ProjectHero } from "@/components/projects/ProjectHero"
import { CaseStudySection } from "@/components/projects/CaseStudySection"
import { ProjectTechnology } from "@/components/projects/ProjectTechnology"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { FinalCTA } from "@/components/home/FinalCTA"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Case Study Not Found | Bit & Bot" }

  return {
    title: `${project.title} Case Study | Bit & Bot`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3)

  return (
    <main>
      <ProjectHero project={project} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CaseStudySection project={project} />
        <ProjectTechnology technologies={project.technologies} />

        {/* Related Projects */}
        <div className="py-16 sm:py-24 border-t border-border/50 space-y-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            More Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} />
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  )
}

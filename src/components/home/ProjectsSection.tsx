import Link from "next/link"
import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { ProjectShowcase } from "@/components/projects/ProjectShowcase"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export function ProjectsSection() {
  const featuredClubTravel = projects.find((p) => p.slug === "payflow-gateway") || projects[0]
  const otherProjects = projects.filter((p) => p.slug !== featuredClubTravel.slug).slice(0, 3)

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <SectionHeading
          badge="Selected Case Studies"
          title="Digital Products Built to Win"
          description="A track record of delivering resilient, high-conversion applications that solve complex technical problems and drive business growth."
        />

        {/* Featured Showcase (Payflow Gateway) */}
        {featuredClubTravel && (
          <ProjectShowcase project={featuredClubTravel} />
        )}

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="font-semibold shadow-md">
            <Link href="/work">
              Explore All {projects.length} Case Studies
              <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

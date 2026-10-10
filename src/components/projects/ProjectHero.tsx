import Link from "next/link"
import type { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export interface ProjectHeroProps {
  project: Project
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <Link
              href="/work"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Case Studies <DynamicIcon name="ChevronRight" size={12} />
            </Link>
            <Badge variant="glow">{project.category}</Badge>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/50">
            {project.client && (
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Client</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">{project.client}</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Category</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">{project.category}</p>
            </div>
            {project.year && (
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Timeline</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">{project.year}</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Role</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">Full-Stack Architecture</p>
            </div>
          </div>

          {project.liveUrl && (
            <div className="pt-4">
              <Button asChild size="lg" className="font-semibold shadow-md">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit Live Project
                  <DynamicIcon name="ExternalLink" size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

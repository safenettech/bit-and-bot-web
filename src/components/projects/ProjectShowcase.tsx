import Link from "next/link"
import type { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export interface ProjectShowcaseProps {
  project: Project
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card/80 to-muted/30 p-8 sm:p-12 lg:p-16 shadow-xl">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="glow">Featured Case Study</Badge>
            <Badge variant="outline">{project.category}</Badge>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" size="default">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button asChild size="lg" className="font-semibold shadow-md">
              <Link href={`/work/${project.slug}`}>
                Explore Complete Case Study
                <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="outline" size="lg">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit Live Demo
                  <DynamicIcon name="ExternalLink" size={15} className="ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Right Column: Key Metrics & Testimonial */}
        <div className="lg:col-span-5 space-y-6">
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-5 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm"
                >
                  <p className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {project.testimonial && (
            <div className="p-6 rounded-2xl border border-border/60 bg-muted/20 space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <DynamicIcon key={i} name="Star" size={14} className="fill-amber-500" />
                ))}
              </div>
              <p className="text-sm italic text-foreground/90 leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="pt-2 text-xs">
                <span className="font-semibold text-foreground block">
                  {project.testimonial.author}
                </span>
                <span className="text-muted-foreground">
                  {project.testimonial.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

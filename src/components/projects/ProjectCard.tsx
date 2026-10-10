import Link from "next/link"
import type { Project } from "@/types"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const caseStudyUrl = `/work/${project.slug}`

  return (
    <Card
      className={cn(
        "group flex flex-col justify-between overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" size="sm">
            {project.category}
          </Badge>
          {project.year && (
            <span className="text-xs text-muted-foreground font-mono">
              {project.year}
            </span>
          )}
        </div>

        <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
          <Link href={caseStudyUrl} className="focus:outline-none">
            {project.title}
          </Link>
        </CardTitle>

        <CardDescription className="text-sm line-clamp-3 leading-relaxed">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30 border border-border/40">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label}>
                <p className="text-lg font-bold text-primary font-heading tracking-tight">
                  {metric.value}
                </p>
                <p className="text-[0.7rem] text-muted-foreground line-clamp-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Link
          href={caseStudyUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link"
        >
          Read Full Case Study
          <DynamicIcon
            name="ArrowRight"
            size={13}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </CardFooter>
    </Card>
  )
}

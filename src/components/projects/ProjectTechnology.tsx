import { Badge } from "@/components/ui/badge"

export interface ProjectTechnologyProps {
  technologies: string[]
  title?: string
}

export function ProjectTechnology({
  technologies,
  title = "Technology Stack",
}: ProjectTechnologyProps) {
  return (
    <div className="space-y-4 pt-6 border-t border-border/50">
      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" size="lg" className="px-3.5 py-1.5 text-xs sm:text-sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

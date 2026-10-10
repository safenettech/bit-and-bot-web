import type { Project } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"

export interface CaseStudySectionProps {
  project: Project
}

export function CaseStudySection({ project }: CaseStudySectionProps) {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Key Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((metric) => (
            <Card key={metric.label} className="border-border/60 bg-card/60">
              <CardContent className="p-6 text-center space-y-1">
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-primary">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Challenge & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {project.challenge && (
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-destructive/10 text-destructive text-sm font-bold">
                !
              </span>
              The Challenge
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>
        )}

        {project.solution && (
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
                ✓
              </span>
              The Engineered Solution
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}
      </div>

      {/* Core Features */}
      {project.features && project.features.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-border/50">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Key Architecture Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="p-4 rounded-xl border border-border/50 bg-card/40 flex items-start gap-3"
              >
                <DynamicIcon name="CheckCircle2" size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Client Testimonial */}
      {project.testimonial && (
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-card to-primary/5 p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <DynamicIcon key={i} name="Star" size={18} className="fill-amber-500" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium italic text-foreground leading-relaxed">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-foreground">{project.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
          </div>
        </div>
      )}
    </div>
  )
}

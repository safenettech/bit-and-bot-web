import type { ProcessStep as ProcessStepType } from "@/types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface ProcessStepProps {
  step: ProcessStepType
  className?: string
}

export function ProcessStep({ step, className }: ProcessStepProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300",
        className
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-heading font-extrabold text-lg">
            0{step.step}
          </div>
          <div className="p-2.5 rounded-xl bg-muted/40 text-muted-foreground">
            <DynamicIcon name={step.icon} size={20} />
          </div>
        </div>

        <div className="space-y-1">
          <CardTitle className="text-xl font-bold tracking-tight text-foreground">
            {step.title}
          </CardTitle>
          <p className="text-xs text-primary font-medium">
            {step.subtitle}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>

        {step.deliverables && step.deliverables.length > 0 && (
          <div className="space-y-2 pt-3 border-t border-border/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Key Deliverables
            </p>
            <ul className="space-y-1.5">
              {step.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                  <DynamicIcon name="CheckCircle2" size={13} className="text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

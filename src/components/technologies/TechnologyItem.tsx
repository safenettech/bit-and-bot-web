import type { Technology } from "@/types"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface TechnologyItemProps {
  tech: Technology
  className?: string
}

export function TechnologyItem({ tech, className }: TechnologyItemProps) {
  return (
    <Card
      className={cn(
        "group border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <CardHeader className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <DynamicIcon name={tech.icon} size={20} />
          </div>
          {tech.proficiency && (
            <Badge variant="secondary" size="sm">
              {tech.proficiency}
            </Badge>
          )}
        </div>

        <div>
          <CardTitle className="text-base font-bold text-foreground">
            {tech.name}
          </CardTitle>
          <CardDescription className="text-xs line-clamp-2 mt-1">
            {tech.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}

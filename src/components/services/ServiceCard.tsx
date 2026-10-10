import Link from "next/link"
import type { Service } from "@/types"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface ServiceCardProps {
  service?: Service
  title?: string
  description?: string
  icon?: string
  slug?: string
  features?: string[]
  technologies?: string[]
  className?: string
}

export function ServiceCard({
  service,
  title = service?.title ?? "",
  description = service?.shortDescription ?? service?.description ?? "",
  icon = service?.icon ?? "Sparkles",
  slug = service?.slug ?? "services",
  features = service?.features ?? [],
  technologies = service?.technologies ?? [],
  className,
}: ServiceCardProps) {
  const serviceUrl = `/services/${slug}`

  return (
    <Card
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="absolute top-0 right-0 -mr-16 -mt-16 size-36 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />

      <CardHeader className="space-y-4">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <DynamicIcon name={icon} size={24} />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            <Link href={serviceUrl} className="focus:outline-none">
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm line-clamp-3">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {features.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-border/40">
            {features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                <DynamicIcon
                  name="CheckCircle2"
                  size={14}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2">
        <Link
          href={serviceUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link"
        >
          Explore Service Details
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

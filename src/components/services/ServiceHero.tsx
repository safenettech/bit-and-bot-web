import Link from "next/link"
import type { Service } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Services <DynamicIcon name="ChevronRight" size={12} />
            </Link>
            <Badge variant="glow">{service.title}</Badge>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {service.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button asChild size="lg" className="font-semibold shadow-md">
              <Link href="/contact">
                Request a Proposal
                <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
            {/* <Button asChild variant="outline" size="lg">
              <Link href="/work">
                View Case Studies
              </Link>
            </Button> */}
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" size="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

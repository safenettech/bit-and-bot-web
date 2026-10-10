import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/icon"

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-background p-8 sm:p-14 lg:p-20 text-center shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="glow" size="lg">
                Ready to Accelerate?
              </Badge>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Have a Project in Mind? Let&apos;s Build Something Extraordinary.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Schedule a 30-minute technical architecture consultation with our engineering team. We&apos;ll evaluate your scope, identify risks, and map out an execution blueprint.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto font-semibold px-8 h-12 text-base shadow-lg shadow-primary/20">
                <Link href="/contact">
                  Start Your Project
                  <DynamicIcon name="ArrowRight" size={18} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-8 h-12 text-base">
                <Link href="/work">
                  View Our Portfolio
                </Link>
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <DynamicIcon name="Clock" size={14} className="text-primary" />
                Response within 24 hours
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <DynamicIcon name="ShieldCheck" size={14} className="text-primary" />
                Strict NDA protection
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <DynamicIcon name="CheckCircle2" size={14} className="text-primary" />
                No obligations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

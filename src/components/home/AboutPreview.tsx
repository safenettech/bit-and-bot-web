import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export function AboutPreview() {
  return (
    <section className="py-10 sm:py-14 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text narrative */}
          <div className="lg:col-span-7 space-y-4">
            <Badge variant="glow" size="sm">About The Studio</Badge>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
              An Ambitious Tech Startup &amp; Freelance Developer Collective
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Bit and Bot was founded on a simple premise: building remarkable software shouldn&apos;t require navigating bloated agency hierarchies or dealing with non-technical middlemen.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We operate as a focused, agile engineering collective. From Day 1, you collaborate directly with the developers writing your code and architecting your systems. We believe in rapid feedback, transparent milestones, and software that delivers immediate commercial value.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="default" className="font-semibold shadow-md">
                <Link href="/about">
                  Learn More About Us
                  <DynamicIcon name="ArrowRight" size={15} className="ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="text-xs">
                <Link href="/contact">
                  Talk to an Engineer
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1.5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="Award" size={16} />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground">Dedicated Focus</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Focused attention on your project without dilution across hundreds of agency accounts.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1.5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="Zap" size={16} />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground">Rapid Cadence</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Frequent sprint demos with live staging previews and zero bureaucratic delays.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1.5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="ShieldCheck" size={16} />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground">Clean Ownership</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full repository, cloud credentials, and intellectual property handed over to you.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1.5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="Phone" size={16} />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground">Direct Hotline</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Call anytime. If we are locked in deep focus, we log your number and call back promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

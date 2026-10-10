import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="glow">About The Studio</Badge>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              A High-Caliber Squad of Architects, Engineers &amp; Product Designers
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Bit and Bot was founded on a simple premise: building remarkable software shouldn&apos;t require navigating bloated agency hierarchies or dealing with junior engineers learning on your dime.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              We operate as a high-density, senior engineering unit. From Day 1, you collaborate directly with the lead engineers writing your code and designing your systems. We believe in rapid feedback, declarative architectures, and software that delivers immediate commercial value.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="font-semibold shadow-md">
                <Link href="/about">
                  Learn More About Us
                  <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Talk to an Architect
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-2">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="Award" size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Senior Density</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every team member has 7+ years of experience scaling software in production.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-2">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="Zap" size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Rapid Cadence</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bi-weekly deployments with automated CI/CD and zero red tape.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-2">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="ShieldCheck" size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Clean Ownership</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full repository, cloud account, and IP ownership transferred cleanly to you.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-2">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <DynamicIcon name="Bot" size={20} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">AI Modernization</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modern agent workflows and vector retrieval integrated natively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

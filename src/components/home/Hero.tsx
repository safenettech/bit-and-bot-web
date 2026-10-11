import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-20 lg:py-20">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] sm:size-[800px] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="glow" size="lg" className="py-1.5 px-4 text-xs sm:text-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              {/* Digital Engineering & AI Product Studio */}
              Your ideas our codes
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Engineering Scalable Digital Products &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Intelligent Systems
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We partner with ambitious startups and enterprises to design, build, and deploy production-grade web applications, cross-platform mobile apps, and autonomous AI pipelines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto font-semibold px-8 h-12 text-base shadow-lg shadow-primary/20">
              <Link href="/contact">
                Start Your Project
                <DynamicIcon name="ArrowRight" size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-8 h-12 text-base">
              <Link href="/work">
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Key Metrics Strip */}
          {/* <div className="pt-12 sm:pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-border/50 max-w-4xl mx-auto">
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                99.8%
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                On-Time Sprint Delivery
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                50+
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Shipped Products
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                &lt; 500ms
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Global Edge Latency
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                $100M+
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Client Volume Processed
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

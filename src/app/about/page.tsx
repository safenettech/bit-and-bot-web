import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "About Bit & Bot | Engineering Studio",
  description:
    "Learn about our engineering philosophy, culture, and why ambitious companies partner with Bit and Bot for their critical software systems.",
}

const studioValues = [
  {
    title: "Pragmatic Architecture",
    description:
      "We select technologies for maintainability, speed, and business outcomes—never resume padding or fleeting hype.",
    icon: "Layers",
  },
  {
    title: "Direct Engineer Access",
    description:
      "No account managers or telephone games. You speak directly to the technical leads who architect and write your code.",
    icon: "Terminal",
  },
  {
    title: "Continuous Observability",
    description:
      "We embed monitoring, automated error capture, and performance metrics from the very first sprint.",
    icon: "TrendingUp",
  },
  {
    title: "Radical Transparency",
    description:
      "Shared sprint boards, public repositories, and weekly milestone demos give you complete control.",
    icon: "Eye",
  },
]

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-24 space-y-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Our Story &amp; Values"
          title="Building Software the Way It Should Be Built"
          description="We are a senior-led software studio helping modern businesses turn complex product visions into high-performing reality."
        />

        {/* Narrative & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Bit and Bot was launched by senior engineers who grew tired of standard agency bloat. Traditional agencies sell you senior partners during the pitch, only to hand your critical project to junior developers after the contract is signed.
            </p>
            <p>
              We inverted the model. We maintain high senior density, deliberate small-squad focus, and direct technical collaboration. When you work with us, you work directly with experts who have designed distributed systems, scaled consumer mobile apps to millions of downloads, and engineered resilient fintech pipelines.
            </p>
            <p>
              Whether you are an established brand modernizing a legacy software suite or a fast-moving venture team preparing for launch, we treat your codebase as if it were our own.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 text-center space-y-1">
              <p className="font-heading text-4xl font-extrabold text-primary">100%</p>
              <p className="text-xs text-muted-foreground font-medium">Senior Squads</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 text-center space-y-1">
              <p className="font-heading text-4xl font-extrabold text-primary">50+</p>
              <p className="text-xs text-muted-foreground font-medium">Products Deployed</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 text-center space-y-1">
              <p className="font-heading text-4xl font-extrabold text-primary">4.9/5</p>
              <p className="text-xs text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 text-center space-y-1">
              <p className="font-heading text-4xl font-extrabold text-primary">7+ Yrs</p>
              <p className="text-xs text-muted-foreground font-medium">Avg Experience</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="pt-12 space-y-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-center">
            Principles We Stand By
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioValues.map((val) => (
              <Card key={val.title} className="border-border/60 bg-card/60">
                <CardHeader className="space-y-3">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <DynamicIcon name={val.icon} size={20} />
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {val.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  )
}

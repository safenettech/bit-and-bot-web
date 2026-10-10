import { whyUsItems } from "@/data/why-us"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DynamicIcon } from "@/components/ui/icon"

export function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Why Bit &amp; Bot"
          title="The Engineering Standard That Sets Us Apart"
          description="We reject agency bloat and amateur handoffs. Here is why CTOs and venture-backed founders trust our team with their critical systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsItems.map((item) => (
            <Card
              key={item.title}
              className="border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="space-y-4 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <DynamicIcon name={item.icon} size={24} />
                  </div>
                  {item.highlight && (
                    <Badge variant="glow" size="sm">
                      {item.highlight}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

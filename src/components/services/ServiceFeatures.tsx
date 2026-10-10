import type { Service } from "@/types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DynamicIcon } from "@/components/ui/icon"

export interface ServiceFeaturesProps {
  service: Service
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Core Capabilities */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <Card key={feature} className="border-border/60 bg-card/50">
                  <CardHeader className="p-5 space-y-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground">
                      {feature}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Deliverables & Business Impact */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                What We Deliver
              </h2>
              <Card className="border-border/60 bg-card/50">
                <CardContent className="p-6 space-y-3">
                  {service.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-3 text-sm">
                      <DynamicIcon name="CheckCircle2" size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90 font-medium">{del}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Business Benefits
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="p-4 rounded-xl border border-border/50 bg-muted/20 flex items-start gap-3"
                  >
                    <DynamicIcon name="Sparkles" size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

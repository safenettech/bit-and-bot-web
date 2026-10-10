import { DynamicIcon } from "@/components/ui/icon"

const clientLogos = [
  { name: "Club Travel", role: "Travel Booking Platform" },
  { name: "PayFlow Global", role: "Fintech & Payments" },
  { name: "Zenith Health", role: "Healthcare Network" },
  { name: "Nexus Insights", role: "Real-time Analytics" },
  { name: "Logix Freight", role: "Supply Chain ERP" },
  { name: "Aura Brands", role: "AI Customer Solutions" },
]

export function TrustSection() {
  return (
    <section className="py-12 border-y border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground text-center">
            Trusted by innovators, fast-scaling venture startups &amp; global enterprises
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 w-full items-center justify-items-center">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center p-3 text-center group hover:scale-105 transition-transform"
              >
                <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                  {client.name}
                </span>
                <span className="text-[0.65rem] text-muted-foreground uppercase tracking-wider">
                  {client.role}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <DynamicIcon name="ShieldCheck" size={14} className="text-primary" />
              SOC2 &amp; GDPR Aligned
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <DynamicIcon name="CheckCircle2" size={14} className="text-primary" />
              100% US &amp; Global IP Ownership
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <DynamicIcon name="Sparkles" size={14} className="text-primary" />
              Lighthouse 95+ Score Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

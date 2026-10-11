import { technologies, technologyCategories } from "@/data/technologies"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechnologyItem } from "@/components/technologies/TechnologyItem"

export function TechnologiesSection() {
  return (
    <section className="py-10 sm:py-14 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <SectionHeading
          badge="Our Tech Stack"
          title="Battle-Tested Tools &amp; Modern Frameworks"
          description="We work with proven, high-performance web, mobile, database, and hosting technologies to deliver fast, reliable results."
        />

        {/* Categorized Tech Grid */}
        <div className="space-y-8 sm:space-y-10">
          {technologyCategories.map((category) => {
            const categoryTechs = technologies.filter((t) => t.category === category)
            if (categoryTechs.length === 0) return null

            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {category}
                  </h3>
                  <div className="h-px flex-1 bg-border/50" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categoryTechs.map((tech) => (
                    <TechnologyItem key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

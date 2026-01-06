import type { LucideIcon } from "lucide-react"

interface IncludeItem {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceIncludesProps {
  title: string
  items: IncludeItem[]
}

export function ServiceIncludes({ title, items }: ServiceIncludesProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-16 text-center">{title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

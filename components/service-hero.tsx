import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  ctaText: string
  ctaVariant?: "default" | "destructive"
}

export function ServiceHero({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaVariant = "default",
}: ServiceHeroProps) {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <img src={image || "/placeholder.svg"} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative container mx-auto px-6 h-full flex items-end pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Our Services</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4">{title}</h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light mb-6">{subtitle}</p>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              className={`rounded-full px-8 py-6 text-lg gap-2 ${
                ctaVariant === "destructive"
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              {ctaVariant === "destructive" ? <Phone className="w-5 h-5" /> : null}
              {ctaText}
              {ctaVariant !== "destructive" ? <ArrowRight className="w-5 h-5" /> : null}
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

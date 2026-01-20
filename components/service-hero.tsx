import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
  ctaVariant?: "default" | "destructive"
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function ServiceHero({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaLink,
  ctaVariant = "default",
  secondaryCtaText = "View Our Work",
  secondaryCtaLink = "/#work",
}: ServiceHeroProps) {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden pt-16 lg:pt-0">
      <img src={image || "/placeholder.svg"} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative container mx-auto px-6 h-full flex items-end pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Our Services</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4">{title}</h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light mb-6">{subtitle}</p>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={ctaLink}>
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
            </Link>
            <Link href={secondaryCtaLink}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                {secondaryCtaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

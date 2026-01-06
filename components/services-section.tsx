"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Roof Repair",
    subtitle: "Fast. Reliable. Guaranteed.",
    description:
      "From minor leaks to major storm damage, our expert team delivers lasting repairs that protect your home.",
    image: "/professional-roofer-repairing-shingles-close-up-de.jpg",
    href: "/services/roof-repair",
  },
  {
    title: "New Installation",
    subtitle: "Built to last a lifetime.",
    description:
      "Premium materials meet expert craftsmanship. Every roof we install is backed by our comprehensive warranty.",
    image: "/brand-new-beautiful-asphalt-shingle-roof-installat.jpg",
    href: "/services/new-installation",
  },
  {
    title: "Storm Damage",
    subtitle: "24/7 Emergency response.",
    description:
      "When disaster strikes, we're here. Insurance claim assistance and rapid repairs to restore your peace of mind.",
    image: "/emergency-roof-repair-after-storm-damage-professio.jpg",
    href: "/services/storm-damage",
  },
  {
    title: "Inspections",
    subtitle: "Know before it's too late.",
    description:
      "Comprehensive roof assessments with detailed reports. AI-powered analysis for accurate, instant estimates.",
    image: "/professional-roof-inspector-examining-shingles-wit.jpg",
    href: "/services/inspections",
  },
]

export function ServicesSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  const service = services[current]

  return (
    <section id="services" className="relative bg-secondary">
      {/* Full-width image */}
      <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        {services.map((s, index) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={s.image || "/placeholder.svg"} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Our Services</p>
              <h2
                key={current}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight animate-slide-in"
              >
                {service.title}
              </h2>
              <p
                className="text-xl md:text-2xl text-white/80 font-light mt-2 animate-slide-in"
                style={{ animationDelay: "0.05s" }}
              >
                {service.subtitle}
              </p>
              <p
                className="text-white/60 mt-4 max-w-lg leading-relaxed animate-slide-in"
                style={{ animationDelay: "0.1s" }}
              >
                {service.description}
              </p>
              <Link href={service.href}>
                <Button
                  className="mt-6 rounded-full px-6 gap-2 bg-white text-black hover:bg-white/90 animate-slide-in"
                  style={{ animationDelay: "0.15s" }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 flex items-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setIsAutoPlaying(false)
                }}
                className={`h-1 rounded-full transition-all ${index === current ? "w-8 bg-white" : "w-4 bg-white/30"}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => {
              next()
              setIsAutoPlaying(false)
            }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

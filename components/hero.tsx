"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { BBBBadge } from "@/components/bbb-badge"

const heroImages = [
  "/stunning-modern-home-exterior-architecture-with-pr.jpg",
  "/modern-house-aerial-view-beautiful-new-roof-sunny-.jpg",
  "/images/roofing-service.png",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Auto-scrolling background images */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img || "/placeholder.svg"}
            alt="Roofing excellence"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 animate-slide-in">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white tracking-wide">Insured & Licensed #104018820</span>
          </div>
          <BBBBadge size="small" className="bg-white rounded-lg px-3 py-2 shadow-lg" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight max-w-4xl text-balance animate-slide-in">
          ZPR Roofing
        </h1>
        <p
          className="text-xl md:text-2xl text-white/80 mt-4 font-light tracking-wide animate-slide-in"
          style={{ animationDelay: "0.1s" }}
        >
          Excellence above. Protection below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <Link href="/#contact">
            <Button size="lg" className="rounded-full px-8 gap-2 bg-white text-black hover:bg-white/90">
              Get Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="#work">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Play className="w-4 h-4" />
              Watch Our Work
            </Button>
          </Link>
        </div>

        {/* Horizontal Banner below buttons */}
        <div className="mt-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <a 
            href="https://app.gethearth.com/partners/zpr-roofing?utm_campaign=58365&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110" 
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://app.gethearth.com/contractor_images/zpr-roofing/banner.jpg?size_id=700x110&color=zero_percent" 
              alt="Financing Options Available" 
              className="max-w-full h-auto rounded-lg shadow-2xl mx-auto"
              style={{ maxHeight: '110px', width: 'auto' }}
            />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? "w-6 bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"

const projects = [
  { image: "/beautiful-modern-home-with-new-dark-shingle-roof-a.jpg", label: "Residential" },
  { image: "/luxury-home-with-slate-roof-professional-photograp.jpg", label: "EPDM Roofing" },
  { image: "/commercial-building-flat-roof-professional-install.jpg", label: "Large project" },
  { image: "/spanish-style-home-with-tile-roof-beautiful-sunset.jpg", label: "Tile Roofing" },
  { image: "/stunning-modern-home-exterior-architecture-with-pr.jpg", label: "Metal Roofing" },
]

export function WorkShowcase() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (projects.length * 100))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="work" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2 text-center">Our Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight text-center text-balance">
          See our craftsmanship
        </h2>
      </div>

      {/* Infinite scrolling gallery */}
      <div className="relative">
        <div
          className="flex gap-6 transition-transform duration-[50ms] ease-linear"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {[...projects, ...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 w-80 lg:w-96 group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">{project.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

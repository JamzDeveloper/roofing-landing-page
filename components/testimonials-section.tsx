"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely incredible work. They transformed our home with a beautiful new roof in just two days.",
    rating: 5,
  },
  {
    name: "Michael J.",
    text: "The AI quote tool was spot-on. Professional team, zero surprises. Highly recommend.",
    rating: 5,
  },
  {
    name: "Jennifer C.",
    text: "Emergency repair at 2 AM during a storm. They were there within the hour. Life savers.",
    rating: 5,
  },
  {
    name: "Robert W.",
    text: "Best roofing experience I've ever had. Clean, efficient, and the quality is unmatched.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="reviews" className="py-32 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        <div className="relative h-40">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed text-balance">
                "{testimonial.text}"
              </p>
              <p className="text-muted-foreground mt-6">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "w-6 bg-foreground" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

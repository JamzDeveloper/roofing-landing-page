"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 400, suffix: "+", label: "Happy Homeowners" },
  { value: 15, suffix: "+", label: "Years Experience" },
  // { value: 4.9, suffix: "", label: "Google Rating" },
  { value: 24, suffix: "/7", label: "Emergency Service" },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Number.isInteger(value) ? Math.floor(current) : Number(current.toFixed(1)))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span>
      {typeof count === "number" && !Number.isInteger(value) ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              <p className="text-sm text-muted-foreground mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

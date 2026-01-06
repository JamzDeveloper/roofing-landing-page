"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight text-balance">
              Let's start your project
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Get a free estimate within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <a href="tel:+18159049777" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="text-lg font-medium text-foreground">(815) 904-9777</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-medium text-foreground">Rockford, Illinois</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 rounded-xl bg-secondary border-0 px-5"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 rounded-xl bg-secondary border-0 px-5"
                  required
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 rounded-xl bg-secondary border-0 px-5"
                required
              />

              <Textarea
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl bg-secondary border-0 px-5 py-4 resize-none"
                required
              />

              <Button type="submit" size="lg" className="w-full h-14 rounded-xl gap-2">
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

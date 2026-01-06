import { Star } from "lucide-react"

interface Testimonial {
  name: string
  text: string
  rating: number
  avatar: string
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[]
}

export function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-16 text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-secondary/50 border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

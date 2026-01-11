import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceIncludes } from "@/components/service-includes"
import { ServiceProjects } from "@/components/service-projects"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceCTA } from "@/components/service-cta"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { Zap, FileText, Phone, CheckCircle } from "lucide-react"

const includes = [
  {
    icon: Zap,
    title: "24/7 Emergency Response",
    description: "Immediate tarping and emergency repairs available anytime",
  },
  {
    icon: FileText,
    title: "Insurance Assistance",
    description: "Complete documentation and direct insurance company communication",
  },
  {
    icon: Phone,
    title: "Direct Claims Support",
    description: "We work directly with adjusters to ensure fair settlements",
  },
  {
    icon: CheckCircle,
    title: "Complete Restoration",
    description: "From emergency repairs to full replacement, we handle it all",
  },
]

const projects = [
  {
    image: "/storm-damaged-roof-repair.jpg",
    title: "Hail Damage Restoration",
    description: "Full roof replacement after severe hail storm",
  },
  {
    image: "/emergency-roof-repair-after-storm-damage-professio.jpg",
    title: "Emergency Storm Repair",
    description: "Immediate response and temporary weatherproofing",
  },
  {
    image: "/roof-repair-worker-fixing-shingles.jpg",
    title: "Wind Damage Repair",
    description: "Replaced torn shingles and reinforced vulnerable areas",
  },
]

const testimonials = [
  {
    name: "Jennifer C.",
    text: "Emergency repair at 2 AM during a storm. They were there within the hour and stopped the leak immediately. Life savers.",
    rating: 5,
    avatar: "/professional-asian-woman-headshot.jpg",
  },
  {
    name: "Robert W.",
    text: "They handled everything with our insurance company. We got a new roof without any hassle or stress. Incredible service.",
    rating: 5,
    avatar: "/professional-man-headshot-friendly.jpg",
  },
]

export default function StormDamagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        title="Storm Damage"
        subtitle="24/7 Emergency response."
        description="When disaster strikes, we're here. Insurance claim assistance and rapid repairs to restore your peace of mind. Our emergency response team is available around the clock to secure your property, prevent further damage, and begin the restoration process immediately."
        image="/emergency-roof-repair-after-storm-damage-professio.jpg"
        ctaText="Call Emergency Line"
        ctaVariant="destructive"
      />
      <ServiceIncludes title="Emergency Services" items={includes} />
      <ServiceProjects title="Storm Recovery Projects" projects={projects} />
      {/* <ServiceTestimonials testimonials={testimonials} /> */}
      <ServiceCTA emergency />
      <Footer />
      <AIChatWidget />
    </main>
  )
}

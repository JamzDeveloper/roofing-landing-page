import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceIncludes } from "@/components/service-includes"
import { ServiceProjects } from "@/components/service-projects"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceCTA } from "@/components/service-cta"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { Wrench, Shield, Clock, FileCheck } from "lucide-react"

const includes = [
  {
    icon: Wrench,
    title: "Complete Assessment",
    description: "Thorough inspection of damage and underlying issues",
  },
  {
    icon: Shield,
    title: "Quality Materials",
    description: "Premium materials that match your existing roof perfectly",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs completed within 1-2 days",
  },
  {
    icon: FileCheck,
    title: "Warranty Included",
    description: "5-year workmanship warranty on all repairs",
  },
]

const projects = [
  {
    image: "/roof-repair-worker-fixing-shingles.jpg",
    title: "Shingle Replacement",
    description: "Replaced 15 damaged shingles after storm",
  },
  {
    image: "/storm-damaged-roof-repair.jpg",
    title: "Storm Damage Repair",
    description: "Complete section rebuild after hail damage",
  },
  {
    image: "/roof-inspector-examining-shingles.jpg",
    title: "Leak Detection & Fix",
    description: "Identified and repaired hidden leak source",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    text: "They fixed our leaking roof in just one day. No more water stains on the ceiling! Professional and thorough.",
    rating: 5,
    avatar: "/avatar-1.png",
  },
  {
    name: "Robert W.",
    text: "After the storm damaged our roof, they responded within hours. Insurance claim was handled smoothly. Highly recommend.",
    rating: 5,
    avatar: "/professional-man-headshot-friendly.jpg",
  },
]

export default function RoofRepairPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        title="Roof Repair"
        subtitle="Fast. Reliable. Guaranteed."
        description="From minor leaks to major storm damage, our expert team delivers lasting repairs that protect your home. We understand that roof damage needs immediate attention, which is why we offer rapid response times and comprehensive solutions that address both the symptoms and root causes."
        image="/professional-roofer-repairing-shingles-close-up-de.jpg"
        ctaText="Get Free Repair Quote"
      />
      <ServiceIncludes title="What's Included" items={includes} />
      <ServiceProjects title="Recent Repair Projects" projects={projects} />
      <ServiceTestimonials testimonials={testimonials} />
      <ServiceCTA />
      <Footer />
      <AIChatWidget />
    </main>
  )
}

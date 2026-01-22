import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceIncludes } from "@/components/service-includes"
import { ServiceProjects } from "@/components/service-projects"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceCTA } from "@/components/service-cta"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { Camera, FileText, Smartphone, Clock } from "lucide-react"

const includes = [
  {
    icon: Camera,
    title: "Drone Inspection",
    description: "High-resolution aerial photography and thermal imaging",
  },
  {
    icon: FileText,
    title: "Detailed Report",
    description: "Comprehensive 30+ page report with photos and recommendations",
  },
  {
    icon: Smartphone,
    title: "AI-Powered Analysis",
    description: "Instant damage detection and cost estimates",
  },
  {
    icon: Clock,
    title: "Same-Day Results",
    description: "Receive your complete inspection report within hours",
  },
]

const projects = [
  {
    image: "/roof-inspector-examining-shingles.jpg",
    title: "Pre-Purchase Inspection",
    description: "Comprehensive assessment for home buyer",
  },
  {
    image: "/professional-roof-inspector-examining-shingles-wit.jpg",
    title: "Insurance Claim Inspection",
    description: "Detailed damage documentation for claim filing",
  },
  {
    image: "/storm-damaged-roof-repair.jpg",
    title: "Maintenance Inspection",
    description: "Annual preventive inspection with minor repairs",
  },
]

const testimonials = [
  {
    name: "Michael J.",
    text: "The AI quote tool was spot-on. The inspection was thorough and the report helped us avoid a bad home purchase. Professional and detailed.",
    rating: 5,
    avatar: "/professional-man-headshot-friendly.jpg",
  },
  {
    name: "Sarah M.",
    text: "I had no idea my roof had so many issues. The drone inspection caught problems I couldn't see from the ground. Saved me thousands in future repairs.",
    rating: 5,
    avatar: "/avatar-1.png",
  },
]

export default function InspectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        title="Roof Inspections"
        subtitle="Know before it's too late."
        description="Comprehensive roof assessments with detailed reports. AI-powered analysis for accurate, instant estimates. Whether you're buying a home, filing an insurance claim, or maintaining your property, our advanced inspection technology provides the insights you need to make informed decisions."
        image="/images/roofing-service2.png"
        ctaText="Schedule Inspection"
        ctaLink="/#contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/#work"
      />
      <ServiceIncludes title="Inspection Features" items={includes} />
      <ServiceProjects title="Recent Inspections" projects={projects} />
      <ServiceTestimonials testimonials={testimonials} />
      <ServiceCTA />
      <Footer />
      <AIChatWidget />
    </main>
  )
}

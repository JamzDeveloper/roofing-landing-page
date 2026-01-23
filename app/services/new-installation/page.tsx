import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceIncludes } from "@/components/service-includes"
import { ServiceProjects } from "@/components/service-projects"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceCTA } from "@/components/service-cta"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { Home, Award, Users, CalendarCheck } from "lucide-react"

const includes = [
  {
    icon: Home,
    title: "Premium Materials",
    description: "Top-tier shingles, underlayment, and flashing systems",
  },
  {
    icon: Award,
    title: "Expert Installation",
    description: "Certified installers with 15+ years experience",
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Dedicated coordinator from start to finish",
  },
  {
    icon: CalendarCheck,
    title: "Lifetime Warranty",
    description: "50-year material warranty + 10-year workmanship",
  },
]

const projects = [
  {
    image: "/new-roof-installation-modern-home.jpg",
    title: "Modern Home Installation",
    description: "Complete tear-off and new architectural shingles",
  },
  {
    image: "/beautiful-modern-home-with-new-dark-shingle-roof-a.jpg",
    title: "Luxury Residential",
    description: "Premium designer shingles with custom ridge vents",
  },
  {
    image: "/farmhouse-with-metal-roof-modern-rustic-style.jpg",
    title: "Metal Roof Installation",
    description: "Standing seam metal roof for modern farmhouse",
  },
]

const testimonials = [
  {
    name: "Michael J.",
    text: "Our new roof looks absolutely stunning. The team was professional, clean, and finished in 3 days. Worth every penny.",
    rating: 5,
    avatar: "/professional-man-headshot-friendly.jpg",
  },
  {
    name: "Jennifer C.",
    text: "From quote to completion, the experience was flawless. The AI estimate was accurate and the quality exceeded expectations.",
    rating: 5,
    avatar: "/professional-asian-woman-headshot.jpg",
  },
]

export default function NewInstallationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        title="New Installation"
        subtitle="Built to last a lifetime."
        description="Premium materials meet expert craftsmanship. Every roof we install is backed by our comprehensive warranty. Whether you're building new or replacing an old roof, we deliver installations that enhance your home's value, curb appeal, and protection for decades to come."
        image="/brand-new-beautiful-asphalt-shingle-roof-installat.jpg"
        ctaText="Get Installation Quote"
        ctaLink="/#contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/#work"
      />
      <ServiceIncludes title="Complete Installation Package" items={includes} />
      <ServiceProjects title="Recent Installations" projects={projects} />
      {/* <ServiceTestimonials testimonials={testimonials} /> */}
      <ServiceCTA />
      <Footer />
      <AIChatWidget />
    </main>
  )
}

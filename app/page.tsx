import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { WorkShowcase } from "@/components/work-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AIChatWidget } from "@/components/ai-chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <WorkShowcase />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      {/* <AIChatWidget /> */}
      <Footer />
    </main>
  )
}

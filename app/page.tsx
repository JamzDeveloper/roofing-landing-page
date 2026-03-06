import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { PreviewCardsSection } from "@/components/preview-cards"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <PreviewCardsSection />
      <Footer />
    </main>
  )
}

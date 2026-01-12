import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Areas We Serve | Roofing Services in Rockford, IL & Surrounding Areas",
  description:
    "ZPR Roofing serves Rockford, Loves Park, Machesney Park, Belvidere, and surrounding Northern Illinois areas. Professional roofing services near you.",
  openGraph: {
    title: "Roofing Services in Rockford & Northern Illinois | ZPR Roofing",
    description: "Serving 50+ communities across Northern Illinois with professional roofing services.",
  },
}

export default function AreasWeServePage() {
  const serviceAreas = [
    {
      city: "Rockford",
      county: "Winnebago County",
      description: "Our headquarters and primary service area. Same-day emergency services available.",
      projects: "800+",
    },
    {
      city: "Loves Park",
      county: "Winnebago County",
      description: "Serving residential and properties throughout Loves Park.",
      projects: "350+",
    },
    {
      city: "Machesney Park",
      county: "Winnebago County",
      description: "Full-service roofing solutions for Machesney Park homeowners.",
      projects: "280+",
    },
    {
      city: "Belvidere",
      county: "Boone County",
      description: "Quality roofing services for Belvidere and surrounding Boone County areas.",
      projects: "200+",
    },
    {
      city: "Cherry Valley",
      county: "Winnebago County",
      description: "Trusted roofing contractor for Cherry Valley residents.",
      projects: "150+",
    },
    {
      city: "Roscoe",
      county: "Winnebago County",
      description: "Professional roofing installations and repairs in Roscoe.",
      projects: "120+",
    },
    {
      city: "Rockton",
      county: "Winnebago County",
      description: "Comprehensive roofing services for Rockton homes and businesses.",
      projects: "110+",
    },
    {
      city: "Byron",
      county: "Ogle County",
      description: "Expert roofing solutions for Byron and surrounding Ogle County.",
      projects: "90+",
    },
  ]

  const additionalAreas = [
    "South Beloit",
    "Poplar Grove",
    "Caledonia",
    "Stillman Valley",
    "Oregon",
    "Mount Morris",
    "Polo",
    "Dixon",
    "Sterling",
    "Freeport",
    "Pecatonica",
    "Winnebago",
    "Durand",
    "Davis Junction",
    "Lindenwood",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <MapPin className="w-3.5 h-3.5" />
            Serving Northern Illinois
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            Professional Roofing Services Across Northern Illinois
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            ZPR Roofing proudly serves Rockford and over 50 communities throughout Winnebago, Boone, Ogle, and
            surrounding counties.
          </p>
          <Button size="lg" className="rounded-full">
            Get Free Estimate
          </Button>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-4">
              Primary Service Areas
            </h2>
            <p className="text-muted-foreground">Communities where we've completed hundreds of successful projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="p-6 rounded-2xl bg-secondary/50 backdrop-blur border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{area.city}</h3>
                    <p className="text-xs text-muted-foreground">{area.county}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">{area.projects}</p>
                    <p className="text-xs text-muted-foreground">projects</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-4">
              Additional Service Areas
            </h2>
            <p className="text-muted-foreground">We also serve these communities and surrounding areas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalAreas.map((area, index) => (
              <div key={index} className="p-4 rounded-xl bg-background border border-border text-center">
                <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Don't see your area listed?{" "}
              <Link href="/#contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              to check if we serve your location.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6">
                Why Northern Illinois Homeowners Choose ZPR Roofing
              </h2>
              <div className="space-y-4">
                {[
                  "Licensed and insured in all service areas",
                  "Same-day emergency services available",
                  "Free estimates with no obligation",
                  "Local team with deep community roots",
                  "Familiar with local building codes and weather patterns",
                  "Fast response times throughout our service area",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
                Get Your Free Estimate
              </h3>
              <p className="text-muted-foreground mb-6">
                Serving your area with professional roofing services. Contact us today for a free, no-obligation
                estimate.
              </p>
              <div className="space-y-3">
                <Link href="/#contact">
                  <Button size="lg" className="w-full rounded-full">
                    Request Free Estimate
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full rounded-full bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  (815) 904-9777
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

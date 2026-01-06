import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Award, Users, TrendingUp, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ZPR Roofing | Licensed & Insured Roofing Company in Rockford, IL",
  description:
    "Learn about ZPR Roofing - Rockford's trusted roofing company since 2010. Licensed, insured, and committed to excellence in every project.",
  openGraph: {
    title: "About ZPR Roofing | Licensed & Insured Roofing Company",
    description: "Family-owned roofing company serving Rockford, IL with quality craftsmanship and honest service.",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Licensed & Insured
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            Building Trust, One Roof at a Time
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Since 2010, ZPR Roofing has been Rockford's premier roofing contractor, delivering exceptional quality and
            service to homeowners and businesses across Northern Illinois.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ZPR Roofing was founded by three friends who shared a vision: to bring honest, high-quality roofing
                  services to the Rockford community. What started as a small team has grown into one of the most
                  trusted names in Northern Illinois roofing.
                </p>
                <p>
                  Over the past decade, we've completed over 400 successful projects, from simple repairs to complete
                  roof replacements. Our commitment to quality craftsmanship, transparent pricing, and customer
                  satisfaction has earned us hundreds of 5-star reviews and countless referrals.
                </p>
                <p>
                  Today, we're proud to serve families and businesses throughout Rockford, Loves Park, Machesney Park,
                  and surrounding areas with the same dedication and integrity that defined our first day in business.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/modern-house-with-beautiful-new-roof-aerial-view-s.jpg"
                alt="ZPR Roofing team working on a project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              Our values guide every decision we make and every roof we install.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Licensed & Insured",
                description: "Fully licensed, bonded, and insured for your protection and peace of mind.",
              },
              {
                icon: Award,
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive warranties on all installations.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with years of experience in all roofing systems.",
              },
              {
                icon: TrendingUp,
                title: "Transparent Pricing",
                description: "No hidden fees or surprise charges. Clear quotes from start to finish.",
              },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-secondary/50 backdrop-blur">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-muted-foreground">Trusted and verified by industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "GAF Master Elite Contractor",
              "Owens Corning Preferred Contractor",
              "CertainTeed SELECT ShingleMaster",
              "Better Business Bureau A+ Rating",
              "NRCA Member",
              "Illinois Licensed Contractor",
              "Workers Compensation Insured",
              "General Liability Insured",
            ].map((cert, index) => (
              <div key={index} className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the ZPR Roofing difference. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="rounded-full">
                Get Free Estimate
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              (815) 549-3068
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

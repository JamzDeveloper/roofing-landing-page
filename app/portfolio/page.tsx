import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { WorkShowcase } from "@/components/work-showcase";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Roofing Projects & Completed Work | ZPR Roofing Portfolio",
  description:
    "View our portfolio of completed roofing projects in Rockford, IL. Quality craftsmanship on residential and commercial roofs.",
  openGraph: {
    title: "Roofing Portfolio | ZPR Roofing",
    description:
      "Browse our gallery of completed roofing projects and see our quality work.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            Our Roofing Projects & Completed Work
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Explore our gallery of completed roofing projects throughout Rockford and Northern Illinois. 
            From residential roof replacements to commercial installations, see the quality craftsmanship 
            that has earned us the trust of hundreds of homeowners and businesses.
          </p>
        </div>
      </section>

      {/* Reused WorkShowcase Component */}
      <WorkShowcase />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us bring the same quality and attention to detail to your roofing project. 
            Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                <ArrowRight className="w-4 h-4 mr-2" />
                Get Free Estimate
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              (815) 904-9777
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

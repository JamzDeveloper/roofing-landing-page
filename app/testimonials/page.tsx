import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Phone, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | ZPR Roofing",
  description:
    "Read reviews from satisfied customers in Rockford, IL. See why homeowners trust ZPR Roofing for their roofing needs.",
  openGraph: {
    title: "Customer Testimonials | ZPR Roofing",
    description:
      "Real reviews from real customers about our roofing services.",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Customer Reviews
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            Customer Reviews & Testimonials
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied customers throughout 
            Rockford and Northern Illinois have to say about their experience with ZPR Roofing. 
            Quality work and exceptional service are what set us apart.
          </p>
        </div>
      </section>

      {/* Reused TestimonialsSection Component */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the same quality service and craftsmanship that earned us these reviews. 
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

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

interface ServiceCTAProps {
  emergency?: boolean
}

export function ServiceCTA({ emergency = false }: ServiceCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-background tracking-tight mb-6 text-balance">
          {emergency ? "Need Emergency Help?" : "Ready to Get Started?"}
        </h2>
        <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {emergency
            ? "Our emergency response team is available 24/7. Call now for immediate assistance."
            : "Get a free, instant quote using our AI-powered tool or speak with one of our roofing experts today."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {emergency ? (
            <>
              <Link href="tel:+18159049777">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg gap-2 bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5" />
                  Call Emergency Line
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-background/30 text-background hover:bg-background/10 bg-transparent"
                >
                  File Insurance Claim
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg gap-2 bg-background text-foreground hover:bg-background/90"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="tel:+18159049777">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-background/30 text-background hover:bg-background/10 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

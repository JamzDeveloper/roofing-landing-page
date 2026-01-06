import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Phone } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="font-[family-name:var(--font-display)] text-9xl md:text-[12rem] font-bold text-primary/20">
              404
            </h1>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="rounded-full">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "Our Services", href: "/#services" },
                { label: "Recent Work", href: "/#work" },
                { label: "About Us", href: "/about" },
                { label: "Service Areas", href: "/areas-we-serve" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

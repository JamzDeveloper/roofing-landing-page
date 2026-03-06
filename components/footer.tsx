import Link from "next/link";
import { BBBBadge } from "@/components/bbb-badge";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground"
            >
              ZPR Roofing
            </Link>
            <p className="text-xs text-muted-foreground mt-2">
              Proudly serving Rockford and Northern Illinois with professional
              roofing services. Established in 2020 and built on over 15 years
              of trusted roofing experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Services</h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Roof Repair", href: "/services/roof-repair" },
                {
                  label: "New Installation",
                  href: "/services/new-installation",
                },
                { label: "Storm Damage", href: "/services/storm-damage" },
                { label: "Inspections", href: "/services/inspections" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Service Areas", href: "/areas-we-serve" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Rockford, IL</p>
              <a
                href="tel:+18159049777"
                className="hover:text-foreground transition-colors block"
              >
                (815) 904-9777
              </a>
              <a
                href="mailto:info@zproofing.com"
                className="hover:text-foreground transition-colors block"
              >
                info@zproofing.com
              </a>
              <div className="pt-4">
                <BBBBadge size="large" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>© 2025 ZPR Roofing. All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

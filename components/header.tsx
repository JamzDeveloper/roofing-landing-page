"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Solo agregar el listener si el menú no está abierto
    if (!isMenuOpen) {
      window.addEventListener("scroll", handleScroll)
    }
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/zpr-logo.svg" alt="ZPR Roofing" width={100} height={100} className="w-20 h-20" priority />
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-foreground">
              ZPR Roofing
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "/#services" },
              { label: "Work", href: "/#work" },
              { label: "About", href: "/about" },
              { label: "Areas", href: "/areas-we-serve" },
              { label: "Contact", href: "/#contact" },
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

          <div className="hidden md:flex items-center gap-3">
            <Link href="/#contact">
              <Button size="sm" className="h-8 px-4 text-xs rounded-full">
                Book Inspection Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors relative" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span 
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ease-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border z-[70] md:hidden transform transition-all duration-300 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <Image src="/zpr-logo.svg" alt="ZPR Roofing" width={32} height={32} className="w-8 h-8" />
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                    ZPR Roofing
                  </span>
                </div>
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col h-full">
                <nav className="flex-1 px-6 py-6">
                  <div className="space-y-1">
                    {[
                      { label: "Services", href: "/#services" },
                      { label: "Work", href: "/#work" },
                      { label: "About", href: "/about" },
                      { label: "Service Areas", href: "/areas-we-serve" },
                      { label: "FAQ", href: "/faq" },
                      { label: "Contact", href: "/#contact" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  
                  {/* CTA Button moved up */}
                  <div className="mt-8 px-4">
                    <Link href="/#contact" onClick={closeMenu}>
                      <Button size="lg" className="w-full rounded-xl h-12 text-base font-medium">
                        Book Inspection Now
                      </Button>
                    </Link>
                  </div>
                </nav>

                {/* Menu Footer - simplified */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-center gap-4">
                    <a 
                      href="tel:+18159049777" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (815) 904-9777
                    </a>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-sm text-muted-foreground">
                      Licensed & Insured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

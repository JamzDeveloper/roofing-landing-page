"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

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
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "light" ? (
                <Moon className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Sun className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <Link href="/#contact">
              <Button size="sm" className="h-8 px-4 text-xs rounded-full">
                Book Inspection Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "light" ? (
                <Moon className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Sun className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <button className="p-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-4">
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
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/#contact">
                <Button size="sm" className="w-full mt-2 rounded-full">
                  Book Inspection Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

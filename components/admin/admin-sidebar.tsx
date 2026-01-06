"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  HardHat,
  Package,
  DollarSign,
  MessageSquare,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Clientes", href: "/admin/clientes", icon: Users },
  { name: "Cotizaciones", href: "/admin/cotizaciones", icon: FileText },
  { name: "Proyectos", href: "/admin/proyectos", icon: Briefcase },
  { name: "Trabajadores", href: "/admin/trabajadores", icon: HardHat },
  { name: "Inventario", href: "/admin/inventario", icon: Package },
  { name: "Finanzas", href: "/admin/finanzas", icon: DollarSign },
  { name: "Leads", href: "/admin/leads", icon: MessageSquare },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-display font-bold text-primary">ZPR Roofing</h2>
            <p className="text-sm text-muted-foreground">Admin Panel</p>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/">Ver sitio web</Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

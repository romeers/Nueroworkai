"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import { navigationItems } from "@/config/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const pathname = usePathname()
  const logoImage = "/neuroworkai-logo.png"

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setShowStickyCTA(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
            aria-label="NeuroWorkAI - Ir a inicio"
          >
            <div className="flex items-center">
              <SafeImage
                src={logoImage}
                fallbackSrc="/abstract-brain-network.png"
                alt="NeuroWorkAI Logo"
                width={180}
                height={50}
                priority
                className="w-[120px] h-auto rounded-lg"
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors",
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-primary"
                  : "text-secondary hover:text-primary",
              )}
              aria-label={item.ariaLabel || item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/top-herramientas-ia">Top Herramientas IA</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto pb-6">
          <div className="flex items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="NeuroWorkAI - Ir a inicio"
            >
              <SafeImage
                src={logoImage}
                fallbackSrc="/abstract-brain-network.png"
                alt="NeuroWorkAI Logo"
                width={180}
                height={50}
                className="w-[120px] h-auto rounded-lg"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <span className="sr-only">Cerrar menú</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile navigation items */}
          <div className="mt-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                      pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                        ? "text-primary"
                        : "text-secondary hover:bg-gray-50",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={item.ariaLabel || item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="py-6">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/top-herramientas-ia">Mejores Herramientas IA</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div
        className={cn(
          "fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-fit transform items-center justify-center transition-all duration-300",
          showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        )}
        aria-hidden={!showStickyCTA}
      >
        <Button asChild className="rounded-full bg-primary px-6 py-6 text-base shadow-lg hover:bg-primary/90">
          <Link href="/top-herramientas-ia">Descubrir Mejores Herramientas IA</Link>
        </Button>
      </div>
    </header>
  )
}

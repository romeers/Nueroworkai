"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn, throttle } from "@/lib/optimization-utils"
import SafeImage from "./safe-image"
import MobileNavDrawer from "./mobile-nav-drawer"

// Definición de enlaces de navegación
const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Herramientas IA", href: "/herramientas-ia", ariaLabel: "Ir a Herramientas IA" },
  { name: "Recursos", href: "/recursos", ariaLabel: "Ir a Recursos" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const pathname = usePathname()
  const logoImage =
    "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/logo%20%20texto%20transparente-eLlvV6wmzCjfkUskDOg0X8CielyUqJ.png"

  const headerRef = useRef<HTMLElement>(null)
  const prevScrollY = useRef(0)
  const ticking = useRef(false)

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 10)
      setShowStickyCTA(currentScrollY > 300)
      prevScrollY.current = currentScrollY
    }, 100),
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 md:py-5 lg:px-8"
        aria-label="Navegación principal"
      >
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
                width={150}
                height={50}
                priority
                className="w-[150px] h-auto"
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menú principal"
            className="text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 h-12 w-12"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Abrir menú principal</span>
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors relative group",
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-primary"
                  : "text-secondary hover:text-primary",
              )}
              aria-label={item.ariaLabel || item.name}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/top-herramientas-ia" aria-label="Ver top herramientas IA">
              Top Herramientas IA
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileNavDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Sticky CTA - optimized for performance */}
      {showStickyCTA && (
        <div
          className="fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-fit transform items-center justify-center transition-all duration-300 translate-y-0 opacity-100"
          aria-hidden="false"
        >
          <Button asChild className="rounded-full bg-primary px-6 py-3 h-14 text-base shadow-lg hover:bg-primary/90">
            <Link href="/top-herramientas-ia" aria-label="Descubrir mejores herramientas IA" tabIndex={0}>
              Descubrir Mejores Herramientas IA
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}

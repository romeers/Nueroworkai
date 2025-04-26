"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import MobileNavDrawer from "./mobile-nav-drawer"
import LanguageSwitcher from "./language-switcher"
import { useTranslations } from "next-intl"

export default function Header() {
  const t = useTranslations("common")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const pathname = usePathname()
  const logoImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-3O92ImJsQbR0qsSBebSzRCV6dX8udd.png"

  // Update the navigation array with translations
  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.tools"), href: "/herramientas-ia", ariaLabel: t("navigation.tools") },
    { name: t("navigation.resources"), href: "/recursos", ariaLabel: t("navigation.resources") },
    { name: t("navigation.about"), href: "/sobre-nosotros" },
  ]

  const headerRef = useRef<HTMLElement>(null)
  const prevScrollY = useRef(0)
  const ticking = useRef(false)

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        setScrolled(currentScrollY > 10)
        setShowStickyCTA(currentScrollY > 300)
        prevScrollY.current = currentScrollY
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Efecto para manejar el bloqueo del scroll cuando el menú móvil está abierto
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
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-sm",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
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
                width={120}
                height={40}
                priority
                className="w-[120px] h-auto rounded-lg"
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="minimal" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menú principal"
            className="text-secondary"
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

        {/* CTA button and language switcher */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher />
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/top-herramientas-ia" aria-label={t("cta.topTools")}>
              {t("cta.topTools")}
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && <MobileNavDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}

      {/* Sticky CTA - optimized for performance */}
      {showStickyCTA && (
        <div
          className="fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-fit transform items-center justify-center transition-all duration-300 translate-y-0 opacity-100"
          aria-hidden="false"
        >
          <Button asChild className="rounded-full bg-primary px-6 py-6 text-base shadow-lg hover:bg-primary/90">
            <Link href="/top-herramientas-ia" aria-label={t("cta.discoverTools")} tabIndex={0}>
              {t("cta.discoverTools")}
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}

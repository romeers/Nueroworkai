"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import MobileNavDrawer from "./mobile-nav-drawer"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setIsScrolled(currentScrollY > 10)
  }, [])

  useEffect(() => {
    // Throttled scroll event listener
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [handleScroll])

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [pathname])

  // Efecto para manejar el bloqueo del scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileNavOpen])

  // Definir los elementos de navegación con traducciones
  const navigation = [
    { name: t("home"), href: "/", ariaLabel: t("home") },
    { name: t("tools"), href: "/herramientas-ia", ariaLabel: t("tools") },
    { name: t("resources"), href: "/recursos", ariaLabel: t("resources") },
    { name: t("about"), href: "/sobre-nosotros", ariaLabel: t("about") },
    { name: t("contact"), href: "/contacto", ariaLabel: t("contact") },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <SafeImage
                src="/logo.png"
                alt="NeuroWorkAI Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="ml-2 text-xl font-bold text-secondary">NeuroWorkAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary",
                )}
                aria-label={item.ariaLabel}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4">
              <LanguageSwitcher variant="minimal" />
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/kit-digital">{t("downloadFree")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher variant="minimal" />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <span className="sr-only">{isMobileNavOpen ? t("closeMenu") : t("openMenu")}</span>
              {isMobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  )
}

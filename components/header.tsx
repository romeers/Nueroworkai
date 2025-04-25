"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
// Import the centralized navigation configuration
import { mainNavigation } from "@/lib/navigation"

// Replace the existing navigation array with the imported configuration
// Remove this line:
// const navigation = [ ... ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const logoImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-3O92ImJsQbR0qsSBebSzRCV6dX8udd.png"
  // Add state for mobile submenu
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null)

  // Ref para detectar clics fuera del dropdown
  const dropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setShowStickyCTA(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)

    // Manejar clics fuera del dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    // Manejar tecla Escape para cerrar menú móvil
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [])

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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Add function to toggle mobile submenu
  const toggleMobileSubmenu = (name: string) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === name ? null : name)
  }

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
                width={180}
                height={50}
                priority
                className="w-[120px] h-auto rounded-lg"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menú principal"
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Update the navigation mapping in the desktop menu section to use mainNavigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {mainNavigation.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative group" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={cn(
                    "text-sm font-semibold leading-6 transition-colors flex items-center gap-1",
                    activeDropdown === item.name || pathname.startsWith(item.href)
                      ? "text-primary"
                      : "text-secondary hover:text-primary",
                  )}
                  aria-expanded={activeDropdown === item.name}
                  aria-controls={`dropdown-${item.name}`}
                >
                  {item.name}
                  <svg
                    className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === item.name && (
                  <div
                    id={`dropdown-${item.name}`}
                    className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`dropdown-button-${item.name}`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/top-herramientas-ia" aria-label="Ver top herramientas IA">
              Top Herramientas IA
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - mejorado para accesibilidad y usabilidad */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-25"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-heading"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center transition-opacity duration-200 hover:opacity-80"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="NeuroWorkAI - Ir a inicio"
              >
                <div className="flex items-center">
                  <SafeImage
                    src={logoImage}
                    fallbackSrc="/abstract-brain-network.png"
                    alt="NeuroWorkAI Logo"
                    width={180}
                    height={50}
                    className="w-[120px] h-auto rounded-lg"
                  />
                </div>
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
            {/* Also update the mobile menu section to use the same navigation structure */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <h2 id="mobile-menu-heading" className="sr-only">
                    Menú de navegación
                  </h2>
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div className="relative">
                          <button
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className={cn(
                              "-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7",
                              pathname.startsWith(item.href) ? "text-primary" : "text-secondary hover:bg-gray-50",
                            )}
                            aria-expanded={mobileActiveSubmenu === item.name}
                            aria-controls={`mobile-dropdown-${item.name}`}
                          >
                            {item.name}
                            <svg
                              className={`h-4 w-4 transition-transform ${mobileActiveSubmenu === item.name ? "rotate-180" : ""}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {mobileActiveSubmenu === item.name && (
                            <div id={`mobile-dropdown-${item.name}`} className="ml-4 mt-1 space-y-1">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm",
                                    pathname === subItem.href
                                      ? "bg-primary/10 text-primary"
                                      : "text-gray-600 hover:bg-gray-50",
                                  )}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                            pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                              ? "text-primary"
                              : "text-secondary hover:bg-gray-50",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-label={item.ariaLabel || item.name}
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky CTA - mejorado para accesibilidad */}
      <div
        className={cn(
          "fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-fit transform items-center justify-center transition-all duration-300",
          showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
        )}
        aria-hidden={!showStickyCTA}
      >
        <Button asChild className="rounded-full bg-primary px-6 py-6 text-base shadow-lg hover:bg-primary/90">
          <Link
            href="/top-herramientas-ia"
            aria-label="Descubrir mejores herramientas IA"
            tabIndex={showStickyCTA ? 0 : -1}
          >
            Descubrir Mejores Herramientas IA
          </Link>
        </Button>
      </div>
    </header>
  )
}

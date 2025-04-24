"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Estructura de navegación optimizada basada en categorías
const navigation = [
  {
    name: "Herramientas",
    href: "/herramientas",
    submenu: [
      { name: "Escritura IA", href: "/herramientas/categoria/escritura-ia" },
      { name: "Automatización", href: "/herramientas/categoria/automatizacion" },
      { name: "Gestión de Tareas", href: "/herramientas/categoria/gestion-tareas" },
      { name: "Reuniones", href: "/herramientas/categoria/reuniones" },
      { name: "Comunicación", href: "/herramientas/categoria/comunicacion" },
      { name: "Ver todas", href: "/herramientas" },
    ],
  },
  {
    name: "Comparativas",
    href: "/comparativas",
    submenu: [
      { name: "Por Categoría", href: "/comparativas/por-categoria" },
      { name: "Herramientas Populares", href: "/comparativas/populares" },
      { name: "Comparador Personalizado", href: "/comparativas/personalizado" },
    ],
  },
  {
    name: "Guías y Recursos",
    href: "/guias-recursos",
    submenu: [
      { name: "Guías de Uso", href: "/guias-recursos/guias-uso" },
      { name: "Plantillas", href: "/guias-recursos/plantillas" },
      { name: "Recursos Gratuitos", href: "/guias-recursos/recursos-gratuitos" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const logoImage = "/logo.png"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setShowStickyCTA(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NeuroWorkAI</span>
            <SafeImage
              src={logoImage}
              fallbackSrc="/abstract-brain-network.png"
              alt="NeuroWorkAI Logo"
              width={180}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center text-sm font-semibold leading-6 transition-colors",
                        pathname.startsWith(item.href) ? "text-primary" : "text-secondary hover:text-primary",
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "w-full",
                            pathname === subItem.href ? "text-primary" : "text-secondary hover:text-primary",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold leading-6 transition-colors",
                    pathname === item.href ? "text-primary" : "text-secondary hover:text-primary",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/herramientas/mejores">Mejores Herramientas IA</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">NeuroWorkAI</span>
                <SafeImage
                  src={logoImage}
                  fallbackSrc="/abstract-brain-network.png"
                  alt="NeuroWorkAI Logo"
                  width={180}
                  height={50}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={cn(
                              "-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7",
                              pathname.startsWith(item.href) ? "text-primary" : "text-secondary hover:bg-gray-50",
                            )}
                          >
                            {item.name}
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform",
                                activeDropdown === item.name ? "rotate-180" : "",
                              )}
                            />
                          </button>
                          {activeDropdown === item.name && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={cn(
                                    "block rounded-lg px-3 py-2 text-sm font-medium",
                                    pathname === subItem.href ? "text-primary" : "text-secondary hover:bg-gray-50",
                                  )}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                            pathname === item.href ? "text-primary" : "text-secondary hover:bg-gray-50",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/herramientas/mejores">Mejores Herramientas IA</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky CTA */}
      <div
        className={cn(
          "fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-fit transform items-center justify-center transition-all duration-300",
          showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        )}
      >
        <Button asChild className="rounded-full bg-primary px-6 py-6 text-base shadow-lg hover:bg-primary/90">
          <Link href="/herramientas/mejores">Descubrir Mejores Herramientas IA</Link>
        </Button>
      </div>
    </header>
  )
}

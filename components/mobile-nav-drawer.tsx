"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import SafeImage from "./safe-image"

// Estructura de navegación optimizada
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
]

export default function MobileNavDrawer() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const logoImage = "/logo.png"

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[85vw] max-w-sm p-0">
        <div className="flex flex-col h-full">
          <div className="border-b p-4">
            <Link href="/" className="flex items-center">
              <SafeImage
                src={logoImage}
                fallbackSrc="/abstract-brain-network.png"
                alt="NeuroWorkAI Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="px-2">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                          pathname.startsWith(item.href)
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 hover:bg-gray-100",
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
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
                        "block rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="border-t p-4">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/herramientas/mejores">Mejores Herramientas IA</Link>
            </Button>
            <div className="mt-4 text-xs text-gray-500 text-center">
              <Link href="/sobre-nosotros" className="text-primary hover:underline">
                Sobre Nosotros
              </Link>
              {" • "}
              <Link href="/contacto" className="text-primary hover:underline">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

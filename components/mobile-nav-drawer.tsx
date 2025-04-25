"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import SafeImage from "./safe-image"

// Update the navigation array to remove the Blog entry
const navigation = [
  { name: "Herramientas IA", href: "/herramientas-ia", ariaLabel: "Ir a Herramientas IA" }, // Elemento único, sin dropdown
  {
    name: "Recursos",
    href: "/recursos",
    submenu: [
      { name: "Guías prácticas", href: "/recursos?categoria=guias" },
      { name: "Prompts IA", href: "/recursos?categoria=prompts" },
      { name: "Automatización", href: "/recursos?categoria=automatizacion" },
      { name: "Plantillas", href: "/recursos?categoria=plantillas" },
      { name: "Análisis", href: "/recursos?categoria=analisis" },
      { name: "Tutoriales", href: "/recursos?categoria=tutoriales" },
    ],
  },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
]

export default function MobileNavDrawer() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const logoImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-3O92ImJsQbR0qsSBebSzRCV6dX8udd.png"

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
          <div className="border-b p-4 flex items-center">
            <Link
              href="/"
              className="flex items-center transition-all duration-300 hover:opacity-80 hover:scale-105"
              aria-label="NeuroWorkAI - Ir a inicio"
            >
              <SafeImage
                src={logoImage}
                fallbackSrc="/abstract-brain-network.png"
                alt="NeuroWorkAI Logo"
                width={150}
                height={40}
                className="w-[120px] h-auto rounded-xl"
              />
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="flex flex-col space-y-1">
              <div className="px-2">
                <Link
                  href="/"
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium",
                    pathname === "/" ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50",
                  )}
                >
                  Inicio
                </Link>
              </div>
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
                        pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                          ? "bg-primary/10 text-primary"
                          : "text-gray-600 hover:bg-gray-50",
                      )}
                      aria-label={item.ariaLabel || item.name}
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
              <Link href="/herramientas-ia">Mejores Herramientas IA</Link>
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

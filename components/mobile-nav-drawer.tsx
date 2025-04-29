"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"
// Import the Logo component
import { Logo } from "./logo"

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Herramientas IA", href: "/herramientas-ia", ariaLabel: "Ir a Herramientas IA" },
  { name: "Recursos", href: "/recursos", ariaLabel: "Ir a Recursos" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
]

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname()
  // Remove the logoImage constant since we're not using it anymore
  // const logoImage = "/logo-texto-transparente.png"

  const drawerRef = useRef<HTMLDivElement>(null)

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Focus trap
      const focusableElements = drawerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      if (focusableElements && focusableElements.length > 0) {
        ;(focusableElements[0] as HTMLElement).focus()
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  // Use portal to render at the document body level
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-25" aria-hidden="true" onClick={onClose}>
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
      >
        <div className="flex items-center justify-between">
          {/* Replace the SafeImage with Logo component in the Link */}
          <Link
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
            onClick={onClose}
            aria-label="NeuroWorkAI - Ir a inicio"
          >
            <div className="flex items-center">
              <Logo className="w-[120px] h-auto rounded-lg" />
            </div>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-secondary"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <span className="sr-only">Cerrar menú</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-200">
            <div className="space-y-2 py-6">
              <h2 id="mobile-menu-heading" className="sr-only">
                Menú de navegación
              </h2>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-primary"
                      : "text-secondary hover:bg-gray-50",
                  )}
                  onClick={onClose}
                  aria-label={item.ariaLabel || item.name}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button asChild className="w-full bg-primary hover:bg-primary/90" onClick={onClose}>
                <Link href="/top-herramientas-ia" aria-label="Ver mejores herramientas IA">
                  Mejores Herramientas IA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

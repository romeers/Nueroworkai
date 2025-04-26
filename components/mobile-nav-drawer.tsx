"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

// Navigation items
const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Herramientas IA", href: "/herramientas-ia" },
  { name: "Recursos", href: "/recursos" },
  { name: "Comparativas", href: "/herramientas/comparar" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
]

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      // Delay adding the event listener to prevent immediate closing
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 100)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !navRef.current) return

    const focusableElements = navRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTabKey)
    firstElement?.focus()

    return () => {
      document.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" aria-hidden="true">
      <div
        ref={navRef}
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-xs bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-secondary">Menú</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <nav className="mt-6 flex flex-col space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "py-2 text-base font-medium transition-colors",
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-primary"
                  : "text-secondary hover:text-primary",
              )}
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href="/top-herramientas-ia" onClick={onClose}>
              Top Herramientas IA
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/recursos?categoria=guias" onClick={onClose}>
              Guías y Recursos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

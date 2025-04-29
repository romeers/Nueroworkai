"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/i18n-context"
import LanguageSwitcher from "./language-switcher"

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const { t } = useI18n()
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)

  // Actualizar el array de navegación para usar traducciones
  const navigation = [
    { name: t("common.nav.home"), href: "/" },
    { name: t("common.nav.tools"), href: "/herramientas-ia" },
    { name: t("common.nav.resources"), href: "/recursos" },
    { name: t("common.nav.about"), href: "/sobre-nosotros" },
    { name: t("common.nav.contact"), href: "/contacto" },
  ]

  // Cerrar el drawer al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Manejar la tecla Escape para cerrar el drawer
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 h-full w-full max-w-xs bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-secondary">Menú</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar menú">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-6">
          <nav className="flex flex-col space-y-4">
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
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-secondary">{t("components.languageSwitcher.label")}</span>
            <LanguageSwitcher />
          </div>

          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href="/top-herramientas-ia" onClick={onClose}>
              {t("common.nav.topTools")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

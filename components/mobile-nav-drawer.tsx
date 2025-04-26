"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./language-switcher"

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const t = useTranslations("common")
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)

  // Update the navigation array with translations
  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.tools"), href: "/herramientas-ia" },
    { name: t("navigation.resources"), href: "/recursos" },
    { name: t("navigation.about"), href: "/sobre-nosotros" },
  ]

  // Close drawer when clicking outside
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

  // Close drawer when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Close drawer when changing route
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 id="mobile-menu-title" className="text-lg font-semibold">
            Menu
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="text-secondary hover:text-primary"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-primary"
                      : "text-secondary hover:text-primary",
                  )}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/top-herramientas-ia">{t("cta.topTools")}</Link>
            </Button>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

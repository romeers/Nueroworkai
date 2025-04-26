"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname()
  const { t } = useLanguage()

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close drawer when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && target.id === "mobile-nav-backdrop") {
        onClose()
      }
    }

    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [isOpen, onClose])

  // Definir los elementos de navegación con traducciones
  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("tools"), href: "/herramientas-ia" },
    { name: t("resources"), href: "/recursos" },
    { name: t("about"), href: "/sobre-nosotros" },
    { name: t("contact"), href: "/contacto" },
  ]

  if (!isOpen) return null

  return (
    <div
      id="mobile-nav-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
      aria-hidden="true"
    >
      <div
        className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex h-full flex-col overflow-y-auto pb-6">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              type="button"
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">{t("closeMenu")}</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 py-6">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2 text-base font-medium",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                  onClick={onClose}
                >
                  {item.name}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto px-4 space-y-4">
            <div className="mb-4">
              <LanguageSwitcher variant="flags" />
            </div>

            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/kit-digital" onClick={onClose}>
                {t("downloadFree")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

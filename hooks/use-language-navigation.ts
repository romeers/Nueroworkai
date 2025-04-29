"use client"

import { useRouter, usePathname } from "next/navigation"
import { useI18n } from "@/lib/i18n/i18n-context"
import { getAlternateRoute } from "@/lib/i18n/routes"

export function useLanguageNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useI18n()

  // Función para cambiar el idioma y navegar a la ruta equivalente
  const changeLanguage = (newLanguage: "es" | "en") => {
    if (newLanguage === language) return

    // Obtener la ruta equivalente en el nuevo idioma
    const newPath = getAlternateRoute(pathname, language)

    // Cambiar el idioma
    setLanguage(newLanguage)

    // Navegar a la nueva ruta
    router.push(newPath)
  }

  // Obtener la ruta alternativa para el meta tag alternate
  const alternateRoute = getAlternateRoute(pathname, language)

  return {
    changeLanguage,
    alternateRoute,
    currentLanguage: language,
  }
}

"use client"

import { useLanguage } from "@/contexts/language-context"
import { useCallback } from "react"

export function useTranslation() {
  const { language, t, setLanguage, formatDate, isLoading } = useLanguage()

  // Función para traducir con interpolación de variables
  const translate = useCallback(
    (key: string, variables?: Record<string, string | number>) => {
      let translation = t(key)

      if (variables) {
        Object.entries(variables).forEach(([varName, value]) => {
          translation = translation.replace(new RegExp(`{${varName}}`, "g"), String(value))
        })
      }

      return translation
    },
    [t],
  )

  return {
    language,
    t: translate,
    setLanguage,
    formatDate,
    isLoading,
  }
}

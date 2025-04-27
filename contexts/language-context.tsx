"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Tipos
type Language = "es" | "en" | "auto"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  resolvedLanguage: "es" | "en"
  translations: Record<string, string>
  t: (key: string, params?: Record<string, string | number>) => string
}

// Crear contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Props para el provider
interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: Language
  translations?: Record<string, Record<string, string>>
}

// Provider
export function LanguageProvider({ children, defaultLanguage = "auto", translations = {} }: LanguageProviderProps) {
  // Usar localStorage para persistir el idioma
  const [language, setLanguage] = useLocalStorage<Language>("language", defaultLanguage)

  // Estado para el idioma resuelto (es o en)
  const [resolvedLanguage, setResolvedLanguage] = useState<"es" | "en">("es")

  // Estado para las traducciones del idioma actual
  const [currentTranslations, setCurrentTranslations] = useState<Record<string, string>>({})

  // Efecto para resolver el idioma
  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window === "undefined") return

    // Función para resolver el idioma
    const resolveLanguage = () => {
      if (language === "auto") {
        // Usar preferencia del navegador
        const browserLang = navigator.language.split("-")[0]
        return browserLang === "en" ? "en" : "es"
      }

      return language
    }

    // Resolver idioma
    const resolved = resolveLanguage() as "es" | "en"
    setResolvedLanguage(resolved)

    // Cargar traducciones para el idioma resuelto
    setCurrentTranslations(translations[resolved] || {})
  }, [language, translations])

  // Función para traducir textos
  const t = (key: string, params?: Record<string, string | number>): string => {
    // Obtener traducción o usar la clave como fallback
    let translation = currentTranslations[key] || key

    // Reemplazar parámetros si existen
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, String(value))
      })
    }

    return translation
  }

  // Valor del contexto
  const value = {
    language,
    setLanguage,
    resolvedLanguage,
    translations: currentTranslations,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// Hook personalizado para usar el contexto
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider")
  }

  return context
}

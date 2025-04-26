"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, defaultLanguage, getTranslation, getBrowserLanguage } from "@/lib/i18n"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState(defaultLanguage)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Intentar obtener el idioma guardado en localStorage
    const savedLang = localStorage.getItem("preferredLanguage")
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang)
    } else {
      // Si no hay idioma guardado, detectar el del navegador
      const browserLang = getBrowserLanguage()
      setLanguageState(browserLang)
      localStorage.setItem("preferredLanguage", browserLang)
    }
  }, [])

  const setLanguage = (lang: string) => {
    if (translations[lang]) {
      localStorage.setItem("preferredLanguage", lang)
      setLanguageState(lang)
      // No recargamos la página aquí para permitir cambios dinámicos
    }
  }

  const t = (key: string) => getTranslation(language, key)

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

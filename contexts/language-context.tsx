"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations, defaultLanguage, getTranslation } from "@/lib/i18n"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: true,
})

export const useLanguage = () => useContext(LanguageContext)

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState(defaultLanguage)
  const [isLoading, setIsLoading] = useState(true)

  // Cargar el idioma guardado al iniciar
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("preferredLanguage")
      if (savedLang && translations[savedLang]) {
        setLanguageState(savedLang)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Función para cambiar el idioma
  const setLanguage = useCallback((lang: string) => {
    if (translations[lang]) {
      try {
        localStorage.setItem("preferredLanguage", lang)
      } catch (error) {
        console.error("Error setting localStorage:", error)
      }
      setLanguageState(lang)
    }
  }, [])

  // Función para obtener traducciones
  const t = useCallback((key: string) => getTranslation(language, key), [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isLoading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

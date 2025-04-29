"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { es } from "./translations/es"
import { en } from "./translations/en"

// Definir los idiomas disponibles
export type Language = "es" | "en"

// Definir el tipo para las traducciones
export type Translations = typeof es

// Definir el tipo para el contexto
interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations
}

// Crear el contexto
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Objeto con todas las traducciones
const translations = {
  es,
  en,
}

interface I18nProviderProps {
  children: ReactNode
  defaultLanguage?: Language
}

export function I18nProvider({ children, defaultLanguage = "es" }: I18nProviderProps) {
  // Estado para el idioma actual
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  // Efecto para cargar el idioma guardado en localStorage
  useEffect(() => {
    // Intentar obtener el idioma guardado en localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    // Si existe un idioma guardado y es válido, usarlo
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Efecto para guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("language", language)
    // Actualizar el atributo lang del HTML para accesibilidad y SEO
    document.documentElement.lang = language
  }, [language])

  // Función para obtener una traducción por su clave
  const t = (key: string): string => {
    // Dividir la clave por puntos para acceder a objetos anidados
    const keys = key.split(".")

    // Comenzar con las traducciones del idioma actual
    let value: any = translations[language]

    // Recorrer las claves para acceder al valor final
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Si no se encuentra la clave, devolver la clave original
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    // Si el valor final no es un string, convertirlo a string
    if (typeof value !== "string") {
      console.warn(`Translation value is not a string for key: ${key}`)
      return key
    }

    return value
  }

  // Valor del contexto
  const contextValue: I18nContextType = {
    language,
    setLanguage,
    t,
    translations: translations[language],
  }

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

// Hook personalizado para usar el contexto
export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

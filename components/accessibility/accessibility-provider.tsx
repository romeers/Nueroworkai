"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type AccessibilityPreferences = {
  reducedMotion: boolean
  highContrast: boolean
  largeText: boolean
  screenReader: boolean
}

type AccessibilityContextType = {
  preferences: AccessibilityPreferences
  updatePreference: (key: keyof AccessibilityPreferences, value: boolean) => void
  resetPreferences: () => void
}

const defaultPreferences: AccessibilityPreferences = {
  reducedMotion: false,
  highContrast: false,
  largeText: false,
  screenReader: false,
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(defaultPreferences)

  // Cargar preferencias del localStorage al iniciar
  useEffect(() => {
    const savedPreferences = localStorage.getItem("accessibility-preferences")
    if (savedPreferences) {
      try {
        setPreferences(JSON.parse(savedPreferences))
      } catch (error) {
        console.error("Error al cargar preferencias de accesibilidad:", error)
      }
    }

    // Detectar preferencias del sistema
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setPreferences((prev) => ({ ...prev, reducedMotion: true }))
    }
  }, [])

  // Guardar preferencias en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("accessibility-preferences", JSON.stringify(preferences))

    // Aplicar clases CSS basadas en preferencias
    const htmlElement = document.documentElement

    if (preferences.highContrast) {
      htmlElement.classList.add("high-contrast")
    } else {
      htmlElement.classList.remove("high-contrast")
    }

    if (preferences.largeText) {
      htmlElement.classList.add("large-text")
    } else {
      htmlElement.classList.remove("large-text")
    }

    if (preferences.reducedMotion) {
      htmlElement.classList.add("reduced-motion")
    } else {
      htmlElement.classList.remove("reduced-motion")
    }

    if (preferences.screenReader) {
      htmlElement.setAttribute("role", "application")
    } else {
      htmlElement.removeAttribute("role")
    }
  }, [preferences])

  const updatePreference = (key: keyof AccessibilityPreferences, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  const resetPreferences = () => {
    setPreferences(defaultPreferences)
  }

  return (
    <AccessibilityContext.Provider value={{ preferences, updatePreference, resetPreferences }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility debe usarse dentro de un AccessibilityProvider")
  }
  return context
}

"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Tipos
type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
  isDark: boolean
}

// Crear contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Props para el provider
interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

// Provider
export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
  // Usar localStorage para persistir el tema
  const [theme, setTheme] = useLocalStorage<Theme>("theme", defaultTheme)

  // Estado para el tema resuelto (light o dark)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  // Efecto para aplicar el tema al DOM
  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window === "undefined") return

    // Función para aplicar el tema
    const applyTheme = (newTheme: "light" | "dark") => {
      const root = window.document.documentElement

      // Eliminar clases anteriores
      root.classList.remove("light", "dark")

      // Añadir nueva clase
      root.classList.add(newTheme)

      // Actualizar el tema resuelto
      setResolvedTheme(newTheme)
    }

    // Resolver el tema
    if (theme === "system") {
      // Usar preferencia del sistema
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      applyTheme(systemTheme)

      // Escuchar cambios en la preferencia del sistema
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? "dark" : "light")
      }

      mediaQuery.addEventListener("change", handleChange)

      return () => {
        mediaQuery.removeEventListener("change", handleChange)
      }
    } else {
      // Usar tema seleccionado
      applyTheme(theme)
    }
  }, [theme])

  // Valor del contexto
  const value = {
    theme,
    setTheme,
    resolvedTheme,
    isDark: resolvedTheme === "dark",
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Hook personalizado para usar el contexto
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider")
  }

  return context
}

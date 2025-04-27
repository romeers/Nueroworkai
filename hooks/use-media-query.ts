"use client"

import { useState, useEffect } from "react"

/**
 * Hook para detectar media queries
 * @param query Media query a detectar (ej: "(max-width: 768px)")
 * @returns Boolean indicando si la media query coincide
 */
export function useMediaQuery(query: string): boolean {
  // Verificar si estamos en el cliente
  const isClient = typeof window === "object"

  // Estado para almacenar si la media query coincide
  const [matches, setMatches] = useState<boolean>(() => {
    // Solo ejecutar en el cliente
    if (!isClient) return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (!isClient) return

    // Crear media query
    const mediaQuery = window.matchMedia(query)

    // Función para actualizar el estado
    const updateMatches = () => setMatches(mediaQuery.matches)

    // Añadir listener
    mediaQuery.addEventListener("change", updateMatches)

    // Limpiar listener al desmontar
    return () => {
      mediaQuery.removeEventListener("change", updateMatches)
    }
  }, [query, isClient])

  return matches
}

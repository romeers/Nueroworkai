"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window === "undefined") return

    const media = window.matchMedia(query)

    // Establecer el estado inicial
    setMatches(media.matches)

    // Definir el callback para actualizar el estado
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Añadir el listener
    media.addEventListener("change", listener)

    // Limpiar el listener al desmontar
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

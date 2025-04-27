"use client"

import { useState, useEffect } from "react"

/**
 * Hook para obtener la posición de scroll
 * @returns Objeto con propiedades x e y
 */
export function useScrollPosition(): { x: number; y: number } {
  // Estado para almacenar la posición de scroll
  const [scrollPosition, setScrollPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  // Verificar si estamos en el cliente
  const isClient = typeof window === "object"

  useEffect(() => {
    if (!isClient) return

    // Función para actualizar la posición de scroll
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    // Configurar posición inicial
    handleScroll()

    // Añadir listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClient])

  return scrollPosition
}

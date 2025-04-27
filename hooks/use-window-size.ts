"use client"

import { useState, useEffect } from "react"

/**
 * Hook para obtener el tamaño de la ventana
 * @returns Objeto con propiedades width y height
 */
export function useWindowSize(): { width: number; height: number } {
  // Estado para almacenar el tamaño de la ventana
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  // Verificar si estamos en el cliente
  const isClient = typeof window === "object"

  useEffect(() => {
    if (!isClient) return

    // Función para actualizar el tamaño de la ventana
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Configurar tamaño inicial
    handleResize()

    // Añadir listener
    window.addEventListener("resize", handleResize)

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isClient])

  return windowSize
}

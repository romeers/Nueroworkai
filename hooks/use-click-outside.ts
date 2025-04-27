"use client"

import { useEffect, useRef, type RefObject } from "react"

/**
 * Hook para detectar clics fuera de un elemento
 * @param callback Función a ejecutar cuando se detecta un clic fuera
 * @returns Ref para adjuntar al elemento
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(callback: () => void): RefObject<T> {
  // Crear ref para el elemento
  const ref = useRef<T>(null)

  useEffect(() => {
    // Función para manejar clics
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    // Añadir listener
    document.addEventListener("mousedown", handleClickOutside)

    // Limpiar listener al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [callback])

  return ref
}

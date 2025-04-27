"use client"

import { useState, useEffect } from "react"

/**
 * Hook para debounce de valores
 * @param value Valor a debounce
 * @param delay Tiempo de espera en ms (default: 500ms)
 * @returns Valor después del debounce
 */
export function useDebounce<T>(value: T, delay = 500): T {
  // Estado para almacenar el valor debounced
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Configurar timer para actualizar el valor después del delay
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Limpiar timer si el valor o delay cambian
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

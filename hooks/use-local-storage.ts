"use client"

import { useState, useEffect } from "react"

/**
 * Hook para usar localStorage con React
 * @param key Clave para almacenar en localStorage
 * @param initialValue Valor inicial si no existe en localStorage
 * @returns [storedValue, setValue] - Valor almacenado y función para actualizarlo
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Estado para almacenar el valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Verificar si estamos en el cliente
    if (typeof window === "undefined") {
      return initialValue
    }

    try {
      // Obtener valor de localStorage
      const item = window.localStorage.getItem(key)
      // Parsear valor almacenado o devolver initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error al obtener ${key} de localStorage:`, error)
      return initialValue
    }
  })

  // Función para actualizar el valor en localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir que value sea una función
      const valueToStore = value instanceof Function ? value(storedValue) : value

      // Actualizar estado
      setStoredValue(valueToStore)

      // Actualizar localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error al guardar ${key} en localStorage:`, error)
    }
  }

  // Efecto para sincronizar con otros tabs/ventanas
  useEffect(() => {
    if (typeof window === "undefined") return

    // Función para manejar cambios en localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue))
        } catch (error) {
          console.error(`Error al parsear ${key} de localStorage:`, error)
        }
      }
    }

    // Añadir listener
    window.addEventListener("storage", handleStorageChange)

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [key])

  return [storedValue, setValue]
}

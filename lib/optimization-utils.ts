/**
 * Utilidades para optimización de rendimiento y estructura
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases de Tailwind de manera óptima
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Verifica si el código se está ejecutando en el cliente
 */
export const isClient = typeof window !== "undefined"

/**
 * Verifica si el código se está ejecutando en un entorno de desarrollo
 */
export const isDev = process.env.NODE_ENV === "development"

/**
 * Genera un ID único para elementos
 */
export function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Formatea un número como moneda
 */
export function formatCurrency(amount: number, currency = "EUR", locale = "es-ES"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Trunca texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text || ""
  return text.slice(0, maxLength) + "..."
}

/**
 * Genera un slug a partir de un texto
 */
export function slugify(text: string): string {
  if (!text) return ""

  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

/**
 * Formatea una fecha
 */
export function formatDate(dateString: string | Date, locale = "es-ES"): string {
  if (!dateString) return ""

  const date = typeof dateString === "string" ? new Date(dateString) : dateString

  if (isNaN(date.getTime())) {
    console.warn(`Invalid date: ${dateString}`)
    return ""
  }

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

/**
 * Calcula el tiempo de lectura para un texto
 */
export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  if (!text) return 0
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

/**
 * Función debounce para optimización de rendimiento
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait = 300): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
      func(...args)
    }, wait)
  }
}

/**
 * Función throttle para optimización de rendimiento
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit = 300): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Obtiene dimensiones de imagen para carga responsiva
 */
export function getImageDimensions(containerWidth: number, aspectRatio = 16 / 9): { width: number; height: number } {
  const height = Math.round(containerWidth / aspectRatio)
  return { width: containerWidth, height }
}

/**
 * Accede de forma segura a propiedades anidadas de un objeto
 */
export function getNestedValue(obj: any, path: string, defaultValue: any = undefined): any {
  if (!obj || !path) return defaultValue

  const keys = path.split(".")
  let result = obj

  for (const key of keys) {
    if (result === undefined || result === null) return defaultValue
    result = result[key]
  }

  return result === undefined ? defaultValue : result
}

/**
 * Elimina duplicados de un array
 */
export function removeDuplicates<T>(array: T[], key?: keyof T): T[] {
  if (!array || !array.length) return []

  if (key) {
    const seen = new Set()
    return array.filter((item) => {
      const value = item[key]
      if (seen.has(value)) return false
      seen.add(value)
      return true
    })
  }

  return [...new Set(array)]
}

/**
 * Agrupa elementos de un array por una propiedad
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  if (!array || !array.length) return {}

  return array.reduce(
    (result, item) => {
      const groupKey = String(item[key])
      if (!result[groupKey]) {
        result[groupKey] = []
      }
      result[groupKey].push(item)
      return result
    },
    {} as Record<string, T[]>,
  )
}

/**
 * Ordena un array de objetos por una propiedad
 */
export function sortBy<T>(array: T[], key: keyof T, direction: "asc" | "desc" = "asc"): T[] {
  if (!array || !array.length) return []

  return [...array].sort((a, b) => {
    const valueA = a[key]
    const valueB = b[key]

    if (valueA < valueB) return direction === "asc" ? -1 : 1
    if (valueA > valueB) return direction === "asc" ? 1 : -1
    return 0
  })
}

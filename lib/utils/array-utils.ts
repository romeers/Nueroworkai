/**
 * Utilidades para manipulación de arrays
 */

/**
 * Elimina duplicados de un array
 */
export function removeDuplicates<T>(array: T[]): T[] {
  if (!array || !array.length) return []
  return [...new Set(array)]
}

/**
 * Elimina duplicados de un array de objetos basado en una propiedad
 */
export function removeDuplicatesByKey<T>(array: T[], key: keyof T): T[] {
  if (!array || !array.length) return []

  const seen = new Set()
  return array.filter((item) => {
    const value = item[key]
    if (seen.has(value)) return false
    seen.add(value)
    return true
  })
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

/**
 * Divide un array en chunks de tamaño específico
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  if (!array || !array.length) return []

  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

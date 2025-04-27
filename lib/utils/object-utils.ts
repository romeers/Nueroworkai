/**
 * Utilidades para manipulación de objetos
 */

/**
 * Accede de forma segura a propiedades anidadas de un objeto
 */
export function getNestedValue<T = any>(obj: any, path: string, defaultValue: T | null = null): T | null {
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
 * Elimina propiedades nulas o indefinidas de un objeto
 */
export function removeEmptyValues<T extends Record<string, any>>(obj: T): Partial<T> {
  if (!obj) return {}

  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      if (value !== null && value !== undefined) {
        acc[key as keyof T] = value
      }
      return acc
    },
    {} as Partial<T>,
  )
}

/**
 * Compara dos objetos para determinar si son iguales
 */
export function areObjectsEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true
  if (!obj1 || !obj2) return false

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    const val1 = obj1[key]
    const val2 = obj2[key]

    if (typeof val1 === "object" && typeof val2 === "object") {
      if (!areObjectsEqual(val1, val2)) return false
    } else if (val1 !== val2) {
      return false
    }
  }

  return true
}

/**
 * Fusiona profundamente dos objetos
 */
export function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const output = { ...target }

  if (!source) return output

  Object.keys(source).forEach((key) => {
    const targetValue = output[key]
    const sourceValue = source[key]

    if (targetValue && sourceValue && typeof targetValue === "object" && typeof sourceValue === "object") {
      output[key] = deepMerge(targetValue, sourceValue)
    } else if (sourceValue !== undefined) {
      output[key] = sourceValue
    }
  })

  return output
}

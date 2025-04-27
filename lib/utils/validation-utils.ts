/**
 * Utilidades para validación de datos
 */

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida una URL
 */
export function isValidUrl(url: string): boolean {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Valida si un valor es numérico
 */
export function isNumeric(value: any): boolean {
  if (typeof value === "number") return true
  if (typeof value !== "string") return false
  return !isNaN(Number.parseFloat(value)) && isFinite(value)
}

/**
 * Valida si un objeto tiene todas las propiedades requeridas
 */
export function hasRequiredProperties<T>(obj: any, requiredProps: (keyof T)[]): boolean {
  if (!obj) return false

  return requiredProps.every((prop) => obj[prop] !== undefined && obj[prop] !== null)
}

/**
 * Valida un objeto contra un esquema
 */
export function validateObject<T>(
  obj: any,
  schema: Record<keyof T, (value: any) => boolean | string>,
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  for (const [field, validator] of Object.entries(schema)) {
    const result = validator(obj[field])

    if (typeof result === "string") {
      errors[field] = result
    } else if (result === false) {
      errors[field] = `El campo ${field} no es válido`
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validadores comunes
 */
export const validators = {
  required: (value: any) => {
    if (value === undefined || value === null || value === "") {
      return "Este campo es obligatorio"
    }
    return true
  },

  email: (value: string) => {
    if (!value) return true
    return isValidEmail(value) || "Email no válido"
  },

  url: (value: string) => {
    if (!value) return true
    return isValidUrl(value) || "URL no válida"
  },

  minLength: (min: number) => (value: string) => {
    if (!value) return true
    return value.length >= min || `Debe tener al menos ${min} caracteres`
  },

  maxLength: (max: number) => (value: string) => {
    if (!value) return true
    return value.length <= max || `Debe tener como máximo ${max} caracteres`
  },

  numeric: (value: string) => {
    if (!value) return true
    return isNumeric(value) || "Debe contener solo números"
  },
}

/**
 * Utilidades para validación de datos
 */
import { ValidationError } from "./error-types"

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
 * Lanza un error de validación si la validación falla
 */
export function validateOrThrow<T>(
  obj: any,
  schema: Record<keyof T, (value: any) => boolean | string>,
  errorMessage = "Error de validación",
): void {
  const { isValid, errors } = validateObject<T>(obj, schema)

  if (!isValid) {
    throw new ValidationError(errorMessage, errors)
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value) || "Email no válido"
  },

  url: (value: string) => {
    if (!value) return true
    try {
      new URL(value)
      return true
    } catch {
      return "URL no válida"
    }
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
    return /^\d+$/.test(value) || "Debe contener solo números"
  },

  integer: (value: any) => {
    if (value === null || value === undefined || value === "") return true
    return Number.isInteger(Number(value)) || "Debe ser un número entero"
  },

  min: (min: number) => (value: number) => {
    if (value === null || value === undefined) return true
    return value >= min || `Debe ser mayor o igual a ${min}`
  },

  max: (max: number) => (value: number) => {
    if (value === null || value === undefined) return true
    return value <= max || `Debe ser menor o igual a ${max}`
  },

  pattern: (regex: RegExp, message: string) => (value: string) => {
    if (!value) return true
    return regex.test(value) || message
  },
}

/**
 * Ejemplo de uso:
 *
 * const userSchema = {
 *   name: validators.required,
 *   email: (value) => validators.required(value) && validators.email(value),
 *   age: (value) => validators.integer(value) && validators.min(18)(value)
 * }
 *
 * try {
 *   validateOrThrow(userData, userSchema, "Datos de usuario inválidos")
 *   // Continuar con el procesamiento
 * } catch (error) {
 *   // Manejar el error de validación
 * }
 */

/**
 * Utilidades para manejo de errores
 */

// Tipos de errores personalizados
export class ApiError extends Error {
  statusCode: number

  constructor(message: string, statusCode = 500) {
    super(message)
    this.name = "ApiError"
    this.statusCode = statusCode
  }
}

export class ValidationError extends Error {
  fields: Record<string, string>

  constructor(message: string, fields: Record<string, string> = {}) {
    super(message)
    this.name = "ValidationError"
    this.fields = fields
  }
}

export class DatabaseError extends Error {
  query?: string
  params?: any[]

  constructor(message: string, query?: string, params?: any[]) {
    super(message)
    this.name = "DatabaseError"
    this.query = query
    this.params = params
  }
}

// Función para capturar y registrar errores
export async function captureError(error: unknown, context: Record<string, any> = {}): Promise<Error> {
  const errorObj = error instanceof Error ? error : new Error(String(error))

  // Añadir contexto al error
  Object.assign(errorObj, { context })

  // Registrar el error (en desarrollo se muestra en consola)
  if (process.env.NODE_ENV === "development") {
    console.error("Error capturado:", {
      message: errorObj.message,
      stack: errorObj.stack,
      context,
      timestamp: new Date().toISOString(),
    })
  }

  // Aquí se podría integrar con un servicio de monitoreo de errores
  // como Sentry, LogRocket, etc.

  return errorObj
}

// Función para validar datos de entrada
export function validateInput<T>(
  data: any,
  schema: Record<keyof T, (value: any) => boolean | string>,
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  for (const [field, validator] of Object.entries(schema)) {
    const result = validator(data[field])

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

// Función para crear un manejador de errores para rutas API
export function createErrorHandler() {
  return (error: unknown) => {
    if (error instanceof ApiError) {
      return Response.json({ success: false, message: error.message }, { status: error.statusCode })
    }

    if (error instanceof ValidationError) {
      return Response.json({ success: false, message: error.message, fields: error.fields }, { status: 400 })
    }

    if (error instanceof DatabaseError) {
      return Response.json({ success: false, message: "Error en la base de datos" }, { status: 500 })
    }

    // Error genérico
    const message = error instanceof Error ? error.message : "Error desconocido"
    return Response.json({ success: false, message }, { status: 500 })
  }
}

// Validadores comunes
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

  url: (value: string) => {
    if (!value) return true
    try {
      new URL(value)
      return true
    } catch {
      return "URL no válida"
    }
  },
}

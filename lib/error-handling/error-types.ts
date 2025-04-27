/**
 * Tipos de errores personalizados para la aplicación
 */

/**
 * Error base para la aplicación
 */
export class AppError extends Error {
  code: string
  statusCode: number

  constructor(message: string, code = "APP_ERROR", statusCode = 500) {
    super(message)
    this.name = this.constructor.name
    this.code = code
    this.statusCode = statusCode

    // Necesario para que instanceof funcione correctamente con clases extendidas
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

/**
 * Error de API
 */
export class ApiError extends AppError {
  constructor(message: string, statusCode = 500) {
    super(message, "API_ERROR", statusCode)
  }
}

/**
 * Error de validación
 */
export class ValidationError extends AppError {
  fields: Record<string, string>

  constructor(message: string, fields: Record<string, string> = {}) {
    super(message, "VALIDATION_ERROR", 400)
    this.fields = fields
  }
}

/**
 * Error de autenticación
 */
export class AuthError extends AppError {
  constructor(message = "No autorizado") {
    super(message, "AUTH_ERROR", 401)
  }
}

/**
 * Error de permisos
 */
export class ForbiddenError extends AppError {
  constructor(message = "Acceso denegado") {
    super(message, "FORBIDDEN_ERROR", 403)
  }
}

/**
 * Error de recurso no encontrado
 */
export class NotFoundError extends AppError {
  constructor(resource = "Recurso") {
    super(`${resource} no encontrado`, "NOT_FOUND_ERROR", 404)
  }
}

/**
 * Error de base de datos
 */
export class DatabaseError extends AppError {
  query?: string
  params?: any[]

  constructor(message: string, query?: string, params?: any[]) {
    super(message, "DATABASE_ERROR", 500)
    this.query = query
    this.params = params
  }
}

/**
 * Error de servicio externo
 */
export class ExternalServiceError extends AppError {
  service: string

  constructor(message: string, service: string) {
    super(message, "EXTERNAL_SERVICE_ERROR", 502)
    this.service = service
  }
}

/**
 * Error de límite de tasa
 */
export class RateLimitError extends AppError {
  retryAfter?: number

  constructor(message = "Demasiadas solicitudes", retryAfter?: number) {
    super(message, "RATE_LIMIT_ERROR", 429)
    this.retryAfter = retryAfter
  }
}

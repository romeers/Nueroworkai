/**
 * Utilidades para registrar errores
 */

interface ErrorContext {
  [key: string]: any
}

/**
 * Registra una excepción
 */
export function captureException(error: unknown, context: ErrorContext = {}): void {
  // En desarrollo, mostrar en consola
  if (process.env.NODE_ENV === "development") {
    console.error("Error capturado:", error)

    if (Object.keys(context).length > 0) {
      console.error("Contexto:", context)
    }

    // Si es un error con stack trace, mostrarlo
    if (error instanceof Error && error.stack) {
      console.error("Stack trace:", error.stack)
    }
  }

  // Aquí se podría integrar con un servicio de monitoreo de errores
  // como Sentry, LogRocket, etc.

  // Ejemplo de integración con Sentry (comentado)
  /*
  if (typeof window !== "undefined" && window.Sentry) {
    window.Sentry.captureException(error, {
      extra: context
    })
  }
  */
}

/**
 * Registra un mensaje de error
 */
export function captureMessage(message: string, context: ErrorContext = {}): void {
  // En desarrollo, mostrar en consola
  if (process.env.NODE_ENV === "development") {
    console.error("Mensaje de error:", message)

    if (Object.keys(context).length > 0) {
      console.error("Contexto:", context)
    }
  }

  // Aquí se podría integrar con un servicio de monitoreo de errores

  // Ejemplo de integración con Sentry (comentado)
  /*
  if (typeof window !== "undefined" && window.Sentry) {
    window.Sentry.captureMessage(message, {
      extra: context
    })
  }
  */
}

/**
 * Registra un error de API
 */
export function logApiError(endpoint: string, method: string, error: unknown, requestData?: any): void {
  captureException(error, {
    type: "api_error",
    endpoint,
    method,
    requestData,
  })
}

/**
 * Registra un error de base de datos
 */
export function logDatabaseError(query: string, params: any[], error: unknown): void {
  captureException(error, {
    type: "database_error",
    query,
    params,
  })
}

/**
 * Registra un error de autenticación
 */
export function logAuthError(action: string, userId?: string | number, error?: unknown): void {
  captureException(error || new Error(`Error de autenticación: ${action}`), {
    type: "auth_error",
    action,
    userId,
  })
}

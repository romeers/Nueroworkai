interface ErrorContext {
  [key: string]: any
}

// Función para capturar excepciones
export function captureException(error: unknown, context: ErrorContext = {}): void {
  // Registrar en consola en desarrollo
  if (process.env.NODE_ENV === "development") {
    console.error("Error capturado:", error)

    if (Object.keys(context).length > 0) {
      console.error("Contexto:", context)
    }

    if (error instanceof Error && error.stack) {
      console.error("Stack trace:", error.stack)
    }
  }

  // Enviar a un servicio de monitoreo en producción
  if (process.env.NODE_ENV === "production") {
    // Aquí se integraría con servicios como Sentry, LogRocket, etc.
    // Por ejemplo:
    // Sentry.captureException(error, { extra: context });

    // Implementación básica para enviar a un endpoint propio
    try {
      fetch("/api/log-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
          context,
          timestamp: new Date().toISOString(),
          url: typeof window !== "undefined" ? window.location.href : undefined,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
        }),
      }).catch((e) => console.error("Error al enviar log de error:", e))
    } catch (e) {
      // Silenciar errores en el logger para evitar bucles
      console.error("Error al registrar error:", e)
    }
  }
}

// Función para registrar mensajes de error
export function logError(message: string, context: ErrorContext = {}): void {
  console.error(message, context)

  // En producción, enviar a servicio de monitoreo
  if (process.env.NODE_ENV === "production") {
    // Implementación similar a captureException
  }
}

// Función para registrar errores de API
export function logApiError(endpoint: string, method: string, error: unknown, requestData?: any): void {
  captureException(error, {
    type: "api_error",
    endpoint,
    method,
    requestData,
  })
}

// Función para registrar errores de base de datos
export function logDatabaseError(query: string, params: any[], error: unknown): void {
  captureException(error, {
    type: "database_error",
    query,
    params,
  })
}

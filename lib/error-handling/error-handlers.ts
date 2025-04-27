/**
 * Manejadores de errores para diferentes contextos
 */
import { captureException } from "./error-logger"
import {
  AppError,
  ValidationError,
  AuthError,
  ForbiddenError,
  NotFoundError,
  DatabaseError,
  ExternalServiceError,
  RateLimitError,
} from "./error-types"

/**
 * Maneja errores en rutas de API
 */
export function handleApiError(error: unknown) {
  // Registrar el error
  captureException(error)

  // Determinar el tipo de error y devolver la respuesta adecuada
  if (error instanceof ValidationError) {
    return Response.json(
      {
        success: false,
        code: error.code,
        message: error.message,
        fields: error.fields,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof AuthError) {
    return Response.json(
      {
        success: false,
        code: error.code,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof ForbiddenError) {
    return Response.json(
      {
        success: false,
        code: error.code,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof NotFoundError) {
    return Response.json(
      {
        success: false,
        code: error.code,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof DatabaseError) {
    // No exponer detalles de la consulta en producción
    const isDev = process.env.NODE_ENV === "development"

    return Response.json(
      {
        success: false,
        code: error.code,
        message: "Error en la base de datos",
        ...(isDev
          ? {
              devMessage: error.message,
              query: error.query,
            }
          : {}),
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof ExternalServiceError) {
    return Response.json(
      {
        success: false,
        code: error.code,
        message: `Error en servicio externo: ${error.service}`,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof RateLimitError) {
    const headers = new Headers()

    if (error.retryAfter) {
      headers.set("Retry-After", error.retryAfter.toString())
    }

    return Response.json(
      {
        success: false,
        code: error.code,
        message: error.message,
      },
      {
        status: error.statusCode,
        headers,
      },
    )
  }

  if (error instanceof AppError) {
    return Response.json(
      {
        success: false,
        code: error.code,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  // Error genérico
  console.error("Error no manejado:", error)

  return Response.json(
    {
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: "Error interno del servidor",
    },
    { status: 500 },
  )
}

/**
 * Maneja errores en acciones del servidor
 */
export async function handleServerActionError(error: unknown, defaultMessage = "Ha ocurrido un error") {
  // Registrar el error
  captureException(error)

  // Determinar el tipo de error y devolver el mensaje adecuado
  if (error instanceof ValidationError) {
    return {
      success: false,
      message: error.message,
      fields: error.fields,
    }
  }

  if (error instanceof AuthError) {
    return {
      success: false,
      message: error.message,
    }
  }

  if (error instanceof AppError) {
    return {
      success: false,
      message: error.message,
    }
  }

  // Error genérico
  console.error("Error no manejado en server action:", error)

  return {
    success: false,
    message: defaultMessage,
  }
}

/**
 * Maneja errores en componentes del cliente
 */
export function handleClientError(error: unknown, defaultMessage = "Ha ocurrido un error"): string {
  // Registrar el error (solo en desarrollo)
  if (process.env.NODE_ENV === "development") {
    console.error("Error en cliente:", error)
  }

  // Determinar el tipo de error y devolver el mensaje adecuado
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "string") {
    return error
  }

  return defaultMessage
}

/**
 * Convierte un error desconocido en un AppError
 */
export function normalizeError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error
  }

  if (error instanceof Error) {
    return new AppError(error.message)
  }

  return new AppError(String(error))
}

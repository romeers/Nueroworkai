import { NextResponse } from "next/server"
import { captureException } from "./error-logger"

// Tipos de errores personalizados
export class AppError extends Error {
  statusCode: number
  code: string

  constructor(message: string, statusCode = 500, code = "INTERNAL_SERVER_ERROR") {
    super(message)
    this.name = "AppError"
    this.statusCode = statusCode
    this.code = code
  }
}

export class ValidationError extends AppError {
  fields: Record<string, string>

  constructor(message: string, fields: Record<string, string>) {
    super(message, 400, "VALIDATION_ERROR")
    this.name = "ValidationError"
    this.fields = fields
  }
}

export class AuthError extends AppError {
  constructor(message = "No autorizado") {
    super(message, 401, "UNAUTHORIZED")
    this.name = "AuthError"
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Acceso denegado") {
    super(message, 403, "FORBIDDEN")
    this.name = "ForbiddenError"
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Recurso no encontrado") {
    super(message, 404, "NOT_FOUND")
    this.name = "NotFoundError"
  }
}

// Manejador de errores para rutas de API
export function apiErrorHandler(error: unknown) {
  // Registrar el error
  captureException(error)

  // Determinar el tipo de error y devolver la respuesta adecuada
  if (error instanceof ValidationError) {
    return NextResponse.json(
      {
        success: false,
        code: error.code,
        message: error.message,
        fields: error.fields,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof AuthError || error instanceof ForbiddenError || error instanceof NotFoundError) {
    return NextResponse.json(
      {
        success: false,
        code: error.code,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof AppError) {
    return NextResponse.json(
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

  return NextResponse.json(
    {
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: "Error interno del servidor",
    },
    { status: 500 },
  )
}

// Wrapper para rutas de API
export function withErrorHandling(handler: Function) {
  return async (req: Request, ...args: any[]) => {
    try {
      return await handler(req, ...args)
    } catch (error) {
      return apiErrorHandler(error)
    }
  }
}

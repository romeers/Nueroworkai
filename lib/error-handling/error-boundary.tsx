"use client"

import React, { Component, type ErrorInfo, type ReactNode } from "react"
import { captureException } from "./error-logger"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode)
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  errorComponent?: React.ComponentType<{ error: Error; reset: () => void }>
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Registrar el error
    captureException(error, { errorInfo })

    // Llamar al callback onError si existe
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render(): ReactNode {
    const { hasError, error } = this.state
    const { children, fallback, errorComponent: ErrorComponent } = this.props

    if (hasError && error) {
      // Si se proporciona un componente de error personalizado
      if (ErrorComponent) {
        return <ErrorComponent error={error} reset={this.resetErrorBoundary} />
      }

      // Si se proporciona un fallback como función
      if (typeof fallback === "function") {
        return fallback(error, this.resetErrorBoundary)
      }

      // Si se proporciona un fallback como ReactNode
      if (fallback) {
        return fallback
      }

      // Fallback por defecto
      return (
        <div
          className="p-6 rounded-lg bg-red-50 border border-red-200 text-center max-w-md mx-auto my-8"
          role="alert"
          aria-live="assertive"
        >
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold text-red-800 mb-2">Ha ocurrido un error</h2>
          <p className="text-red-600 mb-6">{error.message || "Se ha producido un error inesperado."}</p>
          <Button
            onClick={this.resetErrorBoundary}
            variant="outline"
            className="bg-white border-red-300 hover:bg-red-50 text-red-600"
          >
            Intentar de nuevo
          </Button>
        </div>
      )
    }

    return children
  }
}

// Componente de error global para la aplicación
export function GlobalErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Algo salió mal</h1>
        <p className="text-gray-600 mb-6">
          Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
        </p>
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            Intentar de nuevo
          </Button>
          <Button variant="outline" className="w-full" onClick={() => (window.location.href = "/")}>
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  )
}

// Hook para lanzar errores en componentes funcionales
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null)

  if (error) {
    throw error
  }

  return setError
}

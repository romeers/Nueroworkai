/**
 * Utilidad para registrar errores
 */

type ErrorSeverity = "info" | "warning" | "error" | "critical"

interface ErrorLogEntry {
  timestamp: string
  message: string
  severity: ErrorSeverity
  context?: Record<string, any>
  stack?: string
}

class ErrorLogger {
  private static instance: ErrorLogger
  private logs: ErrorLogEntry[] = []
  private maxLogs = 100

  private constructor() {
    // Singleton
  }

  public static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger()
    }
    return ErrorLogger.instance
  }

  public log(message: string, severity: ErrorSeverity = "info", context?: Record<string, any>, error?: Error): void {
    const entry: ErrorLogEntry = {
      timestamp: new Date().toISOString(),
      message,
      severity,
      context,
      stack: error?.stack,
    }

    // Añadir al registro
    this.logs.unshift(entry)

    // Limitar el tamaño del registro
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs)
    }

    // Registrar en la consola
    this.logToConsole(entry)

    // Si es un error crítico, enviar a un servicio externo
    if (severity === "critical") {
      this.sendToExternalService(entry)
    }
  }

  private logToConsole(entry: ErrorLogEntry): void {
    const { timestamp, message, severity, context, stack } = entry
    const prefix = `[${timestamp}] [${severity.toUpperCase()}]`

    switch (severity) {
      case "info":
        console.info(`${prefix} ${message}`, context || "")
        break
      case "warning":
        console.warn(`${prefix} ${message}`, context || "")
        break
      case "error":
      case "critical":
        console.error(`${prefix} ${message}`, context || "")
        if (stack) {
          console.error(stack)
        }
        break
    }
  }

  private sendToExternalService(entry: ErrorLogEntry): void {
    // Aquí se implementaría el envío a un servicio externo como Sentry
    // Por ahora, solo simulamos el envío
    console.log("Enviando error crítico a servicio externo:", entry)
  }

  public getLogs(severity?: ErrorSeverity): ErrorLogEntry[] {
    if (severity) {
      return this.logs.filter((log) => log.severity === severity)
    }
    return this.logs
  }

  public clearLogs(): void {
    this.logs = []
  }
}

// Exportar una instancia singleton
export const errorLogger = ErrorLogger.getInstance()

// Función de utilidad para registrar errores en componentes
export function logError(
  message: string,
  severity: ErrorSeverity = "error",
  context?: Record<string, any>,
  error?: Error,
): void {
  errorLogger.log(message, severity, context, error)
}

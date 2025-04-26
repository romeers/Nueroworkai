/**
 * Error logging utility for NeuroWorkAI
 * Provides structured error logging and reporting
 */

type ErrorSeverity = "low" | "medium" | "high" | "critical"

interface ErrorLogOptions {
  severity?: ErrorSeverity
  context?: Record<string, any>
  user?: string
  sendToAnalytics?: boolean
}

class ErrorLogger {
  private static instance: ErrorLogger

  private constructor() {
    // Initialize error logging service
  }

  public static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger()
    }
    return ErrorLogger.instance
  }

  /**
   * Log an error with structured metadata
   */
  public logError(
    error: Error | string,
    options: ErrorLogOptions = { severity: "medium", sendToAnalytics: true },
  ): void {
    const errorObj = typeof error === "string" ? new Error(error) : error
    const timestamp = new Date().toISOString()

    // Create structured error object
    const logEntry = {
      timestamp,
      message: errorObj.message,
      stack: errorObj.stack,
      severity: options.severity || "medium",
      context: options.context || {},
      user: options.user,
      environment: process.env.NODE_ENV || "development",
    }

    // Log to console in development
    if (process.env.NODE_ENV !== "production") {
      console.error("ERROR:", logEntry)
      return
    }

    // In production, we would send to a logging service
    // This is a placeholder for actual implementation
    this.sendToLoggingService(logEntry)

    // Optionally send to analytics
    if (options.sendToAnalytics) {
      this.sendToAnalytics(logEntry)
    }
  }

  /**
   * Log API errors with request details
   */
  public logApiError(
    error: Error | string,
    request: { url: string; method: string; params?: any },
    options: ErrorLogOptions = {},
  ): void {
    const context = {
      ...options.context,
      request: {
        url: request.url,
        method: request.method,
        params: request.params,
      },
    }

    this.logError(error, { ...options, context })
  }

  /**
   * Send error to logging service (placeholder)
   */
  private sendToLoggingService(logEntry: any): void {
    // In a real implementation, this would send to a service like Sentry, LogRocket, etc.
    // For now, just log to console in production
    console.error("PRODUCTION ERROR:", logEntry)
  }

  /**
   * Send error to analytics (placeholder)
   */
  private sendToAnalytics(logEntry: any): void {
    // In a real implementation, this would send to an analytics service
    // For example, tracking error rates in Google Analytics or similar
  }
}

// Export singleton instance
export const errorLogger = ErrorLogger.getInstance()

// Helper functions for common error scenarios
export function logApiError(
  error: Error | string,
  request: { url: string; method: string; params?: any },
  options: ErrorLogOptions = {},
): void {
  errorLogger.logApiError(error, request, options)
}

export function logDatabaseError(
  error: Error | string,
  query?: string,
  params?: any[],
  options: ErrorLogOptions = { severity: "high" },
): void {
  const context = {
    ...options.context,
    database: {
      query,
      params,
    },
  }

  errorLogger.logError(error, { ...options, context })
}

export function logAuthError(error: Error | string, userId?: string, options: ErrorLogOptions = {}): void {
  const context = {
    ...options.context,
    auth: {
      userId,
    },
  }

  errorLogger.logError(error, { ...options, context })
}

export default errorLogger

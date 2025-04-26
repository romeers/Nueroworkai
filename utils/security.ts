/**
 * Utilidades para mejorar la seguridad del sitio
 */

// Función para sanitizar entradas de usuario
export function sanitizeInput(input: string): string {
  // Eliminar etiquetas HTML
  let sanitized = input.replace(/<[^>]*>?/gm, "")

  // Escapar caracteres especiales
  sanitized = sanitized
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

  return sanitized
}

// Función para validar emails
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Función para validar contraseñas
export function validatePassword(password: string): { valid: boolean; message?: string } {
  if (password.length < 8) {
    return { valid: false, message: "La contraseña debe tener al menos 8 caracteres" }
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: "La contraseña debe contener al menos una letra mayúscula" }
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, message: "La contraseña debe contener al menos una letra minúscula" }
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, message: "La contraseña debe contener al menos un número" }
  }

  return { valid: true }
}

// Función para generar tokens seguros
export function generateSecureToken(length = 32): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let token = ""

  // En un entorno de navegador, usamos window.crypto
  if (typeof window !== "undefined" && window.crypto) {
    const randomValues = new Uint32Array(length)
    window.crypto.getRandomValues(randomValues)

    for (let i = 0; i < length; i++) {
      token += characters.charAt(randomValues[i] % characters.length)
    }
  } else {
    // Fallback para entornos sin crypto
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  }

  return token
}

// Función para establecer encabezados de seguridad
export function getSecurityHeaders(): Record<string, string> {
  return {
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.vercel.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.vercel-storage.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://analytics.vercel.app;",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  }
}

export async function hashPassword(password: string): Promise<string> {
  // Simulación simple para desarrollo
  return `hashed_${password}`
}

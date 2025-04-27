/**
 * Utilidades para formateo de datos
 */

/**
 * Formatea un número como moneda
 */
export function formatCurrency(amount: number | string, currency = "EUR", locale = "es-ES"): string {
  if (amount === null || amount === undefined) return ""

  const numAmount = typeof amount === "string" ? Number.parseFloat(amount) : amount

  if (isNaN(numAmount)) {
    console.warn(`Valor no numérico para formatCurrency: ${amount}`)
    return ""
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numAmount)
}

/**
 * Formatea un número con separadores de miles
 */
export function formatNumber(number: number | string, locale = "es-ES"): string {
  if (number === null || number === undefined) return ""

  const numValue = typeof number === "string" ? Number.parseFloat(number) : number

  if (isNaN(numValue)) {
    console.warn(`Valor no numérico para formatNumber: ${number}`)
    return ""
  }

  return new Intl.NumberFormat(locale).format(numValue)
}

/**
 * Formatea bytes a una unidad legible (KB, MB, GB)
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`
}

/**
 * Formatea un porcentaje
 */
export function formatPercent(value: number, decimals = 0, locale = "es-ES"): string {
  if (value === null || value === undefined) return ""

  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100)
}

/**
 * Formatea un número de teléfono
 */
export function formatPhoneNumber(phoneNumber: string, countryCode = "ES"): string {
  if (!phoneNumber) return ""

  // Eliminar caracteres no numéricos
  const cleaned = phoneNumber.replace(/\D/g, "")

  // Formato para España (por defecto)
  if (countryCode === "ES") {
    if (cleaned.length === 9) {
      return cleaned.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4")
    }
  }

  // Formato para otros países se puede añadir aquí

  // Si no hay formato específico, devolver el número limpio
  return cleaned
}

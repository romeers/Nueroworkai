/**
 * Configuración de la API
 */

// URL base de la API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""

// Configuración de endpoints
export const API_ENDPOINTS = {
  // Herramientas
  TOOLS: "/api/tools",
  TOOL_BY_SLUG: (slug: string) => `/api/tools/${slug}`,
  FEATURED_TOOLS: "/api/tools/featured",
  POPULAR_TOOLS: "/api/tools/popular",
  RELATED_TOOLS: (toolId: number) => `/api/tools/${toolId}/related`,

  // Categorías
  CATEGORIES: "/api/categories",
  CATEGORY_BY_SLUG: (slug: string) => `/api/categories/${slug}`,
  CATEGORY_TOOLS: (categorySlug: string) => `/api/categories/${categorySlug}/tools`,

  // Comparativas
  COMPARISONS: "/api/comparisons",
  COMPARISON_BY_SLUG: (slug: string) => `/api/comparisons/${slug}`,
  POPULAR_COMPARISONS: "/api/comparisons/popular",

  // Recursos
  RESOURCES: "/api/resources",
  RESOURCE_BY_SLUG: (slug: string) => `/api/resources/${slug}`,
  FEATURED_RESOURCES: "/api/resources/featured",

  // Autenticación
  AUTH_LOGIN: "/api/auth/login",
  AUTH_REGISTER: "/api/auth/register",
  AUTH_LOGOUT: "/api/auth/logout",
  AUTH_ME: "/api/auth/me",
  AUTH_CHECK_EMAIL: "/api/auth/check-email",
  AUTH_RESET_PASSWORD: "/api/auth/reset-password",
  AUTH_RESET_PASSWORD_CONFIRM: "/api/auth/reset-password/confirm",
  AUTH_CHANGE_PASSWORD: "/api/auth/change-password",

  // Perfil
  PROFILE: "/api/auth/profile",

  // Favoritos
  FAVORITES: "/api/favorites",
  FAVORITE_TOOL: (toolId: number) => `/api/favorites/${toolId}`,

  // Suscripciones
  SUBSCRIPTIONS: "/api/subscriptions",

  // Contacto
  CONTACT: "/api/contact",

  // Kit Digital
  KIT_DOWNLOAD: "/api/kit-download",
}

// Configuración de timeouts
export const API_TIMEOUTS = {
  DEFAULT: 10000, // 10 segundos
  LONG: 30000, // 30 segundos
}

// Configuración de reintentos
export const API_RETRY = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // 1 segundo
}

// Configuración de caché
export const API_CACHE = {
  DEFAULT_TTL: 60 * 5, // 5 minutos
  LONG_TTL: 60 * 60, // 1 hora
  CATEGORIES_TTL: 60 * 60 * 24, // 24 horas
}

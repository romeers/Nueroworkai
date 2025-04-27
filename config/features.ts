/**
 * Configuración de características y flags
 */

// Flags de características
export const FEATURES = {
  // Características generales
  DARK_MODE: true,
  MULTILANGUAGE: true,
  NEWSLETTER: true,
  CONTACT_FORM: true,
  SITEMAP: true,

  // Características de herramientas
  TOOL_RATINGS: true,
  TOOL_COMMENTS: false,
  TOOL_FAVORITES: true,
  TOOL_SHARING: true,
  TOOL_COMPARISON: true,

  // Características de usuario
  USER_REGISTRATION: true,
  USER_PROFILES: true,
  USER_FAVORITES: true,
  USER_REVIEWS: false,

  // Características de contenido
  RESOURCES: true,
  BLOG: false,
  GUIDES: true,

  // Características de marketing
  KIT_DIGITAL: true,
  AFFILIATE_LINKS: true,
  SPECIAL_OFFERS: true,

  // Características de rendimiento
  IMAGE_OPTIMIZATION: true,
  LAZY_LOADING: true,
  CODE_SPLITTING: true,

  // Características de analítica
  GOOGLE_ANALYTICS: true,
  CUSTOM_EVENTS: true,
}

// Límites y umbrales
export const LIMITS = {
  FEATURED_TOOLS: 6,
  POPULAR_TOOLS: 8,
  RELATED_TOOLS: 4,
  TOOLS_PER_PAGE: 12,
  RESOURCES_PER_PAGE: 9,
  FEATURED_RESOURCES: 3,
  POPULAR_COMPARISONS: 5,
  MAX_FAVORITES: 50,
  MAX_UPLOAD_SIZE: 5 * 1024 * 1024, // 5MB
}

// Configuración de características específicas
export const FEATURE_CONFIG = {
  // Configuración de newsletter
  NEWSLETTER: {
    PROVIDER: "mailchimp",
    LIST_ID: "abc123",
  },

  // Configuración de comentarios
  COMMENTS: {
    PROVIDER: "disqus",
    SHORTNAME: "neuroworkai",
  },

  // Configuración de compartir
  SHARING: {
    PLATFORMS: ["twitter", "facebook", "linkedin", "whatsapp", "email"],
  },

  // Configuración de autenticación
  AUTH: {
    PROVIDERS: ["email", "google"],
    JWT_EXPIRY: "7d",
  },
}

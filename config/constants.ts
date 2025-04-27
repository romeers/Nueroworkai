/**
 * Constantes globales de la aplicación
 */

// Categorías
export const CATEGORIES = {
  WRITING: "writing",
  PRODUCTIVITY: "productivity",
  AUTOMATION: "automation",
  COMMUNICATION: "communication",
  ANALYTICS: "analytics",
  DESIGN: "design",
  MARKETING: "marketing",
  SALES: "sales",
  CUSTOMER_SERVICE: "customer-service",
  DEVELOPMENT: "development",
}

// Mapeo de categorías a nombres legibles
export const CATEGORY_NAMES = {
  [CATEGORIES.WRITING]: "Escritura",
  [CATEGORIES.PRODUCTIVITY]: "Productividad",
  [CATEGORIES.AUTOMATION]: "Automatización",
  [CATEGORIES.COMMUNICATION]: "Comunicación",
  [CATEGORIES.ANALYTICS]: "Análisis",
  [CATEGORIES.DESIGN]: "Diseño",
  [CATEGORIES.MARKETING]: "Marketing",
  [CATEGORIES.SALES]: "Ventas",
  [CATEGORIES.CUSTOMER_SERVICE]: "Atención al Cliente",
  [CATEGORIES.DEVELOPMENT]: "Desarrollo",
}

// Estados
export const STATUS = {
  ACTIVE: "active",
  PENDING: "pending",
  INACTIVE: "inactive",
}

// Mapeo de estados a nombres legibles
export const STATUS_NAMES = {
  [STATUS.ACTIVE]: "Activo",
  [STATUS.PENDING]: "Pendiente",
  [STATUS.INACTIVE]: "Inactivo",
}

// Roles de usuario
export const USER_ROLES = {
  ADMIN: "admin",
  EDITOR: "editor",
  USER: "user",
}

// Mapeo de roles a nombres legibles
export const USER_ROLE_NAMES = {
  [USER_ROLES.ADMIN]: "Administrador",
  [USER_ROLES.EDITOR]: "Editor",
  [USER_ROLES.USER]: "Usuario",
}

// Períodos de precios
export const PRICE_PERIODS = {
  MONTHLY: "monthly",
  YEARLY: "yearly",
  ONE_TIME: "one-time",
}

// Mapeo de períodos a nombres legibles
export const PRICE_PERIOD_NAMES = {
  [PRICE_PERIODS.MONTHLY]: "Mensual",
  [PRICE_PERIODS.YEARLY]: "Anual",
  [PRICE_PERIODS.ONE_TIME]: "Pago único",
}

// Idiomas
export const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
}

// Mapeo de idiomas a nombres legibles
export const LANGUAGE_NAMES = {
  [LANGUAGES.SPANISH]: "Español",
  [LANGUAGES.ENGLISH]: "Inglés",
}

// Temas
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
}

// Mapeo de temas a nombres legibles
export const THEME_NAMES = {
  [THEMES.LIGHT]: "Claro",
  [THEMES.DARK]: "Oscuro",
  [THEMES.SYSTEM]: "Sistema",
}

// Rutas
export const ROUTES = {
  HOME: "/",
  TOOLS: "/herramientas-ia",
  TOOL_DETAILS: (slug: string) => `/herramientas/${slug}`,
  CATEGORY: (slug: string) => `/herramientas/categoria/${slug}`,
  COMPARISON: (slug: string) => `/herramientas/comparar/${slug}`,
  RESOURCES: "/recursos",
  RESOURCE_DETAILS: (slug: string) => `/recursos/${slug}`,
  ABOUT: "/sobre-nosotros",
  CONTACT: "/contacto",
  LOGIN: "/login",
  REGISTER: "/registro",
  PROFILE: "/perfil",
  PRIVACY: "/politica-privacidad",
  TERMS: "/politica-cookies",
  AFFILIATE: "/aviso-afiliados",
  KIT: "/kit-digital",
  HOW_IT_WORKS: "/como-funciona",
  METHODOLOGY: "/metodologia-neuroscore",
}

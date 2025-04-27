/**
 * Constantes y guías para nomenclatura consistente en el proyecto
 *
 * Este archivo sirve como referencia para mantener la consistencia
 * en la nomenclatura de variables, funciones, componentes, etc.
 */

/**
 * Convenciones de nomenclatura:
 *
 * 1. Componentes React:
 *    - PascalCase: UserProfile, ToolCard, EmailSubscriptionForm
 *
 * 2. Archivos de componentes:
 *    - kebab-case: user-profile.tsx, tool-card.tsx, email-subscription-form.tsx
 *
 * 3. Hooks personalizados:
 *    - camelCase con prefijo "use": useAuth, useLocalStorage, useMediaQuery
 *
 * 4. Archivos de hooks:
 *    - kebab-case con prefijo "use-": use-auth.ts, use-local-storage.ts, use-media-query.ts
 *
 * 5. Funciones de utilidad:
 *    - camelCase: formatDate, calculateReadingTime, slugify
 *
 * 6. Constantes:
 *    - UPPER_SNAKE_CASE para constantes globales: API_URL, MAX_FILE_SIZE
 *    - PascalCase para enums: UserRole, SubscriptionTier
 *
 * 7. Tipos e interfaces:
 *    - PascalCase: User, Tool, SubscriptionPlan
 *    - Prefijo "I" para interfaces (opcional): IUser, ITool
 *    - Sufijo "Props" para props de componentes: ButtonProps, CardProps
 *
 * 8. Variables:
 *    - camelCase: userData, toolList, isLoading
 *
 * 9. Eventos:
 *    - camelCase con prefijo "handle": handleSubmit, handleClick, handleChange
 *
 * 10. Archivos de contexto:
 *     - kebab-case con sufijo "-context": auth-context.tsx, theme-context.tsx
 *
 * 11. Archivos de utilidades:
 *     - kebab-case: string-utils.ts, date-utils.ts
 *
 * 12. Archivos de API:
 *     - kebab-case: auth-api.ts, tools-api.ts
 */

// Ejemplos de nomenclatura correcta para referencia

// Tipos de componentes
export type ComponentProps = {
  // Props de componentes
}

// Enums
export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  USER = "user",
}

export enum SubscriptionTier {
  FREE = "free",
  PREMIUM = "premium",
  ENTERPRISE = "enterprise",
}

// Constantes globales
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.neuroworkai.com"
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024 // 5MB
export const DEFAULT_PAGINATION_LIMIT = 10

// Mapeo de categorías
export const CATEGORY_MAP = {
  writing: "Escritura",
  automation: "Automatización",
  productivity: "Productividad",
  communication: "Comunicación",
  analytics: "Análisis",
}

// Mapeo de estados
export const STATUS_MAP = {
  active: "Activo",
  pending: "Pendiente",
  inactive: "Inactivo",
}

// Rutas de navegación
export const ROUTES = {
  HOME: "/",
  TOOLS: "/herramientas-ia",
  TOOL_DETAILS: (slug: string) => `/herramientas/${slug}`,
  RESOURCES: "/recursos",
  RESOURCE_DETAILS: (slug: string) => `/recursos/${slug}`,
  ABOUT: "/sobre-nosotros",
  CONTACT: "/contacto",
  PRIVACY: "/politica-privacidad",
  TERMS: "/politica-cookies",
  AFFILIATE: "/aviso-afiliados",
}

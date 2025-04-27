/**
 * Configuración de analítica
 */

// ID de Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ""

// Configuración de eventos
export const ANALYTICS_EVENTS = {
  // Eventos de página
  PAGE_VIEW: "page_view",

  // Eventos de herramientas
  TOOL_VIEW: "tool_view",
  TOOL_CLICK: "tool_click",
  TOOL_AFFILIATE_CLICK: "tool_affiliate_click",
  TOOL_FAVORITE: "tool_favorite",
  TOOL_UNFAVORITE: "tool_unfavorite",
  TOOL_SHARE: "tool_share",

  // Eventos de comparativas
  COMPARISON_VIEW: "comparison_view",
  COMPARISON_TOOL_SELECT: "comparison_tool_select",

  // Eventos de recursos
  RESOURCE_VIEW: "resource_view",
  RESOURCE_DOWNLOAD: "resource_download",

  // Eventos de usuario
  USER_SIGNUP: "user_signup",
  USER_LOGIN: "user_login",

  // Eventos de formularios
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",

  // Eventos de kit digital
  KIT_DOWNLOAD: "kit_download",

  // Eventos de búsqueda
  SEARCH: "search",
  SEARCH_RESULTS: "search_results",
}

// Dimensiones personalizadas
export const CUSTOM_DIMENSIONS = {
  USER_TYPE: "user_type",
  LOGGED_IN: "logged_in",
  THEME: "theme",
  LANGUAGE: "language",
}

// Función para enviar eventos a Google Analytics
export function sendGAEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params)
  }
}

// Función para enviar eventos de página a Google Analytics
export function sendGAPageView(url: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

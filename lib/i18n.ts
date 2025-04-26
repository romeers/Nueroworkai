// Configuración básica de idiomas
export const languages = {
  es: { name: "Español", code: "es", default: true },
  en: { name: "English", code: "en", default: false },
}

export const defaultLanguage = "es"

// Traducciones comunes
export const translations = {
  es: {
    // Navegación
    home: "Inicio",
    tools: "Herramientas IA",
    resources: "Recursos",
    about: "Sobre Nosotros",
    contact: "Contacto",
    topTools: "Top Herramientas IA",
    discoverTools: "Descubrir Mejores Herramientas IA",

    // Botones comunes
    readMore: "Leer más",
    tryFree: "Probar gratis",
    seeDetails: "Ver detalles",
    downloadFree: "Descargar gratis",
    seeAll: "Ver todos",

    // Secciones de la página principal
    featuredTools: "Herramientas Destacadas",
    featuredToolsSubtitle: "Descubre las herramientas de IA más populares que están transformando el trabajo remoto.",
    seeAllTools: "Ver todas las herramientas",
    featuredResources: "Recursos Destacados",
    featuredResourcesSubtitle: "Descubre nuestros mejores recursos sobre productividad con IA para trabajo remoto.",
    seeAllResources: "Ver todos los recursos",
    trustBadgesTitle: "Herramientas de IA líderes confían en nuestros análisis",
    statsTitle: "NeuroWorkAI en números",
    statsSubtitle: "Datos que respaldan nuestra experiencia y compromiso con la calidad",
    testimonialsTitle: "Lo que dicen nuestros usuarios",
    testimonialsSubtitle: "Profesionales que han mejorado su productividad con nuestras recomendaciones",

    // CTA
    ctaTitle: "Potencia tu productividad con IA",
    ctaSubtitle:
      "Descarga nuestro Kit de Productividad con IA para Trabajo Remoto (2025) y comienza a trabajar mejor con IA desde hoy.",
    ctaButtonText: "Descargar Kit gratuito",
    emailPlaceholder: "Tu correo electrónico",
    ctaMicrocopy: "Sin spam · Descarga inmediata tras confirmar",

    // Footer
    privacyPolicy: "Política de Privacidad",
    cookiePolicy: "Política de Cookies",
    affiliateDisclosure: "Aviso de Afiliados",
    termsOfService: "Términos de Servicio",

    // Accesibilidad
    skipToContent: "Saltar al contenido principal",

    // Otras traducciones comunes
    category: "Categoría",
    rating: "Valoración",
    price: "Precio",
    free: "Gratis",
    premium: "Premium",
    date: "Fecha",
    author: "Autor",
    loading: "Cargando...",
  },
  en: {
    // Navigation
    home: "Home",
    tools: "AI Tools",
    resources: "Resources",
    about: "About Us",
    contact: "Contact",
    topTools: "Top AI Tools",
    discoverTools: "Discover Best AI Tools",

    // Common buttons
    readMore: "Read more",
    tryFree: "Try for free",
    seeDetails: "See details",
    downloadFree: "Download free",
    seeAll: "See all",

    // Main page sections
    featuredTools: "Featured Tools",
    featuredToolsSubtitle: "Discover the most popular AI tools that are transforming remote work.",
    seeAllTools: "See all tools",
    featuredResources: "Featured Resources",
    featuredResourcesSubtitle: "Discover our best resources on AI productivity for remote work.",
    seeAllResources: "See all resources",
    trustBadgesTitle: "Leading AI tools trust our analysis",
    statsTitle: "NeuroWorkAI in numbers",
    statsSubtitle: "Data that supports our experience and commitment to quality",
    testimonialsTitle: "What our users say",
    testimonialsSubtitle: "Professionals who have improved their productivity with our recommendations",

    // CTA
    ctaTitle: "Boost your productivity with AI",
    ctaSubtitle: "Download our AI Productivity Kit for Remote Work (2025) and start working better with AI today.",
    ctaButtonText: "Download free kit",
    emailPlaceholder: "Your email",
    ctaMicrocopy: "No spam · Immediate download after confirmation",

    // Footer
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    affiliateDisclosure: "Affiliate Disclosure",
    termsOfService: "Terms of Service",

    // Accessibility
    skipToContent: "Skip to main content",

    // Other common translations
    category: "Category",
    rating: "Rating",
    price: "Price",
    free: "Free",
    premium: "Premium",
    date: "Date",
    author: "Author",
    loading: "Loading...",
  },
}

// Función para obtener traducciones
export function getTranslation(lang: string, key: string): string {
  if (!translations[lang]) {
    lang = defaultLanguage
  }

  return translations[lang][key] || translations[defaultLanguage][key] || key
}

// Función para obtener el idioma del navegador
export function getBrowserLanguage(): string {
  if (typeof window === "undefined") return defaultLanguage

  const browserLang = navigator.language.split("-")[0]
  return languages[browserLang] ? browserLang : defaultLanguage
}

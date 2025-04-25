export const mainNavigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Herramientas",
    href: "/herramientas-ia",
    submenu: [
      { name: "Todas las herramientas", href: "/herramientas-ia" },
      { name: "Comparar herramientas", href: "/herramientas/comparar" },
    ],
  },
  { name: "Recursos", href: "/recursos" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
]

export const footerNavigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Herramientas", href: "/herramientas-ia" },
    { name: "Comparar Herramientas", href: "/herramientas/comparar" },
    { name: "Recursos", href: "/recursos" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  ],
  resources: [
    { name: "Guías prácticas", href: "/recursos?categoria=guias" },
    { name: "Prompts IA", href: "/recursos?categoria=prompts" },
    { name: "Automatización", href: "/recursos?categoria=automatizacion" },
    { name: "Plantillas gratuitas", href: "/recursos?categoria=plantillas" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "/politica-privacidad" },
    { name: "Política de Cookies", href: "/politica-cookies" },
    { name: "Aviso de Afiliados", href: "/aviso-afiliados" },
    { name: "Contacto", href: "/sobre-nosotros#contacto" },
  ],
}

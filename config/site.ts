/**
 * Configuración general del sitio
 */

export const siteConfig = {
  name: "NeuroWorkAI",
  description: "Descubre las mejores herramientas de IA para optimizar tu trabajo y productividad",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://neuroworkai.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/neuroworkai",
    github: "https://github.com/neuroworkai",
    linkedin: "https://linkedin.com/company/neuroworkai",
  },
  creator: {
    name: "NeuroWorkAI Team",
    email: "contacto@neuroworkai.com",
  },
  contact: {
    email: "contacto@neuroworkai.com",
    phone: "+34 123 456 789",
    address: "Madrid, España",
  },
  legal: {
    privacyPolicy: "/politica-privacidad",
    termsOfService: "/politica-cookies",
    affiliateDisclosure: "/aviso-afiliados",
  },
}

export const navigationConfig = {
  main: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Herramientas IA",
      href: "/herramientas-ia",
    },
    {
      title: "Reseñas",
      href: "/resenas",
    },
    {
      title: "Recursos",
      href: "/recursos",
    },
    {
      title: "Comparativas",
      href: "/comparativas",
    },
    {
      title: "Sobre Nosotros",
      href: "/sobre-nosotros",
    },
    {
      title: "Contacto",
      href: "/contacto",
    },
  ],
  footer: [
    {
      title: "Recursos",
      items: [
        {
          title: "Guías y Recursos",
          href: "/guias-recursos",
        },
        {
          title: "Kit Digital",
          href: "/kit-digital",
        },
        {
          title: "Top Herramientas IA",
          href: "/top-herramientas-ia",
        },
      ],
    },
    {
      title: "Empresa",
      items: [
        {
          title: "Sobre Nosotros",
          href: "/sobre-nosotros",
        },
        {
          title: "Metodología NeuroScore",
          href: "/metodologia-neuroscore",
        },
        {
          title: "Cómo Funciona",
          href: "/como-funciona",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          title: "Política de Privacidad",
          href: "/politica-privacidad",
        },
        {
          title: "Política de Cookies",
          href: "/politica-cookies",
        },
        {
          title: "Aviso de Afiliados",
          href: "/aviso-afiliados",
        },
      ],
    },
  ],
}

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/neuroworkai",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/neuroworkai",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/neuroworkai",
    icon: "instagram",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/neuroworkai",
    icon: "youtube",
  },
]

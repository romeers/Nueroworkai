import Link from "next/link"
// Import the Logo component and socialLinks
import { Logo } from "./logo"
import { socialLinks } from "@/lib/social-links"

interface FooterLink {
  href: string
  label: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface SiteFooterProps {
  logoAlt?: string
  tagline?: string
  navigationColumns?: FooterColumn[]
  showCta?: boolean
  ctaText?: string
  ctaHref?: string
  ctaSubtext?: string
  affiliateDisclosure?: string
  copyrightText?: string
  poweredByText?: string
  className?: string
}

export default function SiteFooter({
  logoAlt = "NeuroWorkAI Logo",
  tagline = "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.",
  navigationColumns = [
    {
      title: "Navegación",
      links: [
        { href: "/", label: "Inicio" },
        { href: "/herramientas-ia", label: "Herramientas" },
        { href: "/herramientas/comparar", label: "Comparar Herramientas" },
        { href: "/recursos", label: "Recursos" },
        { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { href: "/recursos?categoria=guias", label: "Guías prácticas" },
        { href: "/recursos?categoria=prompts", label: "Prompts IA" },
        { href: "/recursos?categoria=automatizacion", label: "Automatización" },
        { href: "/recursos?categoria=plantillas", label: "Plantillas gratuitas" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/politica-privacidad", label: "Política de Privacidad" },
        { href: "/politica-cookies", label: "Política de Cookies" },
        { href: "/aviso-afiliados", label: "Aviso de Afiliados" },
        { href: "mailto:bussines@neuroworkai.com", label: "Contacto" },
        { href: "/condiciones-servicio", label: "Condiciones de Servicio" },
        { href: "/kit-medios", label: "Kit de Medios" },
      ],
    },
  ],
  showCta = true,
  ctaText = "Descubrir Mejores Herramientas IA",
  ctaHref = "/herramientas/mejores",
  ctaSubtext = "Análisis actualizados 2025",
  affiliateDisclosure = "NeuroWorkAI participa en programas de afiliación. Esto significa que podemos recibir una comisión si compras a través de nuestros enlaces, sin costo adicional para ti.",
  copyrightText = `© ${new Date().getFullYear()} NeuroWorkAI. Todos los derechos reservados.`,
  poweredByText = "Desarrollado con ♥ | Powered by Vercel",
  className = "",
}: SiteFooterProps) {
  return (
    <footer
      className={`bg-secondary text-white py-16 ${className}`}
      role="contentinfo"
      aria-label="Pie de página del sitio"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {/* Logo and brand information */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-opacity duration-200 hover:opacity-90">
              <div className="w-32 h-auto">
                <Logo variant="white" className="w-full h-auto" priority={false} />
              </div>
            </Link>
            <p className="text-sm text-white/80 max-w-xs">{tagline}</p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.platform}
                    href={social.href}
                    className={`text-white ${social.hoverColor} transition-all duration-200 bg-white/10 p-2 rounded-full hover:bg-white/20 hover:scale-110`}
                    aria-label={social.ariaLabel}
                    title={`Síguenos en ${social.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.platform}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Navigation columns */}
          {navigationColumns.map((column) => (
            <nav key={column.title} aria-label={`Enlaces de ${column.title.toLowerCase()}`}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Social Media Section - Más visible */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Síguenos en redes sociales</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.platform}
                  href={social.href}
                  className={`text-white ${social.hoverColor} transition-all duration-200 bg-white/10 p-2 rounded-full hover:bg-white/20 hover:scale-110`}
                  aria-label={social.ariaLabel}
                  title={`Síguenos en ${social.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{social.platform}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA Section - Inline instead of floating */}
        {showCta && (
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              {ctaText}
            </Link>
            {ctaSubtext && <p className="text-sm text-white/70 mt-2">{ctaSubtext}</p>}
          </div>
        )}

        {/* Copyright and affiliate disclosure */}
        <div className="mt-8 pt-6 border-t border-white/10">
          {affiliateDisclosure && <p className="text-xs text-white/50 text-center">{affiliateDisclosure}</p>}
          <p className="text-center text-sm text-white/70 mt-4">{copyrightText}</p>
          {poweredByText && (
            <p className="text-center text-xs text-white/50 mt-2">
              {poweredByText.includes("Vercel") ? (
                <>
                  Desarrollado con ♥ |{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Powered by Vercel
                  </a>
                </>
              ) : (
                poweredByText
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}

import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import SafeImage from "./safe-image"

interface FooterLink {
  href: string
  label: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  platform: string
  href: string
  icon: React.ReactNode
  ariaLabel: string
}

interface SiteFooterProps {
  logoSrc?: string
  logoAlt?: string
  tagline?: string
  navigationColumns?: FooterColumn[]
  socialLinks?: SocialLink[]
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
  logoSrc = "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/logo%20%20texto%20transparente-eLlvV6wmzCjfkUskDOg0X8CielyUqJ.png",
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
      ],
    },
  ],
  socialLinks = [
    {
      platform: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61575664503316",
      icon: <Facebook className="h-5 w-5" />,
      ariaLabel: "Facebook de NeuroWorkAI",
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/neuroworkai",
      icon: <Instagram className="h-5 w-5" />,
      ariaLabel: "Instagram de NeuroWorkAI",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/company/neuroworksai/",
      icon: <Linkedin className="h-5 w-5" />,
      ariaLabel: "LinkedIn de NeuroWorkAI",
    },
    {
      platform: "Pinterest",
      href: "https://pin.it/5ruBArced",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M21 12c0 4.418 -4.03 8 -9 8a9.863 9.863 0 0 1 -4.255 -.949l-3.745 1.949l1.08 -3.098a7.902 7.902 0 0 1 -1.08 -3.902c0 -4.418 4.03 -8 9 -8s9 3.582 9 8z" />
        </svg>
      ),
      ariaLabel: "Pinterest de NeuroWorkAI",
    },
    {
      platform: "Twitter",
      href: "https://x.com/Neuroworkai",
      icon: <Twitter className="h-5 w-5" />,
      ariaLabel: "Twitter de NeuroWorkAI",
    },
    {
      platform: "YouTube",
      href: "https://www.youtube.com/@Neuroworkai",
      icon: <Youtube className="h-5 w-5" />,
      ariaLabel: "YouTube de NeuroWorkAI",
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
      className={`bg-secondary text-white py-12 md:py-16 ${className}`}
      role="contentinfo"
      aria-label="Pie de página del sitio"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {/* Logo and brand information */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-opacity duration-200 hover:opacity-90">
              <div className="w-20 h-auto">
                <SafeImage
                  src={logoSrc}
                  fallbackSrc="/public/neuroworkai-logo-white.png"
                  alt={logoAlt}
                  width={180}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Link>
            <p className="text-sm text-white/80 max-w-xs">{tagline}</p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  className="text-white hover:text-white/80 transition-colors duration-200"
                  aria-label={social.ariaLabel}
                  title={`Síguenos en ${social.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
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
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <Link
                key={social.platform}
                href={social.href}
                className="text-white hover:text-white/80 transition-colors duration-200 p-2"
                aria-label={social.ariaLabel}
                title={`Síguenos en ${social.platform}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.cloneElement(social.icon as React.ReactElement, { className: "h-8 w-8" })}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section - Inline instead of floating */}
        {showCta && (
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-3 h-12 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
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

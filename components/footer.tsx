import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { socialLinks } from "@/lib/social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12 sm:py-16" role="contentinfo" aria-label="Pie de página del sitio">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content - optimized grid for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {/* Logo and brand information */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="inline-block transition-opacity duration-200 hover:opacity-90"
              aria-label="NeuroWorkAI - Ir a inicio"
            >
              <div className="w-32 h-auto">
                <Logo variant="white" className="w-full h-auto" priority={false} />
              </div>
            </Link>
            <p className="text-sm text-white/80 max-w-xs">
              Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.
            </p>
            <div className="flex gap-3 mt-4" aria-label="Redes sociales">
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

          {/* Navigation links */}
          <nav aria-label="Enlaces de navegación del sitio">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ir a la página de inicio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/herramientas-ia"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Explorar herramientas de IA"
                >
                  Herramientas
                </Link>
              </li>
              <li>
                <Link
                  href="/herramientas/comparar"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Comparar diferentes herramientas"
                >
                  Comparar Herramientas
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Explorar recursos y guías"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Conocer más sobre NeuroWorkAI"
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources links */}
          <nav aria-label="Enlaces de recursos">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recursos?categoria=guias"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Descargar kit de herramientas IA"
                >
                  Kit de herramientas IA
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos?categoria=prompts"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver guía de prompts para IA"
                >
                  Guía de prompts
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos?categoria=analisis"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver comparativas imprimibles"
                >
                  Comparativas imprimibles
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos?categoria=plantillas"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Descargar plantillas gratuitas"
                >
                  Plantillas gratuitas
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal links */}
          <nav aria-label="Enlaces legales">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver política de privacidad"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver política de cookies"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-afiliados"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver aviso de afiliados"
                >
                  Aviso de Afiliados
                </Link>
              </li>
              <li>
                <a
                  href="mailto:bussines@neuroworkai.com"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Contactar con nosotros"
                >
                  Contacto
                </a>
              </li>
              <li>
                <Link
                  href="/condiciones-servicio"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver condiciones de servicio"
                >
                  Condiciones de Servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/kit-medios"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ver kit de medios"
                >
                  Kit de Medios
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* CTA Section - Improved for mobile */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg transition-all"
          >
            <Link
              href="/herramientas/mejores"
              className="inline-flex items-center gap-2"
              aria-label="Descubrir mejores herramientas IA"
            >
              Descubrir Mejores Herramientas IA
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-white/70 mt-2">Análisis actualizados {currentYear}</p>
        </div>

        {/* Copyright and affiliate disclosure */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">
            NeuroWorkAI participa en programas de afiliación. Esto significa que podemos recibir una comisión si compras
            a través de nuestros enlaces, sin costo adicional para ti.
          </p>
          <p className="text-center text-sm text-white/70 mt-4">
            &copy; {currentYear} NeuroWorkAI. Todos los derechos reservados.
          </p>
          <p className="text-center text-xs text-white/50 mt-2">
            Desarrollado con <span aria-hidden="true">♥</span>
            <span className="sr-only">amor</span> |{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Powered by Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

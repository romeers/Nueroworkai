import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import SafeImage from "./safe-image"
// Import the centralized navigation configuration
import { footerNavigation } from "@/lib/navigation"

export default function Footer() {
  const logoWhiteImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-3O92ImJsQbR0qsSBebSzRCV6dX8udd.png"

  return (
    <footer className="bg-secondary text-white py-16" role="contentinfo" aria-label="Pie de página del sitio">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {/* Logo and brand information */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block transition-opacity duration-200 hover:opacity-90"
              aria-label="NeuroWorkAI - Ir a inicio"
            >
              <div className="w-20 h-auto">
                <SafeImage
                  src={logoWhiteImage}
                  fallbackSrc="/neuroworkai-logo-white.png"
                  alt="NeuroWorkAI Logo"
                  width={180}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Link>
            <p className="text-sm text-white/80 max-w-xs">
              Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.
            </p>
            <div className="flex gap-3 mt-4" aria-label="Redes sociales">
              <Link
                href="#"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Facebook de NeuroWorkAI"
                title="Síguenos en Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Twitter de NeuroWorkAI"
                title="Síguenos en Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Instagram de NeuroWorkAI"
                title="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-white/80 transition-colors duration-200"
                aria-label="LinkedIn de NeuroWorkAI"
                title="Síguenos en LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation links */}
          <nav aria-label="Enlaces de navegación del sitio">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label={`Ir a ${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources links */}
          <nav aria-label="Enlaces de recursos">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav aria-label="Enlaces legales">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label={`Ver ${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CTA Section - Inline instead of floating */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <Link
            href="/herramientas/mejores"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="Descubrir mejores herramientas IA"
          >
            Descubrir Mejores Herramientas IA
          </Link>
          <p className="text-sm text-white/70 mt-2">Análisis actualizados 2025</p>
        </div>

        {/* Copyright and affiliate disclosure */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">
            NeuroWorkAI participa en programas de afiliación. Esto significa que podemos recibir una comisión si compras
            a través de nuestros enlaces, sin costo adicional para ti.
          </p>
          <p className="text-center text-sm text-white/70 mt-4">
            &copy; 2025 NeuroWorkAI. Todos los derechos reservados.
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

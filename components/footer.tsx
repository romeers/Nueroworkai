import Link from "next/link"
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import SafeImage from "./safe-image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const logoWhiteImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-3O92ImJsQbR0qsSBebSzRCV6dX8udd.png"

  const currentYear = new Date().getFullYear()

  // Enlaces de navegación organizados por categorías
  const navigationLinks = {
    main: [
      { name: "Inicio", href: "/" },
      { name: "Herramientas", href: "/herramientas-ia" },
      { name: "Herramientas Comparar", href: "/herramientas/comparar" },
      { name: "Recursos", href: "/recursos" },
      { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    ],
    resources: [
      { name: "Kit de herramientas IA", href: "/recursos?categoria=guias" },
      { name: "Guía de prompts", href: "/recursos?categoria=prompts" },
      { name: "Comparativas imprimibles", href: "/recursos?categoria=analisis" },
      { name: "Plantillas gratuitas", href: "/recursos?categoria=plantillas" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "/politica-privacidad" },
      { name: "Política de Cookies", href: "/politica-cookies" },
      { name: "Aviso de Afiliados", href: "/aviso-afiliados" },
      { name: "Contacto", href: "mailto:bussines@neuroworkai.com" },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61575664503316",
        icon: Facebook,
        ariaLabel: "Facebook de NeuroWorkAI",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/neuroworkai",
        icon: Instagram,
        ariaLabel: "Instagram de NeuroWorkAI",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/neuroworksai/",
        icon: Linkedin,
        ariaLabel: "LinkedIn de NeuroWorkAI",
      },
    ],
  }

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
              <div className="w-20 h-auto">
                <SafeImage
                  src={logoWhiteImage}
                  fallbackSrc="/neuroworkai-logo-white.png"
                  alt="NeuroWorkAI Logo"
                  width={120}
                  height={40}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Link>
            <p className="text-sm text-white/80 max-w-xs">
              Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.
            </p>
            <div className="flex gap-3 mt-4" aria-label="Redes sociales">
              {navigationLinks.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-200 bg-white/10 p-2 rounded-full hover:bg-white/20"
                  aria-label={item.ariaLabel}
                  title={`Síguenos en ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <nav aria-label="Enlaces de navegación del sitio">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigationLinks.main.map((item) => (
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
              {navigationLinks.resources.map((item) => (
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
              {navigationLinks.legal.map((item) => (
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

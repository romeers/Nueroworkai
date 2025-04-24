import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import SafeImage from "./safe-image"

export default function Footer() {
  const logoWhiteImage = "/logo-white.png"

  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <SafeImage
                src={logoWhiteImage}
                fallbackSrc="/neuroworkai-logo-white.png"
                alt="NeuroWorkAI Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300">
              Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/herramientas" className="text-gray-300 hover:text-white">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link href="/herramientas/comparar" className="text-gray-300 hover:text-white">
                  Comparar Herramientas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Recursos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/guias-recursos" className="text-gray-300 hover:text-white">
                  Kit de herramientas IA
                </Link>
              </li>
              <li>
                <Link href="/guias-recursos/guias/prompts" className="text-gray-300 hover:text-white">
                  Guía de prompts
                </Link>
              </li>
              <li>
                <Link href="/guias-recursos/recursos/comparativas" className="text-gray-300 hover:text-white">
                  Comparativas imprimibles
                </Link>
              </li>
              <li>
                <Link href="/guias-recursos/plantillas" className="text-gray-300 hover:text-white">
                  Plantillas gratuitas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/politica-privacidad" className="text-gray-300 hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-gray-300 hover:text-white">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/aviso-afiliados" className="text-gray-300 hover:text-white">
                  Aviso de Afiliados
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros#contacto" className="text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} NeuroWorkAI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import SafeImage from "./safe-image"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("common")
  const logoWhiteImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-3O92ImJsQbR0qsSBebSzRCV6dX8udd.png"

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
            <p className="text-sm text-white/80 max-w-xs">{t("description")}</p>
            <div className="flex gap-3 mt-4" aria-label="Redes sociales">
              <Link
                href="https://www.facebook.com/profile.php?id=61575664503316"
                className="text-white hover:text-white/80 transition-colors duration-200 bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Facebook de NeuroWorkAI"
                title="Síguenos en Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/neuroworkai"
                className="text-white hover:text-white/80 transition-colors duration-200 bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Instagram de NeuroWorkAI"
                title="Síguenos en Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/neuroworksai/"
                className="text-white hover:text-white/80 transition-colors duration-200 bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="LinkedIn de NeuroWorkAI"
                title="Síguenos en LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-4">
              <LanguageSwitcher variant="minimal" />
            </div>
          </div>

          {/* Navigation links */}
          <nav aria-label="Enlaces de navegación del sitio">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Ir a la página de inicio"
                >
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/herramientas-ia"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Explorar herramientas de IA"
                >
                  {t("navigation.tools")}
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
                  {t("navigation.resources")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-white/80 hover:text-white hover:underline transition duration-200 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Conocer más sobre NeuroWorkAI"
                >
                  {t("navigation.about")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources links */}
          <nav aria-label="Enlaces de recursos">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">{t("footer.resources")}</h3>
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">{t("footer.legal")}</h3>
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
                  {t("footer.contact")}
                </a>
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
              aria-label={t("cta.discoverTools")}
            >
              {t("cta.discoverTools")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-white/70 mt-2">Análisis actualizados {currentYear}</p>
        </div>

        {/* Copyright and affiliate disclosure */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">{t("footer.affiliateDisclosure")}</p>
          <p className="text-center text-sm text-white/70 mt-4">
            &copy; {currentYear} NeuroWorkAI. {t("footer.copyright")}.
          </p>
          <p className="text-center text-xs text-white/50 mt-2">
            Desarrollado con <span aria-hidden="true">♥</span>
            <span className="sr-only">amor</span> |{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t("footer.poweredBy")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

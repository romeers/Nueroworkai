"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import SafeImage from "./safe-image"
import T from "./t"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <SafeImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEUROWORKAI%20%281%29%20peq.PNG-6k1WtD9lyjkzTxj6ftmbF1uAgtYepR.png"
                alt="NeuroWorkAI Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Descubre y compara las mejores herramientas de IA para profesionales remotos. Análisis detallados,
              comparativas y recursos gratuitos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/neuroworkai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/neuroworkai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <T text="resources" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/herramientas-ia" className="text-gray-400 hover:text-white transition-colors">
                  <T text="tools" />
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-white transition-colors">
                  <T text="resources" />
                </Link>
              </li>
              <li>
                <Link href="/guias-recursos" className="text-gray-400 hover:text-white transition-colors">
                  Guías y Recursos
                </Link>
              </li>
              <li>
                <Link href="/comparativas" className="text-gray-400 hover:text-white transition-colors">
                  Comparativas
                </Link>
              </li>
              <li>
                <Link href="/metodologia-neuroscore" className="text-gray-400 hover:text-white transition-colors">
                  Metodología NeuroScore
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NeuroWorkAI</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">
                  <T text="about" />
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  <T text="contact" />
                </Link>
              </li>
              <li>
                <Link href="/aviso-afiliados" className="text-gray-400 hover:text-white transition-colors">
                  <T text="affiliateDisclosure" />
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">
                  <T text="privacyPolicy" />
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-gray-400 hover:text-white transition-colors">
                  <T text="cookiePolicy" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe las últimas novedades sobre herramientas de IA y recursos para trabajo remoto.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="bg-gray-800 border-gray-700 text-white rounded-l-md focus:ring-primary focus:border-primary"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-l-none">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                <T text="ctaMicrocopy" />
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} NeuroWorkAI. <T text="termsOfService" />.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-xs">Diseñado y desarrollado con ❤️ para profesionales remotos</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

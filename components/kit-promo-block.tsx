"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import TranslatedContent from "./translated-content"

export default function KitPromoBlock() {
  const { language } = useLanguage()

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <TranslatedContent
            content={{
              es: (
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  Kit de Productividad con IA para Trabajo Remoto (2025)
                </h2>
              ),
              en: (
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  AI Productivity Kit for Remote Work (2025)
                </h2>
              ),
            }}
          />

          <TranslatedContent
            content={{
              es: (
                <p className="text-gray-600 mb-6">
                  Descarga gratis nuestro kit completo con plantillas, guías de prompts, flujos de trabajo y más
                  recursos para maximizar tu productividad con IA.
                </p>
              ),
              en: (
                <p className="text-gray-600 mb-6">
                  Download our complete kit for free with templates, prompt guides, workflows, and more resources to
                  maximize your productivity with AI.
                </p>
              ),
            }}
          />

          <ul className="space-y-2 mb-8">
            <TranslatedContent
              content={{
                es: (
                  <>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>50+ prompts optimizados para diferentes herramientas de IA</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>10 plantillas para automatización con Zapier y Make</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Guía de optimización de reuniones con IA</span>
                    </li>
                  </>
                ),
                en: (
                  <>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>50+ optimized prompts for different AI tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>10 templates for automation with Zapier and Make</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>AI meeting optimization guide</span>
                    </li>
                  </>
                ),
              }}
            />
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <TranslatedContent
              content={{
                es: (
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/kit-digital" className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Descargar Kit Gratuito
                    </Link>
                  </Button>
                ),
                en: (
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/kit-digital" className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Free Kit
                    </Link>
                  </Button>
                ),
              }}
            />

            <TranslatedContent
              content={{
                es: (
                  <Button asChild variant="outline" size="lg">
                    <Link href="/guias-recursos" className="inline-flex items-center gap-2">
                      Ver todos los recursos
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ),
                en: (
                  <Button asChild variant="outline" size="lg">
                    <Link href="/guias-recursos" className="inline-flex items-center gap-2">
                      See all resources
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ),
              }}
            />
          </div>
        </div>

        <div className="relative h-64 md:h-auto">
          <img
            src="/ai-productivity-kit-ebook.png"
            alt="Kit de Productividad con IA"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

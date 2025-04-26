"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import TranslatedContent from "./translated-content"

export default function HeroSection() {
  const { language } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <TranslatedContent
              content={{
                es: (
                  <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
                    Potencia tu <span className="text-primary">productividad</span> con IA
                  </h1>
                ),
                en: (
                  <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
                    Boost your <span className="text-primary">productivity</span> with AI
                  </h1>
                ),
              }}
            />

            <TranslatedContent
              content={{
                es: (
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                    Descubre y compara las mejores herramientas de IA para profesionales remotos. Análisis detallados,
                    comparativas y recursos gratuitos para optimizar tu flujo de trabajo.
                  </p>
                ),
                en: (
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                    Discover and compare the best AI tools for remote professionals. Detailed analysis, comparisons, and
                    free resources to optimize your workflow.
                  </p>
                ),
              }}
            />

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <TranslatedContent
                content={{
                  es: (
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/herramientas-ia" className="inline-flex items-center gap-2">
                        Explorar herramientas
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ),
                  en: (
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/herramientas-ia" className="inline-flex items-center gap-2">
                        Explore tools
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ),
                }}
              />

              <TranslatedContent
                content={{
                  es: (
                    <Button asChild variant="outline" size="lg">
                      <Link href="/guias-recursos">Descargar recursos gratuitos</Link>
                    </Button>
                  ),
                  en: (
                    <Button asChild variant="outline" size="lg">
                      <Link href="/guias-recursos">Download free resources</Link>
                    </Button>
                  ),
                }}
              />
            </div>
          </div>

          <div className="relative">
            <img
              src="/neural-network-head.png"
              alt="NeuroWorkAI - Herramientas de IA para profesionales"
              className="w-full h-auto max-w-lg mx-auto lg:max-w-none rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100 hidden md:block">
              <TranslatedContent
                content={{
                  es: (
                    <p className="text-sm font-medium text-gray-900">+50 herramientas de IA analizadas y comparadas</p>
                  ),
                  en: <p className="text-sm font-medium text-gray-900">+50 AI tools analyzed and compared</p>,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

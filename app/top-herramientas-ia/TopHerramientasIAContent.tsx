"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Star, ArrowDown } from "lucide-react"
import SafeImage from "@/components/safe-image"
import KitPromoBlock from "@/components/kit-promo-block"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

// Top herramientas de IA
const topTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    slug: "notion-ai",
    score: 9.2,
    featured: true,
    isNew: false,
    affiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
  },
  {
    name: "ChatGPT",
    description: "Asistente conversacional de IA para múltiples tareas y generación de contenido.",
    imageUrl: "/stylized-chat-icon.png",
    category: "Escritura IA",
    slug: "chatgpt",
    score: 9.1,
    featured: true,
    isNew: false,
    affiliateUrl: "#",
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    slug: "zapier",
    score: 9.0,
    featured: true,
    isNew: false,
    affiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/grammarly-blue.png",
    category: "Escritura IA",
    slug: "grammarly",
    score: 8.9,
    featured: false,
    isNew: false,
    affiliateUrl: "#",
  },
  {
    name: "Fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "Reuniones",
    slug: "fireflies",
    score: 8.9,
    featured: false,
    isNew: false,
    affiliateUrl: "#",
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    slug: "clickup",
    score: 8.8,
    featured: true,
    isNew: false,
    affiliateUrl: "https://clickup.com/?af=123",
  },
  {
    name: "Make",
    description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
    imageUrl: "/abstract-geometric-logo.png",
    category: "Automatización",
    slug: "make",
    score: 8.8,
    featured: false,
    isNew: true,
    affiliateUrl: "#",
  },
  {
    name: "Jasper",
    description: "Generador de contenido con IA para marketing y comunicación.",
    imageUrl: "/ai-logo-blue.png",
    category: "Escritura IA",
    slug: "jasper",
    score: 8.7,
    featured: false,
    isNew: false,
    affiliateUrl: "#",
  },
  {
    name: "Otter.ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    imageUrl: "/otter-ai-logo-inspired-design.png",
    category: "Reuniones",
    slug: "otter-ai",
    score: 8.7,
    featured: false,
    isNew: true,
    affiliateUrl: "#",
  },
]

// Función para renderizar estrellas basadas en la puntuación
const renderStars = (score: number) => {
  const fullStars = Math.floor(score / 2)
  const halfStar = score % 2 >= 1
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
      ))}
      {halfStar && (
        <span className="relative">
          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" style={{ clipPath: "inset(0 50% 0 0)" }} />
          <Star className="absolute top-0 left-0 h-3.5 w-3.5 text-gray-300" style={{ clipPath: "inset(0 0 0 50%)" }} />
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-3.5 w-3.5 text-gray-300" />
      ))}
    </div>
  )
}

import type React from "react"

function ToolCard({ tool }: { tool: any }) {
  return (
    <div
      key={tool.slug}
      className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-6 flex flex-col items-center text-center h-full border"
    >
      <div className="relative mb-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <SafeImage
            src={tool.imageUrl}
            alt={`Logo de ${tool.name}`}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        {/* Badges */}
        <div className="absolute -top-2 -right-2 flex flex-col gap-1">
          {tool.featured && <Badge className="bg-primary text-white">Top Valorada</Badge>}
          {tool.isNew && <Badge className="bg-green-500 text-white">Nueva</Badge>}
        </div>
      </div>

      <h3 className="font-semibold text-gray-800 text-xl mb-2">{tool.name}</h3>

      {/* NeuroScore Badge */}
      <div className="flex flex-col items-center mb-3">
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-violet-700 mr-2">NeuroScore™:</span>
          <span className="text-sm font-bold">{tool.score}/10</span>
        </div>
        <div className="flex items-center mt-1">{renderStars(tool.score)}</div>
      </div>

      <p className="text-sm text-gray-600 mb-6 flex-grow">{tool.description}</p>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
          {tool.category}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2 w-full mt-auto">
        <Button asChild className="bg-primary hover:bg-primary/90 w-full">
          <Link
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener sponsored"
            className="flex items-center justify-center gap-1"
            data-umami-event={`affiliate-${tool.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            Probar Gratis
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/herramientas/${tool.slug}`} data-umami-event={`view-analysis-${tool.slug}`}>
            Ver análisis
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function TopHerramientasIAContent() {
  const toolsRef = useRef<HTMLDivElement>(null)
  const kitRef = useRef<HTMLDivElement>(null)

  // Scroll to sections
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #F9FAFB 0%, #E6F0FF 100%)",
        }}
      >
        {/* Abstract background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/neural-network-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
                Mejores Herramientas de IA para Productividad
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Descubre nuestras herramientas de IA más valoradas, seleccionadas para mejorar tu productividad remota.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection(toolsRef)}>
                  Explorar herramientas IA
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex items-center gap-2" onClick={() => scrollToSection(kitRef)}>
                  <Download className="h-4 w-4" />
                  Descargar Kit Gratuito
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">+50 herramientas analizadas · Actualizado 2025</p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <SafeImage
                  src="/abstract-brain-network.png"
                  alt="Ilustración de red neuronal representando herramientas de IA"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Tools Section */}
      <section ref={toolsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Herramientas Destacadas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestras herramientas de IA mejor valoradas según el NeuroScore™, nuestra metodología de evaluación basada
              en pruebas reales.
            </p>
          </div>

          {topTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topTools.slice(0, 9).map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-4">
                <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Próximamente nuevas herramientas</h3>
              <p className="text-gray-600 mb-6">
                Estamos seleccionando cuidadosamente las mejores herramientas de IA con programas de afiliados activos.
                Vuelve pronto para descubrir nuestro ranking de las mejores herramientas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sugerir una herramienta
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section ref={kitRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <KitPromoBlock />
          </div>
        </div>
      </section>

      {/* Why Trust Our Recommendations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">¿Por qué confiar en nuestras recomendaciones?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Nuestro equipo de expertos prueba cada herramienta durante al menos 2 semanas en entornos de trabajo real
              antes de evaluarla.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Evaluación Imparcial</h3>
                <p className="text-gray-600">
                  Analizamos cada herramienta según criterios objetivos y casos de uso reales.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Transparencia Total</h3>
                <p className="text-gray-600">
                  Divulgamos claramente nuestras relaciones de afiliados y metodología de evaluación.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Actualización Constante</h3>
                <p className="text-gray-600">
                  Revisamos regularmente nuestras evaluaciones para reflejar las últimas actualizaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Listo para potenciar tu productividad?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora todas nuestras herramientas IA y recursos prácticos para transformar tu flujo de trabajo.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/herramientas-ia" data-umami-event="top-tools-to-all-tools">
                  Ver todas las herramientas IA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

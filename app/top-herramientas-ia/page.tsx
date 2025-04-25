import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import SafeImage from "@/components/safe-image"
import KitPromoBlock from "@/components/kit-promo-block"

export const metadata: Metadata = {
  title: "Top Herramientas IA 2025 - Recomendaciones del editor",
  description:
    "Descubre las herramientas IA más recomendadas por expertos en productividad remota. Ver análisis + acceso gratuito.",
}

// Datos de ejemplo para las herramientas destacadas
const topTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    slug: "notion-ai",
    score: 9.2,
    affiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    badge: "Top 1",
  },
  {
    name: "ChatGPT",
    description: "Asistente conversacional de IA para múltiples tareas y generación de contenido.",
    imageUrl: "/stylized-chat-icon.png",
    category: "Escritura IA",
    slug: "chatgpt",
    score: 9.1,
    affiliateUrl: "#",
    badge: "Más usada",
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    slug: "zapier",
    score: 9.0,
    affiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    badge: "Favorita Freelancers",
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/grammarly-blue.png",
    category: "Escritura IA",
    slug: "grammarly",
    score: 8.9,
    affiliateUrl: "#",
  },
  {
    name: "Fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "Reuniones",
    slug: "fireflies",
    score: 8.9,
    affiliateUrl: "#",
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    slug: "clickup",
    score: 8.8,
    affiliateUrl: "https://clickup.com/?af=123",
  },
]

export default function TopHerramientasIAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Nuestras 10 herramientas IA favoritas para trabajo remoto (2025)
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Selección experta de las herramientas de inteligencia artificial que están revolucionando la productividad
              en el trabajo remoto.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              En NeuroWorkAI, probamos y analizamos cientos de herramientas de IA cada año. Estas son las que más nos
              han impresionado por su impacto en la productividad y eficiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Hand-picked Tools */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {topTools.map((tool) => (
              <div
                key={tool.slug}
                className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-5 flex flex-col items-center text-center h-full"
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
                    {tool.badge && <Badge className="bg-primary text-white">{tool.badge}</Badge>}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-800 text-lg mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{tool.description}</p>

                {/* NeuroScore */}
                {tool.score && (
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                      <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{tool.score}</span>
                      <span className="text-xs text-gray-500 ml-1">/ 10</span>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                    <Link
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="flex items-center justify-center gap-1"
                    >
                      Probar Gratis
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/herramientas/${tool.slug}`}>Ver análisis</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table (Placeholder) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Comparativa de Herramientas</h2>
            <p className="text-lg text-gray-600">
              Descubre las diferencias clave entre nuestras herramientas recomendadas.
            </p>
            {/* Add ResponsiveComparisonTable here */}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <KitPromoBlock />
        </div>
      </section>
    </>
  )
}

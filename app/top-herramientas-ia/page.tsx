import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import KitPromoBlock from "@/components/kit-promo-block"
import { BaseCard, CardImage, CardContent, CardFooter } from "@/components/ui/card"

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
              <BaseCard key={tool.slug}>
                <CardImage src={tool.imageUrl} alt={tool.name} aspectRatio="square" className="h-48" />
                <CardContent padding="medium">
                  <h3 className="text-xl font-bold text-secondary">{tool.name}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </CardContent>
                <CardFooter padding="small">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/herramientas/${tool.slug}`}>Ver análisis</Link>
                  </Button>
                  <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
                    <Link href={tool.affiliateUrl}>Probar gratis</Link>
                  </Button>
                </CardFooter>
              </BaseCard>
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

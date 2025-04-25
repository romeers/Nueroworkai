import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResourceCard from "@/components/resource-card"
import { FileText, FileSpreadsheet, FileArchive, Download } from "lucide-react"
import KitPromoBlock from "@/components/kit-promo-block"

// Datos de ejemplo para los recursos
const resources = [
  {
    title: "Kit de herramientas IA para trabajo remoto",
    description:
      "Una guía completa con las mejores herramientas de IA para optimizar tu trabajo remoto, organizadas por categoría y caso de uso.",
    imageUrl: "/ai-toolkit-icons.png",
    downloadUrl: "#",
    type: "PDF",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Guía de prompts para productividad",
    description:
      "Colección de prompts efectivos para ChatGPT, Notion AI, Jasper y otras herramientas de IA para maximizar tu productividad.",
    imageUrl: "/ai-prompt-examples.png",
    downloadUrl: "#",
    type: "PDF",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Comparativa: Herramientas de escritura con IA",
    description:
      "Tabla comparativa detallada de las principales herramientas de escritura con IA, con características, precios y casos de uso ideales.",
    imageUrl: "/ai-writing-tools-comparison.png",
    downloadUrl: "#",
    type: "PDF",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Plantillas de automatización para Zapier",
    description:
      "Colección de plantillas listas para usar en Zapier que automatizan tareas comunes para profesionales remotos.",
    imageUrl: "/automation-blueprint.png",
    downloadUrl: "#",
    type: "ZIP",
    icon: <FileArchive className="h-6 w-6 text-primary" />,
  },
  {
    title: "Checklist: Optimización de reuniones con IA",
    description:
      "Lista de verificación para preparar, conducir y dar seguimiento a reuniones remotas utilizando herramientas de IA.",
    imageUrl: "/ai-powered-meeting-checklist.png",
    downloadUrl: "#",
    type: "PDF",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Calendario editorial con IA para content marketing",
    description:
      "Plantilla de calendario editorial que integra herramientas de IA para optimizar la creación y distribución de contenido.",
    imageUrl: "/ai-integrated-content-calendar.png",
    downloadUrl: "#",
    type: "XLSX",
    icon: <FileSpreadsheet className="h-6 w-6 text-primary" />,
  },
]

// Datos de ejemplo para las guías
const guides = [
  {
    title: "Cómo implementar IA en tu flujo de trabajo diario",
    description: "Guía paso a paso para integrar herramientas de IA en tu rutina diaria y aumentar tu productividad.",
    slug: "implementar-ia-flujo-trabajo",
    category: "Productividad",
    readTime: "8 min",
  },
  {
    title: "Automatización para principiantes: Primeros pasos con Zapier",
    description:
      "Aprende a crear tus primeras automatizaciones y conectar tus aplicaciones favoritas sin escribir código.",
    slug: "automatizacion-principiantes-zapier",
    category: "Automatización",
    readTime: "12 min",
  },
  {
    title: "Mejores prácticas para reuniones remotas con IA",
    description:
      "Descubre cómo utilizar herramientas de IA para hacer tus reuniones remotas más productivas y efectivas.",
    slug: "mejores-practicas-reuniones-remotas-ia",
    category: "Reuniones",
    readTime: "10 min",
  },
  {
    title: "Guía definitiva de prompts para ChatGPT y Notion AI",
    description:
      "Aprende a crear prompts efectivos para obtener los mejores resultados de las herramientas de IA generativa.",
    slug: "guia-definitiva-prompts-chatgpt-notion-ai",
    category: "Escritura IA",
    readTime: "15 min",
  },
]

export default function GuiasRecursosPage() {
  const ebookImage = "/ai-productivity-ebook.png"

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Guías y Recursos
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descarga guías, plantillas y recursos gratuitos para potenciar tu productividad con IA.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <KitPromoBlock />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="resources" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="resources">Recursos Descargables</TabsTrigger>
              <TabsTrigger value="guides">Guías Prácticas</TabsTrigger>
            </TabsList>

            <TabsContent value="resources" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <ResourceCard
                    key={resource.title}
                    title={resource.title}
                    description={resource.description}
                    imageUrl={resource.imageUrl}
                    downloadUrl={resource.downloadUrl}
                    type={resource.type}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guias-recursos/guias/${guide.slug}`}
                    className="block rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{guide.category}</Badge>
                      <span className="text-sm text-gray-500">{guide.readTime} de lectura</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{guide.title}</h3>
                    <p className="mt-2 text-gray-600">{guide.description}</p>
                    <p className="mt-4 text-primary font-medium">Leer guía →</p>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold text-secondary">Recursos por Categoría</h2>
            <p className="mt-4 text-gray-600">
              Explora recursos específicos para diferentes áreas de productividad con IA.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/guias-recursos/categoria/escritura-ia"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">Escritura IA</h3>
              <p className="mt-2 text-center text-sm text-gray-600">Recursos para mejorar tu escritura con IA</p>
            </Link>

            <Link
              href="/guias-recursos/categoria/automatizacion"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <FileArchive className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">Automatización</h3>
              <p className="mt-2 text-center text-sm text-gray-600">Plantillas y guías para automatizar tareas</p>
            </Link>

            <Link
              href="/guias-recursos/categoria/gestion-tareas"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <FileSpreadsheet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">Gestión de Tareas</h3>
              <p className="mt-2 text-center text-sm text-gray-600">Recursos para organizar proyectos con IA</p>
            </Link>

            <Link
              href="/guias-recursos/categoria/reuniones"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">Reuniones</h3>
              <p className="mt-2 text-center text-sm text-gray-600">Optimiza tus reuniones con herramientas IA</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Necesitas ayuda personalizada?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestras reseñas detalladas o contáctanos para recibir recomendaciones adaptadas a tus necesidades
              específicas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/herramientas">Ver herramientas</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/sobre-nosotros">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

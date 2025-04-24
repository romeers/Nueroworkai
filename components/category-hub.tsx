import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToolCard from "@/components/tool-card"
import CategoryLeadMagnet from "@/components/category-lead-magnet"
import ResponsiveComparisonTable from "@/components/responsive-comparison-table"
import { ArrowRight } from "lucide-react"

interface CategoryHubProps {
  category: {
    slug: string
    name: string
    description: string
    icon: string
  }
  tools: any[]
  comparisons: any[]
  guides: any[]
  leadMagnet: any
}

export default function CategoryHub({ category, tools, comparisons, guides, leadMagnet }: CategoryHubProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12 rounded-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <span className="mr-2 text-xl">{category.icon}</span>
                Categoría
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
                Herramientas de {category.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href={`/herramientas/categoria/${category.slug}/mejores`}>Ver Mejores Herramientas</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`/comparativas/categoria/${category.slug}`}>Comparar Herramientas</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative h-64 w-64 flex items-center justify-center rounded-full bg-primary/10 p-8">
                <span className="text-8xl">{category.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      {leadMagnet && (
        <section>
          <CategoryLeadMagnet
            category={leadMagnet.category}
            title={leadMagnet.title}
            description={leadMagnet.description}
            bulletPoints={leadMagnet.bulletPoints}
            imageUrl={leadMagnet.imageUrl}
            formId={leadMagnet.formId}
          />
        </section>
      )}

      {/* Content Tabs */}
      <section>
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            <TabsTrigger value="tools">Herramientas</TabsTrigger>
            <TabsTrigger value="comparisons">Comparativas</TabsTrigger>
            <TabsTrigger value="guides">Guías de Uso</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-secondary">Mejores Herramientas de {category.name}</h2>
              <Button asChild variant="outline" size="sm">
                <Link href={`/herramientas/categoria/${category.slug}`} className="flex items-center">
                  Ver todas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tools.slice(0, 3).map((tool) => (
                <ToolCard
                  key={tool.slug}
                  name={tool.name}
                  description={tool.description}
                  imageUrl={tool.imageUrl}
                  category={tool.category}
                  url={`/herramientas/${tool.slug}`}
                  featured={tool.featured}
                  score={tool.score}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparisons" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-secondary">Comparativas de {category.name}</h2>
              <Button asChild variant="outline" size="sm">
                <Link href={`/comparativas/categoria/${category.slug}`} className="flex items-center">
                  Ver todas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {comparisons.length > 0 && (
              <ResponsiveComparisonTable
                category={category.name}
                tools={comparisons[0].tools}
                features={comparisons[0].features}
              />
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {comparisons.slice(0, 3).map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/comparativas/${comparison.slug}`}
                  className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-secondary">{comparison.title}</h3>
                  <p className="mt-2 text-gray-600">{comparison.description}</p>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-secondary">Guías de Uso para {category.name}</h2>
              <Button asChild variant="outline" size="sm">
                <Link href={`/guias-recursos/categoria/${category.slug}`} className="flex items-center">
                  Ver todas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {guides.slice(0, 3).map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guias-recursos/guias/${guide.slug}`}
                  className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {guide.readTime} de lectura
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{guide.title}</h3>
                  <p className="mt-2 text-gray-600">{guide.description}</p>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

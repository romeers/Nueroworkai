import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Guías Prácticas de IA | NeuroWorkAI",
  description:
    "Descubre nuestras guías prácticas sobre cómo implementar y aprovechar la inteligencia artificial en tu trabajo y negocio.",
}

export default function GuiasPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Guías Prácticas de IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Aprende a implementar y aprovechar la inteligencia artificial en tu trabajo y negocio con nuestras guías
              detalladas.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              <Link
                href="/guias-recursos/guias/implementar-ia-flujo-trabajo"
                className="block rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Productividad</Badge>
                  <span className="text-sm text-gray-500">10 min de lectura</span>
                </div>
                <h3 className="text-xl font-bold text-secondary">Cómo implementar IA en tu flujo de trabajo diario</h3>
                <p className="mt-2 text-gray-600">
                  Guía paso a paso para integrar herramientas de IA en tus procesos diarios y aumentar tu productividad
                  sin necesidad de ser un experto técnico.
                </p>
                <div className="mt-4 flex items-center text-primary font-medium">
                  Leer guía <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">¿Buscas herramientas de IA para implementar?</h2>
            <p className="text-gray-600 mb-8">
              Explora nuestra selección de las mejores herramientas de IA para diferentes casos de uso y necesidades.
            </p>
            <Button asChild size="lg">
              <Link href="/herramientas">Ver herramientas de IA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

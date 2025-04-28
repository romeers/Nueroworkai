"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import EnhancedCTA from "@/components/enhanced-cta"

// Añadir esta línea para importar los datos de herramientas
import { useEffect } from "react"

// Resto del código se mantiene igual hasta la definición del componente
import { Scale } from "lucide-react"

export default function CompararPage() {
  const [selectedTools, setSelectedTools] = useState<string[]>(["", ""])
  const router = useRouter()
  const [availableTools, setAvailableTools] = useState([])
  const [popularComparisons, setPopularComparisons] = useState([])
  const [loading, setLoading] = useState(true)

  // Cargar datos de herramientas y comparaciones populares
  useEffect(() => {
    async function loadData() {
      try {
        // Cargar herramientas
        const toolsResponse = await fetch("/api/tools")
        const toolsData = await toolsResponse.json()

        if (toolsData.success) {
          setAvailableTools(toolsData.tools)
        }

        // Cargar comparaciones populares
        const comparisonsResponse = await fetch("/api/comparisons/popular")
        const comparisonsData = await comparisonsResponse.json()

        if (comparisonsData.success) {
          setPopularComparisons(comparisonsData.comparisons)
        }
      } catch (error) {
        console.error("Error cargando datos:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleToolChange = (value: string, index: number) => {
    const newSelectedTools = [...selectedTools]
    newSelectedTools[index] = value
    setSelectedTools(newSelectedTools)
  }

  const addTool = () => {
    if (selectedTools.length < 4) {
      setSelectedTools([...selectedTools, ""])
    }
  }

  const removeTool = (index: number) => {
    if (selectedTools.length > 2) {
      const newSelectedTools = [...selectedTools]
      newSelectedTools.splice(index, 1)
      setSelectedTools(newSelectedTools)
    }
  }

  const compareTools = () => {
    // Filtrar herramientas seleccionadas y válidas
    const validTools = selectedTools.filter((tool) => tool !== "")

    if (validTools.length >= 2) {
      // Crear URL para la comparación
      const compareUrl = `/herramientas/comparar/${validTools.join("-vs-")}`
      router.push(compareUrl)
    }
  }

  const isCompareDisabled = selectedTools.filter((tool) => tool !== "").length < 2

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Comparador de Herramientas IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Compara lado a lado las mejores herramientas de productividad con IA para encontrar la solución perfecta
              para tu trabajo remoto.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Comparison Selector */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-secondary">Selecciona las herramientas a comparar</h2>

              {loading ? (
                <div className="py-4 text-center">Cargando herramientas disponibles...</div>
              ) : (
                <>
                  <div className="space-y-4">
                    {selectedTools.map((selectedTool, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Select value={selectedTool} onValueChange={(value) => handleToolChange(value, index)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona una herramienta" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTools.map((tool: any) => (
                              <SelectItem key={tool.slug} value={tool.slug}>
                                {tool.name} ({tool.category})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {index >= 2 && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeTool(index)}
                            className="flex-shrink-0"
                            aria-label="Eliminar herramienta"
                          >
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
                              className="h-4 w-4"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedTools.length < 4 && (
                      <Button
                        variant="outline"
                        onClick={addTool}
                        className="text-sm"
                        aria-label="Añadir otra herramienta"
                      >
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        Añadir otra herramienta
                      </Button>
                    )}

                    <Button
                      onClick={compareTools}
                      disabled={isCompareDisabled}
                      className="ml-auto bg-primary hover:bg-primary/90"
                      aria-label="Comparar herramientas seleccionadas"
                    >
                      Comparar herramientas
                    </Button>
                  </div>

                  <p className="mt-4 text-xs text-gray-500">
                    Puedes comparar entre 2 y 4 herramientas simultáneamente.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">Comparativas Populares</h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubre nuestros análisis detallados de las herramientas más buscadas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              <div className="col-span-full text-center py-8">Cargando comparativas populares...</div>
            ) : popularComparisons.length > 0 ? (
              popularComparisons.map((comparison: any) => (
                <Link
                  key={comparison.slug}
                  href={`/herramientas/comparar/${comparison.slug}`}
                  className="group rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-semibold text-secondary group-hover:text-primary">
                    {comparison.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{comparison.description}</p>
                  <span className="inline-flex items-center text-primary">
                    Ver comparativa
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              ))
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center col-span-full">
                <div className="mb-4">
                  <Scale className="h-12 w-12 text-blue-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Próximamente nuevas comparativas</h3>
                <p className="text-gray-600 mb-6">
                  Estamos preparando comparativas detalladas entre las mejores herramientas de IA. Vuelve pronto para
                  descubrir nuestros análisis.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sugerir una comparativa
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">Comparativas por Categoría</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explora comparativas específicas para cada tipo de herramienta.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/herramientas/comparar/categoria/escritura-ia"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-secondary">Escritura IA</h3>
              <p className="mt-2 text-center text-sm text-gray-600">
                Comparativas entre herramientas de escritura y generación de contenido
              </p>
            </Link>

            <Link
              href="/herramientas/comparar/categoria/automatizacion"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-secondary">Automatización</h3>
              <p className="mt-2 text-center text-sm text-gray-600">
                Comparativas entre plataformas de automatización y flujos de trabajo
              </p>
            </Link>

            <Link
              href="/herramientas/comparar/categoria/gestion-tareas"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-secondary">Gestión de Tareas</h3>
              <p className="mt-2 text-center text-sm text-gray-600">
                Comparativas entre herramientas de gestión de proyectos y tareas
              </p>
            </Link>

            <Link
              href="/herramientas/comparar/categoria/reuniones"
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-secondary">Reuniones</h3>
              <p className="mt-2 text-center text-sm text-gray-600">
                Comparativas entre herramientas de transcripción y análisis de reuniones
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EnhancedCTA
        title="¿No encuentras lo que buscas?"
        subtitle="Explora nuestras reseñas detalladas de cada herramienta o contáctanos para recomendaciones personalizadas."
        primaryButtonText="Ver todas las herramientas"
        primaryButtonUrl="/herramientas"
        secondaryButtonText="Contactar"
        secondaryButtonUrl="/sobre-nosotros#contacto"
        bgColor="primary"
      />
    </>
  )
}

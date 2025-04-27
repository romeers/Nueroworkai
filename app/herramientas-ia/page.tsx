import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { getCachedCategories, getCachedAllTools, searchTools } from "@/lib/db"
import HerramientasIAPageClient from "./HerramientasIAPageClient"

export const metadata: Metadata = generateMetadata({
  title: "Herramientas de Productividad con IA",
  description:
    "Explora y prueba las mejores herramientas de IA para optimizar tu trabajo remoto. Análisis detallados y actualizados 2025.",
  keywords:
    "herramientas IA, productividad, trabajo remoto, Notion AI, Zapier, ClickUp, ChatGPT, automatización, IA para trabajo",
})

export default async function HerramientasIAPage({
  searchParams,
}: { searchParams: { categoria?: string; q?: string } }) {
  // Obtener categorías y herramientas de la base de datos
  const categories = await getCachedCategories()

  const searchQuery = searchParams.q || ""

  let tools

  if (searchQuery) {
    // Si hay una búsqueda, usar la función de búsqueda
    tools = await searchTools(searchQuery)
  } else {
    // Si no hay búsqueda, obtener todas las herramientas
    tools = await getCachedAllTools()
  }

  return <HerramientasIAPageClient initialSearchParams={searchParams} tools={tools} categories={categories} />
}

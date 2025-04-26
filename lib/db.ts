import { cache } from "react"
import * as staticData from "./static-data"

// Función para obtener todas las herramientas
export const getCachedAllTools = cache(async () => {
  return staticData.getAllTools()
})

// Función para obtener herramientas destacadas
export const getCachedFeaturedTools = cache(async (limit = 6) => {
  return staticData.getFeaturedTools(limit)
})

// Función para obtener herramientas por categoría
export const getCachedToolsByCategory = cache(async (categorySlug: string) => {
  return staticData.getToolsByCategory(categorySlug)
})

// Función para obtener una herramienta por slug
export const getCachedToolBySlug = cache(async (slug: string) => {
  return staticData.getToolBySlug(slug)
})

// Función para obtener una herramienta por ID
export const getCachedToolById = cache(async (id: number) => {
  return staticData.getToolById(id)
})

// Función para obtener todas las categorías
export const getCachedCategories = cache(async () => {
  return staticData.getAllCategories()
})

// Función para obtener una categoría por slug
export const getCachedCategoryBySlug = cache(async (slug: string) => {
  return staticData.getCategoryBySlug(slug)
})

// Función para obtener comparaciones populares
export const getCachedPopularComparisons = cache(async (limit = 5) => {
  return staticData.getPopularComparisons(limit)
})

// Función para obtener una comparación por slug
export const getCachedComparisonBySlug = cache(async (slug: string) => {
  return staticData.getComparisonBySlug(slug)
})

// Función para obtener recursos
export const getCachedResources = cache(async (limit = 10) => {
  return staticData.getResources(limit)
})

// Función para obtener un recurso por slug
export const getCachedResourceBySlug = cache(async (slug: string) => {
  return staticData.getResourceBySlug(slug)
})

// Función para buscar herramientas
export const searchTools = async (query: string) => {
  return staticData.searchTools(query)
}

// Exportar una función de consulta simulada para mantener compatibilidad
export const query = async () => {
  console.warn("La función query() está deshabilitada en modo sin base de datos")
  return []
}

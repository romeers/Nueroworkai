/**
 * Servicio para gestionar herramientas
 */

import { apiClient } from "./api-client"

// Tipos
export interface Tool {
  id: number
  name: string
  slug: string
  description: string
  long_description?: string
  category_id: number
  category_name: string
  image_url: string
  affiliate_url?: string
  score?: number
  pros?: string[]
  cons?: string[]
  features?: ToolFeature[]
  pricing?: ToolPricing[]
  tags?: string[]
  verified?: boolean
  special_offer?: string
  why_we_recommend?: string
}

export interface ToolFeature {
  name: string
  description: string
  image_url?: string
}

export interface ToolPricing {
  name: string
  price: number
  period: "monthly" | "yearly" | "one-time"
  features: string[]
  popular?: boolean
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  icon?: string
}

export interface ToolsFilter {
  category?: string
  search?: string
  sort?: "name" | "score" | "created_at"
  order?: "asc" | "desc"
  page?: number
  limit?: number
}

export interface ToolsResponse {
  tools: Tool[]
  total: number
  page: number
  limit: number
  totalPages: number
}

/**
 * Obtener todas las herramientas
 */
export async function getAllTools(filters?: ToolsFilter): Promise<ToolsResponse> {
  const { data } = await apiClient.get<ToolsResponse>("/api/tools", { params: filters })
  return data
}

/**
 * Obtener una herramienta por slug
 */
export async function getToolBySlug(slug: string): Promise<Tool> {
  const { data } = await apiClient.get<Tool>(`/api/tools/${slug}`)
  return data
}

/**
 * Obtener herramientas destacadas
 */
export async function getFeaturedTools(limit = 6): Promise<Tool[]> {
  const { data } = await apiClient.get<Tool[]>("/api/tools/featured", { params: { limit } })
  return data
}

/**
 * Obtener herramientas populares
 */
export async function getPopularTools(limit = 6): Promise<Tool[]> {
  const { data } = await apiClient.get<Tool[]>("/api/tools/popular", { params: { limit } })
  return data
}

/**
 * Obtener herramientas por categoría
 */
export async function getToolsByCategory(categorySlug: string, limit = 10): Promise<Tool[]> {
  const { data } = await apiClient.get<Tool[]>(`/api/categories/${categorySlug}/tools`, { params: { limit } })
  return data
}

/**
 * Obtener todas las categorías
 */
export async function getAllCategories(): Promise<Category[]> {
  const { data } = await apiClient.get<Category[]>("/api/categories")
  return data
}

/**
 * Obtener una categoría por slug
 */
export async function getCategoryBySlug(slug: string): Promise<Category> {
  const { data } = await apiClient.get<Category>(`/api/categories/${slug}`)
  return data
}

/**
 * Obtener herramientas relacionadas
 */
export async function getRelatedTools(toolId: number, limit = 4): Promise<Tool[]> {
  const { data } = await apiClient.get<Tool[]>(`/api/tools/${toolId}/related`, { params: { limit } })
  return data
}

/**
 * Obtener comparativas populares
 */
export async function getPopularComparisons(limit = 5): Promise<{ id: number; tools: Tool[] }[]> {
  const { data } = await apiClient.get<{ id: number; tools: Tool[] }[]>("/api/comparisons/popular", {
    params: { limit },
  })
  return data
}

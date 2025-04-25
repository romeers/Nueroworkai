import { neon, neonConfig } from "@neondatabase/serverless"
import { unstable_cache } from "next/cache"

// Configuración de Neon para entornos serverless
neonConfig.fetchConnectionCache = true

// Crear cliente SQL con la URL de conexión
const sql = neon(process.env.DATABASE_URL!)

// Función para ejecutar consultas SQL
export async function query(query: string, params: any[] = []) {
  try {
    return await sql(query, params)
  } catch (error) {
    console.error("Error ejecutando consulta SQL:", error)
    throw error
  }
}

// Funciones para categorías
export async function getAllCategories() {
  return await query(`
    SELECT id, name, slug, icon 
    FROM categories 
    ORDER BY name ASC
  `)
}

export const getCachedCategories = unstable_cache(
  async () => {
    return await getAllCategories()
  },
  ["all-categories"],
  { revalidate: 3600 }, // Revalidar cada hora
)

// Funciones para herramientas
export async function getToolsByCategory(categorySlug: string) {
  return await query(
    `
    SELECT t.id, t.name, t.slug, t.description, t.image_url, c.name as category, t.score, t.featured, t.is_new, t.affiliate_url
    FROM tools t
    JOIN categories c ON t.category_id = c.id
    WHERE c.slug = $1
    ORDER BY t.score DESC
  `,
    [categorySlug],
  )
}

export const getCachedToolsByCategory = unstable_cache(
  async (categorySlug: string) => {
    return await getToolsByCategory(categorySlug)
  },
  ["tools-by-category"],
  { revalidate: 3600 },
)

export async function getAllTools() {
  return await query(`
    SELECT t.id, t.name, t.slug, t.description, t.image_url, c.name as category, t.score, t.featured, t.is_new, t.affiliate_url
    FROM tools t
    JOIN categories c ON t.category_id = c.id
    ORDER BY t.score DESC
  `)
}

export const getCachedAllTools = unstable_cache(
  async () => {
    return await getAllTools()
  },
  ["all-tools"],
  { revalidate: 3600 },
)

export async function getToolBySlug(slug: string) {
  const tools = await query(
    `
    SELECT t.*, c.name as category_name, c.slug as category_slug
    FROM tools t
    JOIN categories c ON t.category_id = c.id
    WHERE t.slug = $1
  `,
    [slug],
  )

  if (tools.length === 0) {
    return null
  }

  const tool = tools[0]

  // Obtener pros y contras
  const pros = await query(
    `
    SELECT description FROM tool_pros_cons
    WHERE tool_id = $1 AND type = 'pro'
    ORDER BY id ASC
  `,
    [tool.id],
  )

  const cons = await query(
    `
    SELECT description FROM tool_pros_cons
    WHERE tool_id = $1 AND type = 'con'
    ORDER BY id ASC
  `,
    [tool.id],
  )

  // Obtener características
  const features = await query(
    `
    SELECT name, description, image_url FROM tool_features
    WHERE tool_id = $1
    ORDER BY id ASC
  `,
    [tool.id],
  )

  // Obtener planes de precios
  const pricingPlans = await query(
    `
    SELECT pp.id, pp.plan_name, pp.price, pp.recommended, pp.affiliate_url
    FROM pricing_plans pp
    WHERE pp.tool_id = $1
    ORDER BY pp.id ASC
  `,
    [tool.id],
  )

  // Para cada plan, obtener sus características
  for (const plan of pricingPlans) {
    const planFeatures = await query(
      `
      SELECT description FROM pricing_plan_features
      WHERE pricing_plan_id = $1
      ORDER BY id ASC
    `,
      [plan.id],
    )

    plan.features = planFeatures.map((f: any) => f.description)
  }

  // Obtener reseñas
  const reviews = await query(
    `
    SELECT author, rating, title, comment, review_date, helpful_count, unhelpful_count
    FROM reviews
    WHERE tool_id = $1
    ORDER BY review_date DESC
  `,
    [tool.id],
  )

  // Obtener tags
  const tags = await query(
    `
    SELECT t.name
    FROM tags t
    JOIN tool_tags tt ON t.id = tt.tag_id
    WHERE tt.tool_id = $1
    ORDER BY t.name ASC
  `,
    [tool.id],
  )

  // Obtener herramientas relacionadas (de la misma categoría)
  const relatedTools = await query(
    `
    SELECT t.id, t.name, t.slug, t.description, t.image_url, c.name as category, t.score
    FROM tools t
    JOIN categories c ON t.category_id = c.id
    WHERE c.id = $1 AND t.id != $2
    ORDER BY t.score DESC
    LIMIT 3
  `,
    [tool.category_id, tool.id],
  )

  return {
    ...tool,
    pros: pros.map((p: any) => p.description),
    cons: cons.map((c: any) => c.description),
    features,
    pricing: pricingPlans,
    reviews,
    tags: tags.map((t: any) => t.name),
    relatedTools,
  }
}

export const getCachedToolBySlug = unstable_cache(
  async (slug: string) => {
    return await getToolBySlug(slug)
  },
  ["tool-by-slug"],
  { revalidate: 3600 },
)

// Funciones para comparaciones
export async function getPopularComparisons(limit = 4) {
  return await query(
    `
    SELECT c.id, c.slug, c.title, c.description, c.view_count,
           t1.name as tool1_name, t1.slug as tool1_slug,
           t2.name as tool2_name, t2.slug as tool2_slug
    FROM comparisons c
    JOIN tools t1 ON c.tool_id_1 = t1.id
    JOIN tools t2 ON c.tool_id_2 = t2.id
    ORDER BY c.view_count DESC
    LIMIT $1
  `,
    [limit],
  )
}

export const getCachedPopularComparisons = unstable_cache(
  async (limit = 4) => {
    return await getPopularComparisons(limit)
  },
  ["popular-comparisons"],
  { revalidate: 3600 },
)

// Función de búsqueda
export async function searchTools(query: string) {
  return await sql(
    `
    SELECT t.id, t.name, t.slug, t.description, t.image_url, c.name as category, t.score
    FROM tools t
    JOIN categories c ON t.category_id = c.id
    WHERE 
      t.name ILIKE $1 OR 
      t.description ILIKE $1 OR
      c.name ILIKE $1
    ORDER BY t.score DESC
  `,
    [`%${query}%`],
  )
}

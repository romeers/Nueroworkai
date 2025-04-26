import { NextResponse } from "next/server"
import { sql } from "@/lib/db-config"

export async function GET() {
  try {
    const results: any = {}

    // Verificar tabla de categorías
    const categories = await sql`SELECT COUNT(*) as count FROM categories`
    results.categories = {
      count: categories[0].count,
      sample: await sql`SELECT id, name, slug FROM categories ORDER BY name LIMIT 5`,
    }

    // Verificar tabla de herramientas
    const tools = await sql`SELECT COUNT(*) as count FROM tools`
    results.tools = {
      count: tools[0].count,
      sample: await sql`
        SELECT t.id, t.name, t.slug, c.name as category 
        FROM tools t
        JOIN categories c ON t.category_id = c.id
        ORDER BY t.name LIMIT 5
      `,
    }

    // Verificar tabla de recursos
    const resources = await sql`SELECT COUNT(*) as count FROM resources`
    results.resources = {
      count: resources[0].count,
      sample: await sql`
        SELECT id, title, slug, published 
        FROM resources 
        ORDER BY published_at DESC LIMIT 5
      `,
    }

    // Verificar tabla de comparaciones
    const comparisons = await sql`SELECT COUNT(*) as count FROM comparisons`
    results.comparisons = {
      count: comparisons[0].count,
      sample: await sql`
        SELECT c.id, c.title, c.slug, t1.name as tool1, t2.name as tool2
        FROM comparisons c
        JOIN tools t1 ON c.tool_id_1 = t1.id
        JOIN tools t2 ON c.tool_id_2 = t2.id
        ORDER BY c.view_count DESC LIMIT 5
      `,
    }

    // Verificar tabla de usuarios
    const users = await sql`SELECT COUNT(*) as count FROM users`
    results.users = {
      count: users[0].count,
      sample: await sql`SELECT id, email, role FROM users ORDER BY id LIMIT 5`,
    }

    // Verificar integridad de relaciones
    const orphanTools = await sql`
      SELECT COUNT(*) as count 
      FROM tools t 
      LEFT JOIN categories c ON t.category_id = c.id 
      WHERE c.id IS NULL
    `
    results.integrity = {
      orphanTools: orphanTools[0].count,
    }

    // Verificar pros y contras
    const prosCons = await sql`
      SELECT COUNT(*) as count FROM tool_pros_cons
    `
    results.prosCons = {
      count: prosCons[0].count,
    }

    // Verificar planes de precios
    const pricingPlans = await sql`
      SELECT COUNT(*) as count FROM pricing_plans
    `
    results.pricingPlans = {
      count: pricingPlans[0].count,
    }

    return NextResponse.json({
      success: true,
      message: "Verificación de la base de datos completada",
      results,
    })
  } catch (error) {
    console.error("Error al verificar la base de datos:", error)
    return NextResponse.json(
      { success: false, message: "Error al verificar la base de datos", error: String(error) },
      { status: 500 },
    )
  }
}

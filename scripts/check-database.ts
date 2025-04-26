import { sql } from "../lib/db-config"

async function checkDatabase() {
  try {
    console.log("🔍 Verificando el estado de la base de datos...\n")

    // Verificar tabla de categorías
    const categories = await sql`SELECT id, name, slug FROM categories ORDER BY name`
    console.log(`✅ Tabla 'categories': ${categories.length} registros encontrados`)
    if (categories.length > 0) {
      console.log("Muestra de categorías:")
      categories.slice(0, 5).forEach((cat) => {
        console.log(`  - ${cat.name} (${cat.slug})`)
      })
      console.log("")
    } else {
      console.log("⚠️ No se encontraron categorías en la base de datos\n")
    }

    // Verificar tabla de herramientas
    const tools = await sql`
      SELECT t.id, t.name, t.slug, c.name as category 
      FROM tools t
      JOIN categories c ON t.category_id = c.id
      ORDER BY t.name
    `
    console.log(`✅ Tabla 'tools': ${tools.length} registros encontrados`)
    if (tools.length > 0) {
      console.log("Muestra de herramientas:")
      tools.slice(0, 5).forEach((tool) => {
        console.log(`  - ${tool.name} (${tool.slug}) - Categoría: ${tool.category}`)
      })
      console.log("")
    } else {
      console.log("⚠️ No se encontraron herramientas en la base de datos\n")
    }

    // Verificar tabla de recursos
    const resources = await sql`
      SELECT id, title, slug, published 
      FROM resources 
      ORDER BY published_at DESC
    `
    console.log(`✅ Tabla 'resources': ${resources.length} registros encontrados`)
    if (resources.length > 0) {
      console.log("Muestra de recursos:")
      resources.slice(0, 5).forEach((resource) => {
        console.log(`  - ${resource.title} (${resource.slug}) - Publicado: ${resource.published ? "Sí" : "No"}`)
      })
      console.log("")
    } else {
      console.log("⚠️ No se encontraron recursos en la base de datos\n")
    }

    // Verificar tabla de comparaciones
    const comparisons = await sql`
      SELECT c.id, c.title, c.slug, t1.name as tool1, t2.name as tool2
      FROM comparisons c
      JOIN tools t1 ON c.tool_id_1 = t1.id
      JOIN tools t2 ON c.tool_id_2 = t2.id
      ORDER BY c.view_count DESC
    `
    console.log(`✅ Tabla 'comparisons': ${comparisons.length} registros encontrados`)
    if (comparisons.length > 0) {
      console.log("Muestra de comparaciones:")
      comparisons.slice(0, 5).forEach((comp) => {
        console.log(`  - ${comp.title} (${comp.slug}) - ${comp.tool1} vs ${comp.tool2}`)
      })
      console.log("")
    } else {
      console.log("⚠️ No se encontraron comparaciones en la base de datos\n")
    }

    // Verificar tabla de usuarios
    const users = await sql`SELECT id, email, role FROM users ORDER BY id`
    console.log(`✅ Tabla 'users': ${users.length} registros encontrados`)
    if (users.length > 0) {
      console.log("Muestra de usuarios (solo roles):")
      users.slice(0, 5).forEach((user) => {
        console.log(`  - ${user.email} - Rol: ${user.role}`)
      })
      console.log("")
    } else {
      console.log("⚠️ No se encontraron usuarios en la base de datos\n")
    }

    // Verificar relaciones
    console.log("🔍 Verificando integridad de relaciones...")

    // Herramientas sin categoría válida
    const orphanTools = await sql`
      SELECT t.id, t.name 
      FROM tools t 
      LEFT JOIN categories c ON t.category_id = c.id 
      WHERE c.id IS NULL
    `
    if (orphanTools.length === 0) {
      console.log("✅ Todas las herramientas tienen categorías válidas")
    } else {
      console.log(`⚠️ Se encontraron ${orphanTools.length} herramientas sin categoría válida`)
      orphanTools.forEach((tool) => {
        console.log(`  - ${tool.name} (ID: ${tool.id})`)
      })
    }

    // Verificar pros y contras
    const prosCons = await sql`
      SELECT tool_id, type, COUNT(*) as count
      FROM tool_pros_cons
      GROUP BY tool_id, type
      ORDER BY tool_id, type
    `
    console.log(`✅ Tabla 'tool_pros_cons': ${prosCons.length} grupos encontrados`)

    // Verificar planes de precios
    const pricingPlans = await sql`
      SELECT tool_id, COUNT(*) as plan_count
      FROM pricing_plans
      GROUP BY tool_id
      ORDER BY plan_count DESC
    `
    console.log(`✅ Tabla 'pricing_plans': Planes para ${pricingPlans.length} herramientas`)

    console.log("\n✅ Verificación de la base de datos completada")
  } catch (error) {
    console.error("❌ Error al verificar la base de datos:", error)
  }
}

// Ejecutar la función
checkDatabase()

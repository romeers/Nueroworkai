import { sql } from "../lib/db-config"
import { categories, tools } from "../lib/data"

// Función para insertar datos en la base de datos
async function seedDatabase() {
  console.log("Migrando datos a Neon...")

  try {
    // Insertar categorías
    console.log("Insertando categorías...")
    for (const category of categories) {
      await sql`
        INSERT INTO categories (name, slug, description, image_url)
        VALUES (${category.name}, ${category.slug}, ${category.description}, ${category.imageUrl})
        ON CONFLICT (slug) DO UPDATE 
        SET name = ${category.name}, 
            description = ${category.description}, 
            image_url = ${category.imageUrl}
      `
    }
    console.log(`✅ ${categories.length} categorías insertadas`)

    // Obtener IDs de categorías
    const categoryRows = await sql`SELECT id, slug FROM categories`
    const categoryMap = new Map()
    categoryRows.forEach((row) => {
      categoryMap.set(row.slug, row.id)
    })

    // Insertar herramientas
    console.log("Insertando herramientas...")
    for (const tool of tools) {
      const categoryId = categoryMap.get(tool.category)

      // Insertar herramienta
      const toolResult = await sql`
        INSERT INTO tools (
          name, slug, description, long_description, image_url, 
          category_id, score, featured, is_new, affiliate_url, verified
        )
        VALUES (
          ${tool.name}, ${tool.slug}, ${tool.description}, ${tool.longDescription || null}, 
          ${tool.imageUrl || null}, ${categoryId}, ${tool.score || null}, 
          ${tool.featured || false}, ${tool.isNew || false}, 
          ${tool.affiliateUrl || null}, ${tool.verified || false}
        )
        ON CONFLICT (slug) DO UPDATE 
        SET name = ${tool.name}, 
            description = ${tool.description},
            long_description = ${tool.longDescription || null},
            image_url = ${tool.imageUrl || null},
            category_id = ${categoryId},
            score = ${tool.score || null},
            featured = ${tool.featured || false},
            is_new = ${tool.isNew || false},
            affiliate_url = ${tool.affiliateUrl || null},
            verified = ${tool.verified || false}
        RETURNING id
      `

      const toolId = toolResult[0].id

      // Insertar pros
      if (tool.pros && tool.pros.length > 0) {
        // Eliminar pros existentes
        await sql`DELETE FROM tool_pros_cons WHERE tool_id = ${toolId} AND type = 'pro'`

        // Insertar nuevos pros
        for (const pro of tool.pros) {
          await sql`
            INSERT INTO tool_pros_cons (tool_id, type, description)
            VALUES (${toolId}, 'pro', ${pro})
          `
        }
      }

      // Insertar contras
      if (tool.cons && tool.cons.length > 0) {
        // Eliminar contras existentes
        await sql`DELETE FROM tool_pros_cons WHERE tool_id = ${toolId} AND type = 'con'`

        // Insertar nuevos contras
        for (const con of tool.cons) {
          await sql`
            INSERT INTO tool_pros_cons (tool_id, type, description)
            VALUES (${toolId}, 'con', ${con})
          `
        }
      }

      // Insertar características
      if (tool.features && tool.features.length > 0) {
        // Eliminar características existentes
        await sql`DELETE FROM tool_features WHERE tool_id = ${toolId}`

        // Insertar nuevas características
        for (const feature of tool.features) {
          await sql`
            INSERT INTO tool_features (tool_id, name, description, image_url)
            VALUES (${toolId}, ${feature.name}, ${feature.description}, ${feature.imageUrl || null})
          `
        }
      }

      // Insertar planes de precios
      if (tool.pricing && tool.pricing.length > 0) {
        // Obtener IDs de planes existentes
        const existingPlans = await sql`SELECT id FROM pricing_plans WHERE tool_id = ${toolId}`

        // Eliminar características de planes existentes
        for (const plan of existingPlans) {
          await sql`DELETE FROM pricing_plan_features WHERE pricing_plan_id = ${plan.id}`
        }

        // Eliminar planes existentes
        await sql`DELETE FROM pricing_plans WHERE tool_id = ${toolId}`

        // Insertar nuevos planes
        for (const plan of tool.pricing) {
          const planResult = await sql`
            INSERT INTO pricing_plans (tool_id, plan_name, price, recommended, affiliate_url)
            VALUES (${toolId}, ${plan.plan}, ${plan.price}, ${plan.recommended || false}, ${plan.affiliateUrl || null})
            RETURNING id
          `

          const planId = planResult[0].id

          // Insertar características del plan
          if (plan.features && plan.features.length > 0) {
            for (const feature of plan.features) {
              await sql`
                INSERT INTO pricing_plan_features (pricing_plan_id, description)
                VALUES (${planId}, ${feature})
              `
            }
          }
        }
      }
    }
    console.log(`✅ ${tools.length} herramientas insertadas`)

    console.log("✅ Datos migrados correctamente")
  } catch (error) {
    console.error("Error al migrar datos:", error)
    throw error
  }
}

// Exportar la función con el nombre original para mantener compatibilidad
const seedData = seedDatabase

export { seedData, seedDatabase }

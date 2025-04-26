import { sql } from "../lib/db-config"

async function checkTables() {
  try {
    console.log("Verificando tablas de la base de datos...\n")

    // Consultar conteo de registros en las tablas principales
    const tables = [
      "categories",
      "tools",
      "resources",
      "comparisons",
      "users",
      "tool_pros_cons",
      "pricing_plans",
      "features",
    ]

    for (const table of tables) {
      const result = await sql`SELECT COUNT(*) as count FROM ${sql(table)}`
      const count = result[0].count
      console.log(`Tabla '${table}': ${count} registros`)
    }

    // Mostrar algunas herramientas de ejemplo
    console.log("\nEjemplos de herramientas:")
    const sampleTools = await sql`SELECT name, slug FROM tools LIMIT 5`
    sampleTools.forEach((tool) => {
      console.log(`- ${tool.name} (${tool.slug})`)
    })

    console.log("\nVerificación completada.")
  } catch (error) {
    console.error("Error al verificar las tablas:", error)
  }
}

checkTables()

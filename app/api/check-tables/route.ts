import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

// Corregir la forma en que se accede a la variable de entorno DATABASE_URL
const databaseUrl = process.env.DATABASE_URL || ""
// Eliminar el signo igual si existe al principio de la cadena
const cleanDatabaseUrl = databaseUrl.startsWith("=") ? databaseUrl.substring(1) : databaseUrl
const sql = neon(cleanDatabaseUrl)

export async function GET() {
  try {
    // Verificar las tablas principales
    const tables = ["tools", "categories", "resources", "comparisons", "users"]

    const results = {}

    for (const table of tables) {
      // Obtener el conteo de registros
      const countQuery = await sql`SELECT COUNT(*) as count FROM ${sql(table)}`
      const count = countQuery[0]?.count || 0

      // Obtener algunos ejemplos si hay registros
      let examples = []
      if (count > 0) {
        examples = await sql`SELECT * FROM ${sql(table)} LIMIT 3`
      }

      results[table] = {
        count: Number(count),
        examples,
      }
    }

    return NextResponse.json({
      success: true,
      message: "Estado de las tablas de la base de datos",
      results,
    })
  } catch (error) {
    console.error("Error al verificar las tablas:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al verificar las tablas de la base de datos",
        error: error.message,
      },
      { status: 500 },
    )
  }
}

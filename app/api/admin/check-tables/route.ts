import { NextResponse } from "next/server"
import { sql } from "@/lib/db-config"

export async function GET() {
  try {
    // Consulta para obtener todas las tablas en la base de datos
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `

    // Verificar tablas específicas que deberían existir
    const requiredTables = [
      "categories",
      "tools",
      "users",
      "sessions",
      "pricing_plans",
      "tool_features",
      "testimonials",
      "user_favorites",
      "resource_tools",
      "resources",
    ]

    const existingTables = tables.map((t) => t.table_name)
    const missingTables = requiredTables.filter((t) => !existingTables.includes(t))

    return NextResponse.json({
      success: true,
      tables: existingTables,
      missingTables,
      allTablesExist: missingTables.length === 0,
    })
  } catch (error) {
    console.error("Error al verificar tablas:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al verificar tablas",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

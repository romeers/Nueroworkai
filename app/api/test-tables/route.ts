import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function GET() {
  try {
    console.log("Verificando tablas en la base de datos...")

    const sql = getDbConnection()

    // Obtener todas las tablas
    const tables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `

    console.log("Tablas encontradas:", tables)

    return NextResponse.json({
      success: true,
      message: `Se encontraron ${tables.length} tablas en la base de datos`,
      tables: tables.map((t: any) => t.table_name),
    })
  } catch (error) {
    console.error("Error al verificar las tablas:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error al verificar las tablas",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

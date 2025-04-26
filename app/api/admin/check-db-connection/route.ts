import { NextResponse } from "next/server"
import { sql } from "@/lib/db-config"

export async function GET() {
  try {
    // Intentar ejecutar una consulta simple para verificar la conexión
    const result = await sql`SELECT NOW() as time`

    return NextResponse.json({
      success: true,
      message: "Conexión a la base de datos establecida correctamente",
      timestamp: result[0]?.time || new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al conectar con la base de datos",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function GET() {
  try {
    const sql = getDbConnection()
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
        connectionString: process.env.DATABASE_URL
          ? `${process.env.DATABASE_URL.substring(0, 15)}...` // Only show the beginning for security
          : "No disponible",
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { seedDatabase } from "@/scripts/seed-data"
import { getDbConnection } from "@/lib/db-connection"

export async function POST() {
  try {
    await seedDatabase()
    return NextResponse.json({
      success: true,
      message: "Base de datos poblada correctamente",
    })
  } catch (error) {
    console.error("Error al poblar la base de datos:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al poblar la base de datos",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const sql = getDbConnection()
    // Resto del código...
    return NextResponse.json({
      success: true,
      message: "Conexión a la base de datos exitosa",
    })
  } catch (error) {
    // Manejo de errores...
    console.error("Error al conectar a la base de datos:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al conectar a la base de datos",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

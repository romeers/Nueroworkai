import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function GET() {
  try {
    console.log("Probando conexión a la base de datos...")

    // Obtener la conexión a la base de datos
    const sql = getDbConnection()

    // Ejecutar una consulta simple
    const result = await sql`SELECT NOW() as time`

    console.log("Conexión exitosa a la base de datos:", result)

    return NextResponse.json({
      success: true,
      message: "Conexión exitosa a la base de datos",
      time: result[0].time,
      connectionString: process.env.DATABASE_URL ? `${process.env.DATABASE_URL.substring(0, 15)}...` : "No disponible",
    })
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error al conectar con la base de datos",
        error: error instanceof Error ? error.message : String(error),
        connectionString: process.env.DATABASE_URL
          ? `${process.env.DATABASE_URL.substring(0, 15)}...`
          : "No disponible",
      },
      { status: 500 },
    )
  }
}

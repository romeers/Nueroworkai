import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function GET() {
  try {
    const sql = getDbConnection()
    // Probar la conexión a la base de datos
    const result = await sql`SELECT NOW() as time`

    // Verificar si la tabla subscribers existe
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'subscribers'
      ) as exists
    `

    // Si la tabla existe, contar los suscriptores
    let subscribersCount = 0
    if (tableCheck[0].exists) {
      const countResult = await sql`SELECT COUNT(*) as count FROM subscribers`
      subscribersCount = countResult[0].count
    }

    return NextResponse.json({
      success: true,
      message: "Conexión a la base de datos exitosa",
      time: result[0].time,
      tableExists: tableCheck[0].exists,
      subscribersCount,
      databaseUrl: process.env.DATABASE_URL ? "Configurado" : "No configurado",
      // No mostrar la URL completa por seguridad
      databaseUrlPrefix: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 20) + "..." : "N/A",
    })
  } catch (error) {
    console.error("Error al probar la conexión a la base de datos:", error)
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

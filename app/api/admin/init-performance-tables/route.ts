import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Conexión a la base de datos
const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    // Verificar autenticación (esto debería ser mejorado en producción)
    const { searchParams } = new URL(request.url)
    const adminKey = searchParams.get("adminKey")

    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Leer el archivo SQL
    const sqlFilePath = path.join(process.cwd(), "scripts", "create_performance_tables.sql")
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8")

    // Ejecutar las consultas SQL
    await sql.query(sqlContent)

    return NextResponse.json({ success: true, message: "Tablas de rendimiento inicializadas correctamente" })
  } catch (error) {
    console.error("Error al inicializar las tablas de rendimiento:", error)
    return NextResponse.json({ error: "Error al inicializar las tablas de rendimiento" }, { status: 500 })
  }
}

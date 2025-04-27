import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-simple"

export async function POST(request: Request) {
  try {
    // Verificar autorización (esto debería ser más robusto en producción)
    const { authorization } = await request.json()

    if (authorization !== process.env.ADMIN_KEY) {
      return NextResponse.json({ success: false, message: "No autorizado" }, { status: 401 })
    }

    const sql = getDbConnection()
    if (!sql) {
      return NextResponse.json({ success: false, message: "Error de conexión a la base de datos" }, { status: 500 })
    }

    // Inicializar tablas con índices

    // Tabla de suscriptores
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        source VARCHAR(100),
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Añadir índices a la tabla de suscriptores
    await sql`CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email)`
    await sql`CREATE INDEX IF NOT EXISTS idx_subscribers_source ON subscribers(source)`

    // Tabla de descargas del kit digital
    await sql`
      CREATE TABLE IF NOT EXISTS kit_downloads (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        download_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Añadir índices a la tabla de descargas del kit digital
    await sql`CREATE INDEX IF NOT EXISTS idx_kit_downloads_email ON kit_downloads(email)`

    // Tabla de mensajes de contacto
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'unread',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Añadir índices a la tabla de mensajes de contacto
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email)`
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status)`
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at)`

    return NextResponse.json({
      success: true,
      message: "Tablas inicializadas correctamente",
    })
  } catch (error) {
    console.error("Error al inicializar tablas:", error)
    return NextResponse.json(
      { success: false, message: "Error al inicializar tablas", error: String(error) },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function GET() {
  try {
    const sql = getDbConnection()

    // Verificar si la tabla existe
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    if (!tableExists[0].exists) {
      return NextResponse.json({ messages: [] })
    }

    // Obtener todos los mensajes ordenados por fecha (más recientes primero)
    const messages = await sql`
      SELECT * FROM contact_messages
      ORDER BY created_at DESC
    `

    return NextResponse.json({ messages })
  } catch (error) {
    console.error("Error al obtener los mensajes de contacto:", error)
    return NextResponse.json({ success: false, message: "Error al obtener los mensajes de contacto" }, { status: 500 })
  }
}

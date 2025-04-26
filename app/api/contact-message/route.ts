import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "El correo electrónico y el mensaje son obligatorios" },
        { status: 400 },
      )
    }

    const sql = getDbConnection()

    // Crear la tabla si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Insertar el mensaje
    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name || ""}, ${email}, ${subject || ""}, ${message})
    `

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
    })
  } catch (error) {
    console.error("Error al guardar el mensaje de contacto:", error)
    return NextResponse.json({ success: false, message: "Error al enviar el mensaje" }, { status: 500 })
  }
}

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

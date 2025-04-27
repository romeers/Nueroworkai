import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-simple"

export async function POST(request: Request) {
  try {
    const sql = getDbConnection()
    if (!sql) {
      return NextResponse.json({ success: false, message: "Error de conexión a la base de datos" }, { status: 500 })
    }

    // Obtener y validar los datos del formulario
    let data
    try {
      data = await request.json()
    } catch (e) {
      console.error("Error al parsear JSON:", e)
      return NextResponse.json({ success: false, message: "Formato de datos inválido" }, { status: 400 })
    }

    const { name, email, subject, message } = data

    // Validación más estricta
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Por favor, introduce un correo electrónico válido" },
        { status: 400 },
      )
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Por favor, introduce un mensaje válido (mínimo 5 caracteres)" },
        { status: 400 },
      )
    }

    // Verificar si la tabla existe y crearla si no
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    if (!tableExists[0].exists) {
      await sql`
        CREATE TABLE contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(255),
          message TEXT NOT NULL,
          status VARCHAR(50) DEFAULT 'unread',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `

      // Crear índices
      await sql`CREATE INDEX idx_contact_messages_email ON contact_messages(email)`
      await sql`CREATE INDEX idx_contact_messages_status ON contact_messages(status)`
      await sql`CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at)`
    }

    // Insertar el mensaje con manejo explícito de errores
    try {
      const result = await sql`
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (${name || null}, ${email}, ${subject || null}, ${message})
        RETURNING id
      `

      console.log("Mensaje insertado con ID:", result[0]?.id)

      return NextResponse.json({
        success: true,
        message: "Mensaje enviado correctamente. Te responderemos lo antes posible.",
        id: result[0]?.id,
      })
    } catch (dbError) {
      console.error("Error al insertar en la base de datos:", dbError)
      return NextResponse.json(
        { success: false, message: "Error al guardar el mensaje en la base de datos" },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al procesar el mensaje de contacto:", error)
    return NextResponse.json(
      { success: false, message: "Error al enviar el mensaje. Por favor, inténtalo de nuevo." },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const sql = getDbConnection()
    if (!sql) {
      return NextResponse.json({ success: false, message: "Error de conexión a la base de datos" }, { status: 500 })
    }

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

    return NextResponse.json({ success: true, messages })
  } catch (error) {
    console.error("Error al obtener los mensajes de contacto:", error)
    return NextResponse.json({ success: false, message: "Error al obtener los mensajes de contacto" }, { status: 500 })
  }
}

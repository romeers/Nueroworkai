import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"
import { validateEmail, sanitizeInput } from "@/utils/security"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Server-side validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, message: "Por favor, introduce un email válido" }, { status: 400 })
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Por favor, introduce un mensaje con al menos 10 caracteres" },
        { status: 400 },
      )
    }

    // Sanitize inputs
    const sanitizedName = name ? sanitizeInput(name) : null
    const sanitizedSubject = subject ? sanitizeInput(subject) : null
    const sanitizedMessage = sanitizeInput(message)

    console.log(`Procesando mensaje de contacto de: ${email}`)

    const sql = getDbConnection()

    // Create the table if it doesn't exist
    try {
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
    } catch (dbError) {
      console.error("Error creating contact_messages table:", dbError)
      return NextResponse.json(
        {
          success: false,
          message: "Lo sentimos, ha ocurrido un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }

    // Insert the message
    try {
      await sql`
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (${sanitizedName}, ${email}, ${sanitizedSubject}, ${sanitizedMessage})
      `

      return NextResponse.json({
        success: true,
        message: "¡Gracias por tu mensaje! Te responderemos lo antes posible.",
      })
    } catch (insertError) {
      console.error("Error al guardar el mensaje de contacto:", insertError)
      return NextResponse.json(
        {
          success: false,
          message: "Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al procesar mensaje de contacto:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const sql = getDbConnection()

    // Check if the table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    if (!tableExists[0].exists) {
      return NextResponse.json({ messages: [] })
    }

    // Get all messages ordered by date (most recent first)
    const messages = await sql`
      SELECT * FROM contact_messages
      ORDER BY created_at DESC
    `

    return NextResponse.json({ messages })
  } catch (error) {
    console.error("Error al obtener los mensajes de contacto:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al obtener los mensajes de contacto",
      },
      { status: 500 },
    )
  }
}

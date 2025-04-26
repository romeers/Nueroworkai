import { type NextRequest, NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function POST(req: NextRequest) {
  try {
    console.log("Recibida solicitud POST en /api/contact-message")

    const sql = getDbConnection()

    // Crear la tabla si no existe
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name TEXT,
          email TEXT NOT NULL,
          subject TEXT,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `
      console.log("Tabla contact_messages verificada/creada correctamente")
    } catch (tableError) {
      console.error("Error al crear la tabla contact_messages:", tableError)
      return NextResponse.json({ error: "Error al crear la tabla de mensajes." }, { status: 500 })
    }

    // Procesar los datos del formulario
    let body
    try {
      body = await req.json()
      console.log("Datos recibidos:", body)
    } catch (parseError) {
      console.error("Error al parsear el cuerpo de la solicitud:", parseError)
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { name, email, subject, message } = body

    if (!email || !message) {
      console.error("Faltan campos obligatorios:", { email, message })
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 })
    }

    // Insertar el mensaje en la base de datos
    try {
      await sql`
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (${name || null}, ${email}, ${subject || null}, ${message})
      `
      console.log("Mensaje guardado correctamente en la base de datos")
    } catch (insertError) {
      console.error("Error al insertar el mensaje en la base de datos:", insertError)
      return NextResponse.json({ error: "Error al guardar el mensaje." }, { status: 500 })
    }

    return NextResponse.json({ message: "Message saved successfully." }, { status: 201 })
  } catch (error) {
    console.error("Error general en /api/contact-message:", error)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}

export async function GET() {
  try {
    console.log("Recibida solicitud GET en /api/contact-message")

    const sql = getDbConnection()

    // Verificar si la tabla existe
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    const tableExists = tableCheck[0]?.exists

    if (!tableExists) {
      console.log("La tabla contact_messages no existe")
      return NextResponse.json({ messages: [] })
    }

    const result = await sql`
      SELECT * FROM contact_messages 
      ORDER BY created_at DESC
    `

    console.log(`Recuperados ${result.length} mensajes de contacto`)
    return NextResponse.json({ messages: result })
  } catch (error) {
    console.error("Error al obtener los mensajes de contacto:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import { db, getDbConnection } from "@/lib/db-connection"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Por favor, introduce un email válido" }, { status: 400 })
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "El mensaje debe tener al menos 10 caracteres" },
        { status: 400 },
      )
    }

    // Asegurarse de que la conexión a la base de datos esté inicializada
    await db.connect()

    // Obtener la conexión a la base de datos
    const sql = getDbConnection()

    // Verificar si la tabla existe
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public'
        AND table_name = 'contact_messages'
      );
    `

    // Si la tabla no existe, la creamos
    if (!tableExists[0].exists) {
      await sql`
        CREATE TABLE contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(255),
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          status VARCHAR(20) DEFAULT 'unread'
        );
        
        -- Añadir índices para mejorar el rendimiento
        CREATE INDEX idx_contact_messages_email ON contact_messages(email);
        CREATE INDEX idx_contact_messages_status ON contact_messages(status);
        CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at);
      `
    }

    // Insertar el mensaje en la base de datos
    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name || ""}, ${email}, ${subject || ""}, ${message});
    `

    return NextResponse.json({
      success: true,
      message: "Mensaje recibido correctamente",
    })
  } catch (error) {
    console.error("Error al procesar el mensaje de contacto:", error)
    return NextResponse.json(
      { success: false, message: "Error al procesar el mensaje. Por favor, inténtalo de nuevo." },
      { status: 500 },
    )
  }
}

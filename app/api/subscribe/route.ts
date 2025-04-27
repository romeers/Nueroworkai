import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"
import { validateEmail } from "@/utils/security"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, source = "website" } = body

    // Server-side email validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, message: "Por favor, introduce un email válido" }, { status: 400 })
    }

    console.log(`Procesando suscripción: ${email}, ${name || "sin nombre"}, fuente: ${source}`)

    // Get database connection
    const sql = getDbConnection()

    // Create the table if it doesn't exist
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS subscribers (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          name VARCHAR(255),
          source VARCHAR(100),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `
    } catch (dbError) {
      console.error("Error creating subscribers table:", dbError)
      return NextResponse.json(
        {
          success: false,
          message:
            "Lo sentimos, ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }

    // Insert the subscriber
    try {
      const result = await sql`
        INSERT INTO subscribers (email, name, source)
        VALUES (${email}, ${name || null}, ${source})
        ON CONFLICT (email) 
        DO UPDATE SET 
          name = COALESCE(${name || null}, subscribers.name),
          source = COALESCE(${source}, subscribers.source),
          updated_at = CURRENT_TIMESTAMP
        RETURNING id, email
      `

      console.log(`Suscripción guardada correctamente: ${JSON.stringify(result)}`)

      return NextResponse.json({
        success: true,
        message: "¡Gracias! Te enviaremos el kit a tu correo electrónico en las próximas 24 horas.",
        subscriber: result[0],
      })
    } catch (insertError) {
      console.error("Error al insertar suscriptor:", insertError)
      return NextResponse.json(
        {
          success: false,
          message: "Lo sentimos, ha ocurrido un error al guardar tu correo. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al procesar suscripción:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"
import { validateEmail } from "@/utils/security"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Server-side email validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, message: "Por favor, introduce un email válido" }, { status: 400 })
    }

    console.log(`Procesando descarga de kit para: ${email}`)

    // Get database connection
    const sql = getDbConnection()

    // Create the table if it doesn't exist
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS kit_downloads (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          download_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `
    } catch (dbError) {
      console.error("Error creating kit_downloads table:", dbError)
      return NextResponse.json(
        {
          success: false,
          message:
            "Lo sentimos, ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }

    // Save the email
    try {
      await sql`
        INSERT INTO kit_downloads (email)
        VALUES (${email})
        ON CONFLICT (email) 
        DO UPDATE SET 
          download_date = CURRENT_TIMESTAMP
      `

      return NextResponse.json({
        success: true,
        message: "¡Gracias! Recibirás el Kit en tu correo en menos de 24 horas.",
      })
    } catch (insertError) {
      console.error("Error al registrar descarga de kit:", insertError)
      return NextResponse.json(
        {
          success: false,
          message: "Lo sentimos, ha ocurrido un error al guardar tu correo. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al registrar descarga de kit:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.",
      },
      { status: 500 },
    )
  }
}

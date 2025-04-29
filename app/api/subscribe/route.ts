import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"
import { validateEmail } from "@/utils/security"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name = "", source = "website", utm_source = null, utm_medium = null, utm_campaign = null } = body

    // Server-side email validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, message: "Por favor, introduce un email válido" }, { status: 400 })
    }

    console.log(`Procesando suscripción para: ${email} desde ${source}`)

    // Get database connection
    const sql = getDbConnection()

    // Save the email to our unified subscriptions table
    try {
      await sql`
        INSERT INTO subscriptions (email, name, source, utm_source, utm_medium, utm_campaign, updated_at)
        VALUES (${email}, ${name}, ${source}, ${utm_source}, ${utm_medium}, ${utm_campaign}, CURRENT_TIMESTAMP)
        ON CONFLICT (email) 
        DO UPDATE SET 
          name = COALESCE(${name}, subscriptions.name),
          source = ${source},
          utm_source = COALESCE(${utm_source}, subscriptions.utm_source),
          utm_medium = COALESCE(${utm_medium}, subscriptions.utm_medium),
          utm_campaign = COALESCE(${utm_campaign}, subscriptions.utm_campaign),
          updated_at = CURRENT_TIMESTAMP
      `

      // For backward compatibility, also insert into kit_downloads if source is kit-related
      if (source.includes("kit")) {
        try {
          await sql`
            INSERT INTO kit_downloads (email, download_date)
            VALUES (${email}, CURRENT_TIMESTAMP)
            ON CONFLICT (email) 
            DO UPDATE SET 
              download_date = CURRENT_TIMESTAMP
          `
        } catch (kitError) {
          console.error("Error al registrar en kit_downloads (no crítico):", kitError)
          // Continuamos aunque falle esta parte
        }
      }

      return NextResponse.json({
        success: true,
        message: "¡Gracias! Recibirás el Kit en tu correo en menos de 24 horas.",
      })
    } catch (insertError) {
      console.error("Error al registrar suscripción:", insertError)
      return NextResponse.json(
        {
          success: false,
          message: "Lo sentimos, ha ocurrido un error al guardar tu correo. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al registrar suscripción:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.",
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

// Validación básica de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: Request) {
  try {
    // Obtener datos del cuerpo de la solicitud
    const { email, name } = await request.json()

    // Validar email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Por favor, proporciona un correo electrónico válido" },
        { status: 400 },
      )
    }

    // Conectar a la base de datos
    const sql = neon(process.env.DATABASE_URL!)

    // Verificar si la tabla existe, si no, crearla
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Intentar insertar el suscriptor
    try {
      await sql`
        INSERT INTO subscribers (email, name)
        VALUES (${email.toLowerCase()}, ${name || null})
      `
    } catch (dbError: any) {
      // Verificar si es un error de duplicado
      if (dbError.message && dbError.message.includes("duplicate key")) {
        return NextResponse.json(
          { success: false, message: "Este correo electrónico ya está suscrito" },
          { status: 409 },
        )
      }
      throw dbError
    }

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: "¡Suscripción exitosa!",
    })
  } catch (error) {
    console.error("Error en la API de suscripción:", error)
    return NextResponse.json(
      { success: false, message: "Ha ocurrido un error al procesar tu solicitud" },
      { status: 500 },
    )
  }
}

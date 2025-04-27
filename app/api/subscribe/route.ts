import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function POST(request: Request) {
  try {
    const sql = getDbConnection()
    const body = await request.json()
    const { email, name, source = "website" } = body

    // Validación básica
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    console.log(`Intentando guardar suscripción: ${email}, ${name || "sin nombre"}, fuente: ${source}`)

    // Crear la tabla si no existe
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

    // Insertar el suscriptor
    // Si el email ya existe, simplemente actualizamos el nombre y la fuente si se proporcionan
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
      message: "Suscripción registrada correctamente",
      subscriber: result[0],
    })
  } catch (error) {
    console.error("Error al procesar suscripción:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar la suscripción",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

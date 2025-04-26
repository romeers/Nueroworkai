import { NextResponse } from "next/server"
import { sql } from "@/lib/db-config"

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    // Validar email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    // Verificar si la tabla subscribers existe
    try {
      await sql`SELECT 1 FROM subscribers LIMIT 1`
    } catch (error) {
      // Si la tabla no existe, crearla
      await sql`
        CREATE TABLE IF NOT EXISTS subscribers (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          name VARCHAR(255),
          subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          status VARCHAR(50) DEFAULT 'active',
          source VARCHAR(100)
        )
      `
    }

    // Insertar o actualizar suscriptor
    const result = await sql`
      INSERT INTO subscribers (email, name)
      VALUES (${email}, ${name || null})
      ON CONFLICT (email) 
      DO UPDATE SET 
        name = COALESCE(${name || null}, subscribers.name),
        subscribed_at = CURRENT_TIMESTAMP,
        status = 'active'
      RETURNING id, email, name, subscribed_at
    `

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

export async function GET() {
  try {
    // Verificar si la tabla subscribers existe
    try {
      await sql`SELECT 1 FROM subscribers LIMIT 1`
    } catch (error) {
      // Si la tabla no existe, devolver lista vacía
      return NextResponse.json({
        success: true,
        subscribers: [],
        count: 0,
      })
    }

    // Obtener todos los suscriptores
    const subscribers = await sql`
      SELECT id, email, name, subscribed_at, status, source
      FROM subscribers
      ORDER BY subscribed_at DESC
    `

    return NextResponse.json({
      success: true,
      subscribers,
      count: subscribers.length,
    })
  } catch (error) {
    console.error("Error al obtener suscriptores:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al obtener suscriptores",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function POST(request: Request) {
  try {
    const sql = getDbConnection()
    const body = await request.json()
    const { email } = body

    // Validación básica
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    // Crear la tabla si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS kit_downloads (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        download_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Guardar el correo electrónico
    await sql`
      INSERT INTO kit_downloads (email)
      VALUES (${email})
      ON CONFLICT (email) 
      DO UPDATE SET 
        download_date = CURRENT_TIMESTAMP
    `

    return NextResponse.json({
      success: true,
      message: "Correo registrado correctamente",
    })
  } catch (error) {
    console.error("Error al registrar correo:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al registrar el correo",
      },
      { status: 500 },
    )
  }
}

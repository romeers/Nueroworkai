import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function POST(request: Request) {
  try {
    console.log("Recibida solicitud en test-contact-db")

    const body = await request.json()
    const { name, email, message } = body

    console.log("Datos recibidos:", { name, email, message })

    if (!email || !message) {
      console.log("Datos incompletos")
      return NextResponse.json(
        {
          success: false,
          message: "El correo electrónico y el mensaje son obligatorios",
        },
        { status: 400 },
      )
    }

    console.log("Obteniendo conexión a la base de datos...")
    const sql = getDbConnection()

    console.log("Creando tabla si no existe...")
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS test_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `
      console.log("Tabla creada o verificada correctamente")
    } catch (tableError) {
      console.error("Error al crear la tabla:", tableError)
      return NextResponse.json(
        {
          success: false,
          message: "Error al crear la tabla",
          error: tableError instanceof Error ? tableError.message : String(tableError),
        },
        { status: 500 },
      )
    }

    console.log("Insertando mensaje en la base de datos...")
    try {
      const result = await sql`
        INSERT INTO test_messages (name, email, message)
        VALUES (${name || ""}, ${email}, ${message})
        RETURNING id
      `
      console.log("Mensaje insertado correctamente:", result)

      return NextResponse.json({
        success: true,
        message: "Mensaje guardado correctamente en la base de datos",
        id: result[0].id,
      })
    } catch (insertError) {
      console.error("Error al insertar el mensaje:", insertError)
      return NextResponse.json(
        {
          success: false,
          message: "Error al guardar el mensaje en la base de datos",
          error: insertError instanceof Error ? insertError.message : String(insertError),
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general en test-contact-db:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar la solicitud",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

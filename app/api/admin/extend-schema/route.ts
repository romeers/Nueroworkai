import { NextResponse } from "next/server"
import { extendSchema } from "@/scripts/extend-schema"
import { getDbConnection } from "@/lib/db-connection"

export async function POST() {
  try {
    await extendSchema()
    return NextResponse.json({ success: true, message: "Esquema ampliado correctamente" })
  } catch (error) {
    console.error("Error al ampliar el esquema:", error)
    return NextResponse.json(
      { success: false, message: "Error al ampliar el esquema", error: String(error) },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const sql = getDbConnection()
    // Resto del código...
    return NextResponse.json({ message: "GET request successful" }) // Added a basic response
  } catch (error) {
    // Manejo de errores...
    console.error("Error in GET request:", error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

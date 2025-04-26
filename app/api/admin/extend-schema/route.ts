import { NextResponse } from "next/server"
import { extendSchema } from "@/scripts/extend-schema"

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

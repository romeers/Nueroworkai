import { NextResponse } from "next/server"
import { initSchema } from "@/scripts/init-schema"

export async function POST() {
  try {
    await initSchema()
    return NextResponse.json({
      success: true,
      message: "Esquema inicializado correctamente",
    })
  } catch (error) {
    console.error("Error al inicializar el esquema:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al inicializar el esquema",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

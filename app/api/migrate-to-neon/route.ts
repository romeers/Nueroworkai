import { NextResponse } from "next/server"
import { initSchema } from "@/scripts/init-schema"
import { seedData } from "@/scripts/seed-data"

export async function POST() {
  try {
    // Inicializar esquema
    await initSchema()

    // Migrar datos
    await seedData()

    return NextResponse.json({
      success: true,
      message: "Migración a Neon completada con éxito",
    })
  } catch (error) {
    console.error("Error durante la migración a Neon:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error durante la migración a Neon",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

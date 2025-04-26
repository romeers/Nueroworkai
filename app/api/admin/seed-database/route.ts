import { NextResponse } from "next/server"
import { seedDatabase } from "@/scripts/seed-data"

export async function POST() {
  try {
    await seedDatabase()
    return NextResponse.json({
      success: true,
      message: "Base de datos poblada correctamente",
    })
  } catch (error) {
    console.error("Error al poblar la base de datos:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al poblar la base de datos",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

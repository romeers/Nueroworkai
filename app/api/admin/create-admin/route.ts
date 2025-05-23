import { NextResponse } from "next/server"
import { createAdminUser } from "@/scripts/create-admin"

export async function POST() {
  try {
    await createAdminUser()
    return NextResponse.json({ success: true, message: "Usuario administrador creado correctamente" })
  } catch (error) {
    console.error("Error al crear usuario administrador:", error)
    return NextResponse.json(
      { success: false, message: "Error al crear usuario administrador", error: String(error) },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"
import { getCurrentUser, getUserFavorites } from "@/lib/auth"

export async function GET() {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ success: false, message: "No autenticado" }, { status: 401 })
    }

    const favorites = await getUserFavorites(user.id)

    return NextResponse.json({
      success: true,
      favorites,
    })
  } catch (error) {
    console.error("Error al obtener favoritos:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}

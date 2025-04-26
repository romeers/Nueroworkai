import { NextResponse } from "next/server"
import { getCurrentUser, addFavorite, removeFavorite, isToolFavorite } from "@/lib/auth"

export async function GET(request: Request, { params }: { params: { toolId: string } }) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ success: false, message: "No autenticado" }, { status: 401 })
    }

    const toolId = Number.parseInt(params.toolId)
    const isFavorite = await isToolFavorite(user.id, toolId)

    return NextResponse.json({
      success: true,
      isFavorite,
    })
  } catch (error) {
    console.error("Error al verificar favorito:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}

export async function POST(request: Request, { params }: { params: { toolId: string } }) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ success: false, message: "No autenticado" }, { status: 401 })
    }

    const toolId = Number.parseInt(params.toolId)
    const success = await addFavorite(user.id, toolId)

    if (!success) {
      return NextResponse.json({ success: false, message: "Error al añadir favorito" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Herramienta añadida a favoritos",
    })
  } catch (error) {
    console.error("Error al añadir favorito:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { toolId: string } }) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ success: false, message: "No autenticado" }, { status: 401 })
    }

    const toolId = Number.parseInt(params.toolId)
    const success = await removeFavorite(user.id, toolId)

    if (!success) {
      return NextResponse.json({ success: false, message: "Error al eliminar favorito" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Herramienta eliminada de favoritos",
    })
  } catch (error) {
    console.error("Error al eliminar favorito:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}

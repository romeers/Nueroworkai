import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const { status } = await request.json()

    if (!id || !status) {
      return NextResponse.json({ success: false, message: "ID y estado son requeridos" }, { status: 400 })
    }

    const sql = getDbConnection()

    // Actualizar el estado del mensaje
    await sql`
      UPDATE contact_messages
      SET status = ${status}
      WHERE id = ${id}
    `

    return NextResponse.json({
      success: true,
      message: "Estado del mensaje actualizado correctamente",
    })
  } catch (error) {
    console.error("Error al actualizar el mensaje de contacto:", error)
    return NextResponse.json({ success: false, message: "Error al actualizar el mensaje de contacto" }, { status: 500 })
  }
}

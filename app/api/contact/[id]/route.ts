import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-connection"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ success: false, message: "ID inválido" }, { status: 400 })
    }

    const { status } = await request.json()
    if (!status || !["read", "unread"].includes(status)) {
      return NextResponse.json({ success: false, message: "Estado inválido" }, { status: 400 })
    }

    const sql = getDbConnection()

    await sql`
      UPDATE contact_messages
      SET status = ${status}
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true, message: "Mensaje actualizado correctamente" })
  } catch (error) {
    console.error("Error al actualizar el mensaje:", error)
    return NextResponse.json(
      { success: false, message: "Error al actualizar el mensaje. Por favor, inténtalo de nuevo." },
      { status: 500 },
    )
  }
}

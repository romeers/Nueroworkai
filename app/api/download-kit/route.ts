import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, puedes registrar la descarga o verificar alguna condición
    // como un token de acceso en la URL

    const filePath = path.join(process.cwd(), "public", "kit-productividad-ia-2025.pdf")
    const fileBuffer = fs.readFileSync(filePath)

    // Configurar headers para la descarga
    const headers = new Headers()
    headers.set("Content-Disposition", 'attachment; filename="Kit-Productividad-IA-NeuroWorkAI-2025.pdf"')
    headers.set("Content-Type", "application/pdf")

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error al descargar el kit:", error)
    return NextResponse.json({ error: "Error al descargar el archivo" }, { status: 500 })
  }
}

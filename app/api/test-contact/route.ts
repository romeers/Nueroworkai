import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Registrar los datos recibidos
    console.log("Datos recibidos en test-contact:", body)

    // Devolver una respuesta exitosa
    return NextResponse.json({
      success: true,
      message: "Datos recibidos correctamente en el endpoint de prueba",
      receivedData: body,
    })
  } catch (error) {
    console.error("Error en test-contact:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error en el endpoint de prueba",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

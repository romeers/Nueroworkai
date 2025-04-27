import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Solo aplicar a rutas de API
  if (!request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  try {
    // Continuar con la solicitud
    return NextResponse.next()
  } catch (error) {
    console.error("Error no controlado en API:", error)

    // Devolver una respuesta de error genérica
    return NextResponse.json(
      {
        success: false,
        message: "Se produjo un error inesperado en el servidor.",
      },
      { status: 500 },
    )
  }
}

export const config = {
  matcher: "/api/:path*",
}

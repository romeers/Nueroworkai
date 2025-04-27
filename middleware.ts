import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for the homepage to ensure direct access
  if (pathname === "/") {
    return NextResponse.next()
  }

  // Your existing middleware logic for other routes
  // ...

  return NextResponse.next()
}

export const config = {
  // Exclude the root path from the matcher
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|/).*)"],
}

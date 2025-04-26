import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Optimize font loading with display swap and subset
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata = {
  title: "NeuroWorkAI - Herramientas de IA para productividad",
  description:
    "Descubre las mejores herramientas de IA para aumentar tu productividad y optimizar tu flujo de trabajo.",
  keywords:
    "IA, inteligencia artificial, productividad, trabajo remoto, herramientas IA, Notion AI, Zapier, Make, ClickUp, Grammarly, Jasper, Fireflies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

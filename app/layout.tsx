import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
  description:
    "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Reseñas, comparativas y recursos gratuitos.",
  keywords:
    "IA, inteligencia artificial, productividad, trabajo remoto, herramientas IA, Notion AI, Zapier, Make, ClickUp, Grammarly, Jasper, Fireflies",
  metadataBase: new URL("https://neuroworkai.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://neuroworkai.com",
    title: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
    description: "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.",
    siteName: "NeuroWorkAI",
    images: [
      {
        url: "/neural-network-head.png",
        width: 1200,
        height: 630,
        alt: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
    description: "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.",
    images: ["/neural-network-head.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
    manifest: "/manifest.webmanifest",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <ClientLayout children={children} />
    </>
  )
}


import './globals.css'
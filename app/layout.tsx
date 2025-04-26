import type React from "react"
import type { Metadata } from "next"
import ClientComponent from "./client"

export const metadata: Metadata = {
  title: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
  description:
    "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Reseñas, comparativas y recursos gratuitos actualizados 2025.",
  keywords:
    "IA, inteligencia artificial, productividad, trabajo remoto, herramientas IA, Notion AI, Zapier, Make, ClickUp, Grammarly, Jasper, Fireflies, ChatGPT, automatización, IA para trabajo",
  metadataBase: new URL("https://neuroworkai.com"),
  alternates: {
    canonical: "https://neuroworkai.com",
    languages: {
      "es-ES": "https://neuroworkai.com",
      "en-US": "https://neuroworkai.com/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://neuroworkai.com",
    title: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
    description:
      "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Análisis actualizados 2025.",
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
    description:
      "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Análisis actualizados 2025.",
    images: ["/neural-network-head.png"],
    creator: "@neuroworkai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "NeuroWorkAI Team" }],
  applicationName: "NeuroWorkAI",
  referrer: "origin-when-cross-origin",
  creator: "NeuroWorkAI",
  publisher: "NeuroWorkAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientComponent>{children}</ClientComponent>
}


import './globals.css'
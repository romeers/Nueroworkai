import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    template: "%s | NeuroWorkAI",
    default: "NeuroWorkAI - Herramientas de IA para Profesionales Remotos",
  },
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
    creator: "@neuroworkai",
    site: "@neuroworkai",
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
  alternates: {
    canonical: "https://neuroworkai.com",
    languages: {
      "es-ES": "https://neuroworkai.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "verification_token",
  },
  other: {
    "msapplication-TileColor": "#6d28d9",
    "theme-color": "#ffffff",
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
      <GoogleAnalytics />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <Suspense>
        <ClientLayout children={children} />
      </Suspense>
    </>
  )
}


import './globals.css'
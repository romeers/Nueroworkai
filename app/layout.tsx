import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import SkipToContent from "@/components/accessibility/skip-to-content"

// Optimize font loading with display swap and subset
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7C3AED" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Add preload for critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />

        {/* Add DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://v0.blob.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <SkipToContent />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
            >
              Saltar al contenido principal
            </a>
            <Header />
            <Suspense
              fallback={
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
            >
              <main id="main-content" className="flex-1">
                {children}
              </main>
            </Suspense>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

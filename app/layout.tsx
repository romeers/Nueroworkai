import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "@/contexts/language-context"
import { Suspense } from "react"

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
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.ico" color="#7C3AED" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
              >
                Saltar al contenido principal
              </a>
              <Suspense>
                <Header />
              </Suspense>
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Suspense>
                <Footer />
              </Suspense>
            </div>
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

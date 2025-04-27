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
import { AuthProvider } from "@/contexts/auth-context"
import GoogleAnalytics from "@/components/google-analytics"
import { siteConfig } from "@/config/site"

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
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "herramientas IA",
    "inteligencia artificial",
    "productividad",
    "trabajo remoto",
    "automatización",
    "comparativas IA",
    "reseñas IA",
    "mejores herramientas IA",
    "IA para profesionales",
    "NeuroWorkAI",
  ],
  authors: [
    {
      name: "NeuroWorkAI",
      url: "https://neuroworkai.com",
    },
  ],
  creator: "NeuroWorkAI",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@neuroworkai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0070f3",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(siteConfig.url),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth" dir="ltr">
      <head>
        <meta name="theme-color" content="#7C3AED" />
        <link rel="canonical" href="https://neuroworkai.com/" />

        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Add preload for critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />

        {/* Add DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://v0.blob.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://tb4dwzggtieausz8.public.blob.vercel-storage.com" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col text-base`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <SkipToContent />
              <Header />
              <Suspense
                fallback={
                  <div className="flex-1 flex items-center justify-center p-8">
                    <div
                      className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"
                      role="status"
                    >
                      <span className="sr-only">Cargando...</span>
                    </div>
                  </div>
                }
              >
                <main id="main-content" className="flex-1">
                  {children}
                </main>
              </Suspense>
              <Footer />
            </div>
          </AuthProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import "@/app/globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import SkipToContent from "@/components/accessibility/skip-to-content"
import { NextIntlClientProvider } from "next-intl"
import { LanguageProvider } from "@/components/providers/language-provider"
import { locales, type Locale } from "@/config/i18n"
import { notFound } from "next/navigation"

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  // Get the messages for the requested locale
  const messages = (await import(`@/messages/${params.locale}.json`)).default

  return {
    title: messages.common.title,
    description: messages.common.description,
    keywords:
      "IA, inteligencia artificial, productividad, trabajo remoto, herramientas IA, Notion AI, Zapier, Make, ClickUp, Grammarly, Jasper, Fireflies",
    metadataBase: new URL("https://neuroworkai.com"),
    openGraph: {
      type: "website",
      locale: params.locale === "es" ? "es_ES" : "en_US",
      url: "https://neuroworkai.com",
      title: messages.common.title,
      description: messages.common.description,
      siteName: "NeuroWorkAI",
      images: [
        {
          url: "/neural-network-head.png",
          width: 1200,
          height: 630,
          alt: messages.common.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.common.title,
      description: messages.common.description,
      images: ["/neural-network-head.png"],
    },
    alternates: {
      canonical: `https://neuroworkai.com/${params.locale}`,
      languages: {
        es: "https://neuroworkai.com/es",
        en: "https://neuroworkai.com/en",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale)) notFound()

  // Load the messages for the requested locale
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider locale={locale}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              <div className="flex min-h-screen flex-col">
                <SkipToContent />
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
                >
                  {locale === "es" ? "Saltar al contenido principal" : "Skip to main content"}
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
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nProvider } from "@/lib/i18n/i18n-context"
import LanguageMeta from "@/components/language-meta"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <I18nProvider defaultLanguage="es">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <LanguageMeta />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}

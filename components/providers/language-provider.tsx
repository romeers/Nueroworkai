"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { Locale } from "@/config/i18n"

type LanguageContextType = {
  locale: Locale
  changeLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}) {
  const router = useRouter()
  const pathname = usePathname()

  const changeLocale = (newLocale: Locale) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?:\/|$)/, "/")

    // Navigate to the same path but with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return <LanguageContext.Provider value={{ locale, changeLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"
import { useI18n } from "@/lib/i18n/i18n-context"
import { getAlternateRoute } from "@/lib/i18n/routes"

export default function LanguageMeta() {
  const pathname = usePathname()
  const { language } = useI18n()
  const alternateRoute = getAlternateRoute(pathname, language)
  const baseUrl = "https://neuroworkai.com"

  return (
    <Head>
      <link rel="alternate" hrefLang={language === "es" ? "en" : "es"} href={`${baseUrl}${alternateRoute}`} />
      <link rel="alternate" hrefLang={language} href={`${baseUrl}${pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${language === "es" ? pathname : alternateRoute}`} />
    </Head>
  )
}

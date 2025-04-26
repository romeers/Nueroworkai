import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"
import type { Locale } from "@/config/i18n"

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "home" })

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
  }
}

export default function HomePage() {
  return <HomePageClient />
}

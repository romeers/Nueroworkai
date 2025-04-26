import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "home" })

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
  }
}

export default function HomePage() {
  return <HomePageClient />
}

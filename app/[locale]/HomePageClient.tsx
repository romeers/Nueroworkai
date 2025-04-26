"use client"

import { useTranslations } from "next-intl"

export default function HomePageClient() {
  const t = useTranslations("home")

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("hero.title")}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("hero.subtitle")}</p>
        <a
          href="/herramientas-ia"
          className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          {t("hero.cta")}
        </a>
      </section>

      {/* Rest of the home page content */}
    </div>
  )
}

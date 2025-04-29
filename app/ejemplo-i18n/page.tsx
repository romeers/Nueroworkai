"use client"

import { useI18n } from "@/lib/i18n/i18n-context"
import { Button } from "@/components/ui/button"

export default function EjemploI18nPage() {
  const { t, language, setLanguage } = useI18n()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("components.languageSwitcher.label")}</h1>

      <div className="mb-8">
        <p className="mb-4">{t("about.mission.subtitle")}</p>

        <div className="flex gap-4 mb-6">
          <Button onClick={() => setLanguage("es")} variant={language === "es" ? "default" : "outline"}>
            {t("components.languageSwitcher.spanish")}
          </Button>
          <Button onClick={() => setLanguage("en")} variant={language === "en" ? "default" : "outline"}>
            {t("components.languageSwitcher.english")}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">{t("home.hero.title")}</h2>
          <p>{t("home.hero.subtitle")}</p>
          <Button className="mt-4">{t("home.hero.cta")}</Button>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">{t("about.values.title")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              {t("about.values.transparency.title")}: {t("about.values.transparency.description")}
            </li>
            <li>
              {t("about.values.objectivity.title")}: {t("about.values.objectivity.description")}
            </li>
            <li>
              {t("about.values.utility.title")}: {t("about.values.utility.description")}
            </li>
            <li>
              {t("about.values.community.title")}: {t("about.values.community.description")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

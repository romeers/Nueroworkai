"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { useTranslations } from "next-intl"
import { locales, type Locale } from "@/config/i18n"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher({ variant = "icon" }: { variant?: "icon" | "text" | "full" }) {
  const { locale, changeLocale } = useLanguage()
  const t = useTranslations("common")

  const handleChangeLocale = (newLocale: Locale) => {
    changeLocale(newLocale)
  }

  // Map of locale to display name
  const localeNames: Record<Locale, string> = {
    es: "Español",
    en: "English",
  }

  if (variant === "icon") {
    return (
      <div className="flex items-center space-x-1">
        <Globe className="h-4 w-4" />
        <select
          value={locale}
          onChange={(e) => handleChangeLocale(e.target.value as Locale)}
          className="bg-transparent text-sm focus:outline-none cursor-pointer"
          aria-label={t("language")}
        >
          {locales.map((loc) => (
            <option key={loc} value={loc}>
              {loc.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    )
  }

  if (variant === "text") {
    return (
      <div className="flex items-center space-x-2">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleChangeLocale(loc)}
            className={`text-sm ${locale === loc ? "font-bold text-primary" : "text-gray-600 hover:text-gray-900"}`}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-sm font-medium">{t("language")}:</p>
      <div className="flex space-x-2">
        {locales.map((loc) => (
          <Button
            key={loc}
            variant={locale === loc ? "default" : "outline"}
            size="sm"
            onClick={() => handleChangeLocale(loc)}
          >
            {localeNames[loc]}
          </Button>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useI18n } from "@/lib/i18n/i18n-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguageNavigation } from "@/hooks/use-language-navigation"

export default function LanguageSwitcher() {
  const { t, language } = useI18n()
  const { changeLanguage } = useLanguageNavigation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("components.languageSwitcher.label")}>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("es")}
          className={language === "es" ? "bg-primary/10 font-medium" : ""}
        >
          {t("components.languageSwitcher.spanish")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className={language === "en" ? "bg-primary/10 font-medium" : ""}
        >
          {t("components.languageSwitcher.english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

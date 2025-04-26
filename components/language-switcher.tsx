"use client"

import { useState } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { locales, type Locale } from "@/config/i18n"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
}

export default function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "minimal" }) {
  const { locale, changeLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={variant === "minimal" ? "sm" : "default"}
          className={cn(
            "flex items-center gap-1 px-2",
            variant === "minimal" && "text-white/80 hover:text-white hover:bg-white/10",
          )}
          aria-label="Cambiar idioma / Change language"
        >
          <Globe className={cn("h-4 w-4", variant === "minimal" && "h-3.5 w-3.5")} />
          {variant === "default" && (
            <>
              <span className="ml-1">{languageNames[locale]}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            className={cn("flex items-center gap-2 cursor-pointer", locale === loc && "font-medium")}
            onClick={() => {
              changeLocale(loc)
              setOpen(false)
            }}
          >
            {locale === loc && <Check className="h-4 w-4" />}
            <span className={locale === loc ? "ml-0" : "ml-6"}>{languageNames[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

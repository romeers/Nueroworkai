"use client"

import { useLanguage } from "@/contexts/language-context"
import { languages } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

type LanguageSwitcherProps = {
  variant?: "default" | "minimal" | "flags"
}

export default function LanguageSwitcher({ variant = "default" }: LanguageSwitcherProps) {
  const { language, setLanguage, isLoading } = useLanguage()

  if (isLoading) {
    return <div className="h-8 w-16 animate-pulse bg-gray-200 rounded"></div>
  }

  // Versión minimal (solo texto)
  if (variant === "minimal") {
    return (
      <div className="flex items-center space-x-2">
        {Object.entries(languages).map(([code, lang]) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`text-sm font-medium ${
              language === code ? "text-primary" : "text-gray-500 hover:text-gray-700"
            }`}
            aria-label={`Cambiar a ${lang.name}`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  // Versión con banderas
  if (variant === "flags") {
    return (
      <div className="flex items-center space-x-2">
        {Object.entries(languages).map(([code, lang]) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`px-2 py-1 rounded ${
              language === code ? "bg-primary/10 text-primary" : "text-gray-500 hover:bg-gray-100"
            }`}
            aria-label={`Cambiar a ${lang.name}`}
          >
            {code === "es" ? "🇪🇸" : "🇺🇸"} {code.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  // Versión por defecto (botones)
  return (
    <div className="flex items-center space-x-2">
      {Object.entries(languages).map(([code, lang]) => (
        <Button
          key={code}
          variant={language === code ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(code)}
          className={language === code ? "bg-primary text-white" : ""}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  )
}

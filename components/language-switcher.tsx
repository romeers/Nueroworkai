"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { languages } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-1">
        <Globe className="h-4 w-4 text-gray-500" />
        <div className="h-6 w-12 bg-gray-200 animate-pulse rounded"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-1">
      <Globe className="h-4 w-4 text-gray-500" />
      <div className="flex space-x-1">
        {Object.keys(languages).map((lang) => (
          <Button
            key={lang}
            variant={language === lang ? "default" : "ghost"}
            size="sm"
            className={`px-2 py-1 text-xs ${
              language === lang ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
            }`}
            onClick={() => setLanguage(lang)}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next-intl/client"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={locale === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => switchLocale("es")}
        className="text-xs"
      >
        ES
      </Button>
      <Button
        variant={locale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => switchLocale("en")}
        className="text-xs"
      >
        EN
      </Button>
    </div>
  )
}

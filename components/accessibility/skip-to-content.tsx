"use client"

import { useLanguage } from "@/contexts/language-context"

export default function SkipToContent() {
  const { t } = useLanguage()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
    >
      {t("skipToContent")}
    </a>
  )
}

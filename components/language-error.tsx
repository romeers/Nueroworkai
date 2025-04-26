"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface LanguageErrorProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export default function LanguageError({ title, message, onRetry }: LanguageErrorProps) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
      <h2 className="text-xl font-bold mb-2">{title || t("errorLoadingData")}</h2>
      <p className="text-gray-600 mb-4">{message || t("errorOccurred")}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          {t("tryAgain")}
        </Button>
      )}
    </div>
  )
}

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

interface LanguageRedirectProps {
  targetLanguage: string
  redirectPath?: string
}

export default function LanguageRedirect({ targetLanguage, redirectPath }: LanguageRedirectProps) {
  const { setLanguage } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    // Cambiar el idioma
    setLanguage(targetLanguage)

    // Redirigir si es necesario
    if (redirectPath) {
      router.push(redirectPath)
    }
  }, [targetLanguage, redirectPath, setLanguage, router])

  return null
}

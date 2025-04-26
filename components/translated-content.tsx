"use client"

import { useLanguage } from "@/contexts/language-context"
import type { ReactNode } from "react"

type TranslatedContentProps = {
  content: {
    [key: string]: ReactNode
  }
}

export default function TranslatedContent({ content }: TranslatedContentProps) {
  const { language } = useLanguage()

  // Si no hay contenido para el idioma actual, mostrar el contenido del idioma por defecto
  return <>{content[language] || content["es"]}</>
}

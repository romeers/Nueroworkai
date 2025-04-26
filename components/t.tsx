"use client"

import { useLanguage } from "@/contexts/language-context"

interface TranslateProps {
  text: string
}

export default function T({ text }: TranslateProps) {
  const { t } = useLanguage()
  return <>{t(text)}</>
}

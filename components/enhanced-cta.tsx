"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

interface EnhancedCTAProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  withEmailForm?: boolean
  emailPlaceholder?: string
  formButtonText?: string
  onSubmit?: (email: string) => void
  microcopy?: string
  bgColor?: "primary" | "secondary" | "accent" | "neutral"
}

export default function EnhancedCTA({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  withEmailForm = false,
  emailPlaceholder,
  formButtonText,
  onSubmit,
  microcopy,
  bgColor = "primary",
}: EnhancedCTAProps) {
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit && email) {
      onSubmit(email)
    }
  }

  const getBgColor = () => {
    switch (bgColor) {
      case "primary":
        return "bg-primary/10"
      case "secondary":
        return "bg-secondary/10"
      case "accent":
        return "bg-violet-100"
      case "neutral":
        return "bg-gray-100"
      default:
        return "bg-primary/10"
    }
  }

  return (
    <section className={`py-16 ${getBgColor()}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{subtitle}</p>}

          {withEmailForm ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <Input
                    type="email"
                    placeholder={emailPlaceholder || t("emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 border-gray-300 focus:ring-primary focus:border-primary rounded-md"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-6 rounded-md whitespace-nowrap"
                >
                  {formButtonText || t("downloadFree")}
                </Button>
              </form>
              {microcopy && <p className="text-xs text-gray-500 mt-2">{microcopy}</p>}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButtonText && primaryButtonUrl && (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={primaryButtonUrl}>{primaryButtonText}</Link>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonUrl && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryButtonUrl}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

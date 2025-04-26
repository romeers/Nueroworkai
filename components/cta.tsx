"use client"

import React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import { useLanguage } from "@/contexts/language-context"

interface CTAProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  onSubmit?: (email: string) => Promise<void>
  withEmailForm?: boolean
  emailPlaceholder?: string
  formButtonText?: string
  microcopy?: string
  bgColor?: "primary" | "secondary" | "white"
  className?: string
  imageSrc?: string
  imageAlt?: string
}

export default function CTA({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  onSubmit,
  withEmailForm = false,
  emailPlaceholder,
  formButtonText,
  microcopy,
  bgColor = "primary",
  className,
  imageSrc,
  imageAlt,
}: CTAProps) {
  const [email, setEmail] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const getBgColor = () => {
    switch (bgColor) {
      case "primary":
        return "bg-primary text-white"
      case "secondary":
        return "bg-secondary text-white"
      case "white":
        return "bg-white text-secondary"
      default:
        return "bg-primary text-white"
    }
  }

  const getButtonStyles = () => {
    switch (bgColor) {
      case "primary":
        return {
          primary: "bg-white text-primary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
      case "secondary":
        return {
          primary: "bg-white text-secondary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
      case "white":
        return {
          primary: "bg-primary text-white hover:bg-primary/90",
          secondary: "border-primary text-primary hover:bg-primary/10",
        }
      default:
        return {
          primary: "bg-white text-primary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
    }
  }

  const buttonStyles = getButtonStyles()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (onSubmit) {
        await onSubmit(email)
      } else {
        // Default behavior - submit to API
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            source: "cta-component",
          }),
        })

        if (!response.ok) {
          throw new Error("Error al enviar el formulario")
        }
      }

      toast({
        title: t("thankYou"),
        description: t("emailSent"),
      })

      setEmail("")
      setSubmitted(true)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      toast({
        title: "Error",
        description: t("errorOccurred"),
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={cn(`py-20 px-6 relative overflow-hidden`, getBgColor(), className)}>
      {/* Optional background pattern */}
      {bgColor === "primary" && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
      )}

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {imageSrc && (
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-lg">
              <SafeImage
                src={imageSrc}
                alt={imageAlt || ""}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {children || t("ctaTitle")}
          </h2>
          <p className={`text-lg mb-8 ${bgColor === "white" ? "text-gray-600" : "text-white/90"}`}>
            {microcopy || t("ctaSubtitle")}
          </p>

          {withEmailForm ? (
            <div className="max-w-xl mx-auto">
              {submitted ? (
                <div
                  className={`p-4 rounded-md ${bgColor === "white" ? "bg-green-50 text-green-800" : "bg-white/10 text-white"}`}
                  role="alert"
                >
                  <p className="font-medium">{t("thankYou")}</p>
                  <p className="text-sm mt-1">{t("emailSent")}</p>
                </div>
              ) : (
                <form
                  className="flex flex-col md:flex-row gap-4 justify-center"
                  onSubmit={handleSubmit}
                  aria-label="Formulario de suscripción"
                >
                  <Input
                    type="email"
                    placeholder={emailPlaceholder || t("emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full md:w-[320px] px-4 py-3 rounded-md text-sm text-gray-900 bg-white border-0 shadow-sm"
                    aria-label="Email para suscripción"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-violet-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition w-full md:w-auto"
                    aria-label={loading ? t("sending") : formButtonText || t("ctaButtonText")}
                  >
                    {loading ? t("sending") : formButtonText || t("ctaButtonText")}
                  </Button>
                </form>
              )}
              {microcopy && !submitted && (
                <p className={`text-sm mt-4 ${bgColor === "white" ? "text-gray-500" : "text-white/80"}`}>
                  {microcopy || t("ctaMicrocopy")}
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size={size} className={buttonStyles.primary}>
                <Link href={href || "/kit-digital"} aria-label={(children as string) || t("downloadFree")}>
                  {children || t("downloadFree")}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

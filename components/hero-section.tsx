"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SafeImage from "./safe-image"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: "right" | "left"
  className?: string
  contentClassName?: string
  imageClassName?: string
}

export default function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  imageSrc = "/neural-network-head.png",
  imageAlt,
  imagePosition = "right",
  className,
  contentClassName,
  imageClassName,
}: HeroSectionProps) {
  const { t } = useLanguage()

  return (
    <section
      className={cn("relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24", className)}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={cn(
            "flex flex-col gap-8 md:gap-12",
            imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse",
            contentClassName,
          )}
        >
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight mb-6">
              {title || t("ctaTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              {subtitle || t("ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href={primaryButtonUrl || "/herramientas-ia"}>
                  {primaryButtonText || t("discoverTools")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {secondaryButtonText && secondaryButtonUrl && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryButtonUrl}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70"></div>
              <div
                className={cn(
                  "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg",
                  imageClassName,
                )}
              >
                <SafeImage
                  src={imageSrc}
                  alt={imageAlt || t("ctaTitle")}
                  width={540}
                  height={405}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

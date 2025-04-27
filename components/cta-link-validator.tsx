"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface CTALinkValidatorProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  isExternal?: boolean
  trackingId?: string
  fallbackHref?: string
}

export default function CTALinkValidator({
  href,
  children,
  className,
  variant = "default",
  size = "default",
  isExternal = false,
  trackingId,
  fallbackHref = "/",
}: CTALinkValidatorProps) {
  const [validatedHref, setValidatedHref] = useState(href)
  const [isExternalLink, setIsExternalLink] = useState(isExternal)

  useEffect(() => {
    // Validar que la URL sea correcta
    try {
      // Si es una URL externa, verificar que tenga el protocolo
      if (href.startsWith("http") || href.startsWith("https")) {
        new URL(href) // Esto lanzará un error si la URL no es válida
        setIsExternalLink(true)
      } else if (href.startsWith("/")) {
        // Es una URL interna, no necesita validación adicional
        setIsExternalLink(false)
      } else {
        // Si no tiene protocolo ni comienza con /, asumir que es externa y añadir https
        setValidatedHref(`https://${href}`)
        setIsExternalLink(true)
      }
    } catch (error) {
      console.error(`Invalid URL: ${href}`, error)
      setValidatedHref(fallbackHref)
      setIsExternalLink(false)
    }
  }, [href, fallbackHref])

  // Atributos para enlaces externos
  const externalProps = isExternalLink
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}

  // Atributos de tracking
  const trackingProps = trackingId
    ? {
        "data-analytics-event": trackingId,
      }
    : {}

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={validatedHref} {...externalProps} {...trackingProps}>
        {children}
        {isExternalLink && <ExternalLink className="ml-2 h-4 w-4" />}
      </Link>
    </Button>
  )
}

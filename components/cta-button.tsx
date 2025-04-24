"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

type CTAVariant = "primary" | "secondary" | "tertiary" | "outline"
type CTASize = "sm" | "md" | "lg"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: CTAVariant
  size?: CTASize
  className?: string
  external?: boolean
  affiliate?: boolean
  onClick?: () => void
  icon?: React.ReactNode
  id?: string
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  affiliate = false,
  onClick,
  icon,
  id,
}: CTAButtonProps) {
  const isExternalUrl = external || href.startsWith("http")

  const getVariantStyles = (): string => {
    switch (variant) {
      case "primary":
        return "bg-primary hover:bg-primary/90 text-white"
      case "secondary":
        return "bg-secondary hover:bg-secondary/90 text-white"
      case "tertiary":
        return "bg-white text-primary hover:bg-gray-100 border border-primary/20"
      case "outline":
        return "bg-transparent hover:bg-gray-100 text-secondary border border-gray-300"
      default:
        return "bg-primary hover:bg-primary/90 text-white"
    }
  }

  const getSizeStyles = (): string => {
    switch (size) {
      case "sm":
        return "text-sm py-1 px-3"
      case "md":
        return "text-base py-2 px-4"
      case "lg":
        return "text-lg py-3 px-6"
      default:
        return "text-base py-2 px-4"
    }
  }

  return (
    <Button asChild className={cn(getVariantStyles(), getSizeStyles(), className)} onClick={onClick} id={id}>
      <Link
        href={href}
        target={isExternalUrl ? "_blank" : undefined}
        rel={isExternalUrl ? `noopener ${affiliate ? "sponsored" : ""}`.trim() : undefined}
        className="inline-flex items-center gap-2"
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
        {isExternalUrl && <ExternalLink className="ml-1 h-4 w-4" />}
      </Link>
    </Button>
  )
}

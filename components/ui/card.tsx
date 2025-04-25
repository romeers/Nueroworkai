"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Original Card components
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}>
    {children}
  </div>
))
Card.displayName = "Card"

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
    {children}
  </div>
))
CardHeader.displayName = "CardHeader"

export interface CardTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
))
CardTitle.displayName = "CardTitle"

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  ),
)
CardDescription.displayName = "CardDescription"

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "small" | "medium" | "large"
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, padding = "medium", ...props }, ref) => {
    const paddingClasses = {
      none: "p-0",
      small: "p-3",
      medium: "p-5",
      large: "p-6",
    }

    return (
      <div ref={ref} className={cn("flex-1 flex flex-col", paddingClasses[padding], className)} {...props}>
        {children}
      </div>
    )
  },
)
CardContent.displayName = "CardContent"

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "small" | "medium" | "large"
  bordered?: boolean
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, padding = "medium", bordered = false, ...props }, ref) => {
    const paddingClasses = {
      none: "p-0",
      small: "px-3 py-2",
      medium: "px-5 py-3",
      large: "px-6 py-4",
    }

    return (
      <div
        ref={ref}
        className={cn("mt-auto", paddingClasses[padding], bordered && "border-t border-gray-100", className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
CardFooter.displayName = "CardFooter"

// Custom card components
export interface BaseCardProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  as?: "div" | "article" | "section"
  hover?: boolean
}

export function BaseCard({ className, children, onClick, as = "div", hover = true }: BaseCardProps) {
  const Component = as

  return (
    <Component
      className={cn(
        "rounded-lg border bg-white overflow-hidden flex flex-col h-full",
        hover && "transition-all duration-200 hover:shadow-md",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

export interface CardImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: "square" | "video" | "wide" | "auto"
  fill?: boolean
  badges?: {
    text: string
    variant?: "default" | "outline" | "secondary" | "primary"
    className?: string
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  }[]
}

export function CardImage({ src, alt, className, aspectRatio = "video", fill = true, badges = [] }: CardImageProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-100",
        aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
      />

      {badges.map((badge, index) => {
        const positionClasses = {
          "top-left": "top-2 left-2",
          "top-right": "top-2 right-2",
          "bottom-left": "bottom-2 left-2",
          "bottom-right": "bottom-2 right-2",
        }

        return (
          <div key={index} className={cn("absolute", positionClasses[badge.position || "top-left"])}>
            <Badge variant={badge.variant || "default"} className={badge.className}>
              {badge.text}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

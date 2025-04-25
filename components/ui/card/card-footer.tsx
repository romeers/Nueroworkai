import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export interface CardFooterProps {
  className?: string
  children: ReactNode
  padding?: "none" | "small" | "medium" | "large"
  bordered?: boolean
}

export function CardFooter({ className, children, padding = "medium", bordered = false }: CardFooterProps) {
  const paddingClasses = {
    none: "p-0",
    small: "px-3 py-2",
    medium: "px-5 py-3",
    large: "px-6 py-4",
  }

  return (
    <div className={cn("mt-auto", paddingClasses[padding], bordered && "border-t border-gray-100", className)}>
      {children}
    </div>
  )
}

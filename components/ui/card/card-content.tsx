import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export interface CardContentProps {
  className?: string
  children: ReactNode
  padding?: "none" | "small" | "medium" | "large"
}

export function CardContent({ className, children, padding = "medium" }: CardContentProps) {
  const paddingClasses = {
    none: "p-0",
    small: "p-3",
    medium: "p-5",
    large: "p-6",
  }

  return <div className={cn("flex-1 flex flex-col", paddingClasses[padding], className)}>{children}</div>
}

"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export interface BaseCardProps {
  className?: string
  children: ReactNode
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

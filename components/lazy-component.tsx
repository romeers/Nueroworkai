"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface LazyComponentProps {
  children: React.ReactNode
  placeholder?: React.ReactNode
  rootMargin?: string
  threshold?: number
}

export default function LazyComponent({
  children,
  placeholder,
  rootMargin = "200px",
  threshold = 0,
}: LazyComponentProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    rootMargin,
    threshold,
  })
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isIntersecting && !shouldRender) {
      setShouldRender(true)
    }
  }, [isIntersecting, shouldRender])

  return (
    <div ref={ref}>
      {shouldRender ? children : placeholder || <div className="animate-pulse bg-gray-200 h-40 rounded-md" />}
    </div>
  )
}

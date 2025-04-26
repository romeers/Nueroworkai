"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"

interface LazyComponentLoaderProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  placeholder?: ReactNode
  className?: string
}

export default function LazyComponentLoader({
  children,
  threshold = 0.1,
  rootMargin = "200px",
  placeholder,
  className,
}: LazyComponentLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder || <div className="min-h-[100px] bg-gray-100 animate-pulse rounded-md" />}
    </div>
  )
}

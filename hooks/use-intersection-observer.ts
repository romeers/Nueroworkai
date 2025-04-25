"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  root?: RefObject<Element> | null
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0,
  rootMargin = "0px",
  root = null,
}: UseIntersectionObserverProps = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
        root: root?.current,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, root])

  return [ref, isIntersecting]
}

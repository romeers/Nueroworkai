"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface RedirectAfterSubscriptionProps {
  redirectUrl: string
  delay?: number
}

export default function RedirectAfterSubscription({ redirectUrl, delay = 1500 }: RedirectAfterSubscriptionProps) {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirectUrl)
    }, delay)

    return () => clearTimeout(timer)
  }, [redirectUrl, delay, router])

  return null
}

"use client"

import type React from "react"

import Head from "next/head"
import { usePathname } from "next/navigation"

interface ClientSEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
  children?: React.ReactNode
}

export default function ClientSEO({
  title,
  description,
  keywords,
  ogImage = "/neural-network-head.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
  children,
}: ClientSEOProps) {
  const pathname = usePathname()
  const baseUrl = "https://neuroworkai.com"
  const fullUrl = canonicalUrl || `${baseUrl}${pathname}`

  const defaultTitle = "NeuroWorkAI - Herramientas de IA para Profesionales Remotos"
  const defaultDescription =
    "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Reseñas, comparativas y recursos gratuitos."
  const defaultKeywords =
    "IA, inteligencia artificial, productividad, trabajo remoto, herramientas IA, Notion AI, Zapier, Make, ClickUp, Grammarly, Jasper, Fireflies"

  const pageTitle = title ? `${title} | NeuroWorkAI` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = keywords || defaultKeywords

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="NeuroWorkAI" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:site" content="@neuroworkai" />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {children}
    </Head>
  )
}

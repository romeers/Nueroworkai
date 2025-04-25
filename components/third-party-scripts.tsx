"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

export default function ThirdPartyScripts() {
  const pathname = usePathname()

  // Reset Google Analytics page view on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-YRJDF8M1RE", {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      {/* Google Analytics */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-YRJDF8M1RE" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YRJDF8M1RE', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

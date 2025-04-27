"use client"

import Script from "next/script"
import { useEffect } from "react"
import { registerServiceWorker } from "@/app/register-sw"

export default function ThirdPartyScripts() {
  useEffect(() => {
    // Register service worker
    registerServiceWorker()

    // Add performance monitoring
    if (typeof window !== "undefined") {
      // Report web vitals
      const reportWebVitals = () => {
        if (window.performance && window.performance.getEntriesByType) {
          // Get LCP
          const lcpEntries = window.performance.getEntriesByType("element") as PerformanceElementTiming[]
          const lcpEntry = lcpEntries.length ? lcpEntries[0] : null

          if (lcpEntry) {
            console.log("LCP:", lcpEntry.startTime)
          }

          // Get FID
          const fidEntries = window.performance.getEntriesByType("first-input") as PerformanceEventTiming[]
          const fidEntry = fidEntries.length ? fidEntries[0] : null

          if (fidEntry) {
            console.log("FID:", fidEntry.processingStart - fidEntry.startTime)
          }
        }
      }

      // Report after page load
      window.addEventListener("load", () => {
        setTimeout(reportWebVitals, 3000)
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics - load with low priority */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      {/* Optimize image loading */}
      <Script id="image-optimization" strategy="afterInteractive">
        {`
          // Lazy load images outside viewport
          if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
              img.src = img.dataset.src;
            });
          } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
          }
        `}
      </Script>
    </>
  )
}

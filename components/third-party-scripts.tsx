"use client"

import Script from "next/script"
import { useEffect } from "react"
import { registerServiceWorker } from "@/app/register-sw"

export default function ThirdPartyScripts() {
  useEffect(() => {
    // Register service worker solo en producción
    if (process.env.NODE_ENV === "production") {
      registerServiceWorker()
    }

    // Añadir performance monitoring solo en producción
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      // Cargar web vitals de forma diferida
      const loadWebVitals = () => {
        import("web-vitals").then(({ getCLS, getFID, getLCP }) => {
          getCLS(console.log)
          getFID(console.log)
          getLCP(console.log)
        })
      }

      // Usar requestIdleCallback o setTimeout como fallback
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadWebVitals)
      } else {
        setTimeout(loadWebVitals, 3000)
      }
    }
  }, [])

  return (
    <>
      {/* Cargar scripts críticos primero */}
      <Script
        id="critical-scripts"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Detectar preferencia de tema
            try {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.toggle('dark', theme === 'dark');
            } catch (e) {}
          `,
        }}
      />

      {/* Cargar scripts no críticos después de la interacción */}
      <Script
        id="image-optimization"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Lazy load images outside viewport
            if ('loading' in HTMLImageElement.prototype) {
              const images = document.querySelectorAll('img[loading="lazy"]');
              images.forEach(img => {
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                }
              });
            } else {
              // Fallback para navegadores que no soportan lazy loading
              const script = document.createElement('script');
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
              document.body.appendChild(script);
            }
          `,
        }}
      />

      {/* Google Analytics - cargar solo en producción */}
      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID && (
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
      )}
      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID && (
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
                'anonymize_ip': true
              });
            `,
          }}
        />
      )}
    </>
  )
}

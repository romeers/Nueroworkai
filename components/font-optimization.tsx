"use client"

import Script from "next/script"

export default function FontOptimization() {
  return (
    <>
      {/* Preconnect to Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Font Display Swap */}
      <style jsx global>{`
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
        }
      `}</style>

      {/* Font Loading Script */}
      <Script id="font-optimization" strategy="afterInteractive">
        {`
          (function() {
            // Check if fonts are already loaded
            if (document.fonts && document.fonts.check('1em Inter') && document.fonts.check('1em Poppins')) {
              document.documentElement.classList.add('fonts-loaded');
              return;
            }
            
            // Font loading observer
            if ("fonts" in document) {
              Promise.all([
                document.fonts.load("1em Inter"),
                document.fonts.load("1em Poppins"),
              ]).then(() => {
                document.documentElement.classList.add("fonts-loaded");
              });
            }
          })();
        `}
      </Script>
    </>
  )
}

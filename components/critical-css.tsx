"use client"

export default function CriticalCSS() {
  return (
    <style jsx global>{`
      /* Critical CSS for above-the-fold content */
      :root {
        --primary: 272 91% 58%;
        --secondary: 217 33% 17%;
      }
      
      body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .header {
        position: sticky;
        top: 0;
        z-index: 50;
        transition: all 0.2s;
      }
      
      .header-scrolled {
        background-color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }
      
      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }
      
      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }
      
      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }
      
      /* Optimize CLS for images */
      img {
        max-width: 100%;
        height: auto;
      }
    `}</style>
  )
}

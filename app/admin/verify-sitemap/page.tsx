"use client"

import { useState, useEffect } from "react"

export default function VerifySitemap() {
  const [sitemapContent, setSitemapContent] = useState<string>("Loading...")
  const [isValid, setIsValid] = useState<boolean | null>(null)

  useEffect(() => {
    async function fetchSitemap() {
      try {
        const response = await fetch("/sitemap.xml")
        const text = await response.text()
        setSitemapContent(text)

        // Basic validation - check if it starts with XML declaration and contains urlset
        const isValidXml =
          text.trim().startsWith("<?xml") &&
          text.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

        setIsValid(isValidXml)
      } catch (error) {
        console.error("Error fetching sitemap:", error)
        setSitemapContent("Error loading sitemap")
        setIsValid(false)
      }
    }

    fetchSitemap()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sitemap Verification</h1>

      <div className="mb-4">
        <p className="font-semibold">
          Status: {isValid === null ? "Checking..." : isValid ? "Valid XML Sitemap ✅" : "Invalid XML Sitemap ❌"}
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Content Type Check</h2>
        <p>
          Visit{" "}
          <a href="/sitemap.xml" target="_blank" className="text-blue-600 underline" rel="noreferrer">
            sitemap.xml
          </a>{" "}
          and check if the browser displays it as XML (not HTML)
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Content Preview</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96 text-xs">{sitemapContent}</pre>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
        <ol className="list-decimal pl-5">
          <li>Verify the sitemap is properly formatted XML</li>
          <li>Check that the Content-Type header is set to application/xml</li>
          <li>Submit the sitemap to Google Search Console</li>
        </ol>
      </div>
    </div>
  )
}

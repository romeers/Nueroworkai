import { NextResponse } from "next/server"
import { getAllTools, getAllCategories } from "@/lib/static-data"
import { getResources } from "@/lib/static-data"

export async function GET() {
  try {
    // Get current date in ISO format for lastmod
    const date = new Date().toISOString().split("T")[0]

    // Get all dynamic data
    const tools = await getAllTools()
    const categories = await getAllCategories()
    const resources = await getResources(100) // Get up to 100 resources

    // Start building the XML sitemap
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://neuroworkai.com/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://neuroworkai.com/herramientas-ia</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://neuroworkai.com/recursos</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://neuroworkai.com/sobre-nosotros</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://neuroworkai.com/top-herramientas-ia</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`

    // Add all tool pages
    tools.forEach((tool) => {
      xml += `
  <url>
    <loc>https://neuroworkai.com/herramientas/${tool.slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    })

    // Add all category pages
    categories.forEach((category) => {
      xml += `
  <url>
    <loc>https://neuroworkai.com/herramientas/categoria/${category.slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    })

    // Add all resource pages
    resources.forEach((resource) => {
      xml += `
  <url>
    <loc>https://neuroworkai.com/recursos/${resource.slug}</loc>
    <lastmod>${resource.publishedAt ? new Date(resource.publishedAt).toISOString().split("T")[0] : date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    })

    // Close the XML
    xml += `
</urlset>`

    // Return the XML with proper content type
    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return new NextResponse("Error generating sitemap", { status: 500 })
  }
}

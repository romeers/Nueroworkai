import fs from "fs"
import path from "path"
import { getAllTools, getAllCategories, getResources } from "../lib/static-data"

async function generateSitemap() {
  console.log("Generating sitemap.xml...")

  // Get current date in ISO format for lastmod
  const date = new Date().toISOString().split("T")[0]

  // Get all dynamic data
  const tools = getAllTools()
  const categories = getAllCategories()
  const resources = getResources(100) // Get up to 100 resources

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

  // Write the XML to the public directory
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml)

  console.log("Sitemap generated successfully!")
}

// Execute the function
generateSitemap().catch(console.error)

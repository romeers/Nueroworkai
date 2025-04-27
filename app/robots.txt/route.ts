import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: https://neuroworkai.com/sitemap.xml

# Directorios y archivos específicos
Disallow: /admin/
Disallow: /_next/
Disallow: /api/
Disallow: /*.json$
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  })
}

export function createAffiliateLink(url: string, toolName: string, source: string): string {
  const baseUrl = new URL(url)
  baseUrl.searchParams.append("utm_source", "neuroworkai")
  baseUrl.searchParams.append("utm_medium", "affiliate")
  baseUrl.searchParams.append("utm_campaign", toolName.toLowerCase().replace(/\s+/g, "-"))
  baseUrl.searchParams.append("utm_content", source)

  return baseUrl.toString()
}

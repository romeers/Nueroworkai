import { getLocalizedUrls } from "@/utils/language-utils"
import { locales } from "@/config/i18n"
import Head from "next/head"

interface HreflangLinksProps {
  url: string
}

export default function HreflangLinks({ url }: HreflangLinksProps) {
  const localizedUrls = getLocalizedUrls(url)
  const baseUrl = "https://neuroworkai.com"

  return (
    <Head>
      {locales.map((locale) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={`${baseUrl}${localizedUrls[locale]}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${localizedUrls.es}`} />
    </Head>
  )
}

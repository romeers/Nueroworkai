import { locales, type Locale } from "@/config/i18n"

/**
 * Transforms a URL to include the locale prefix
 */
export function localizeUrl(url: string, locale: Locale): string {
  // If the URL already starts with a locale, replace it
  const urlWithoutLocale = url.replace(/^\/[a-z]{2}(?:\/|$)/, "/")

  // Add the locale prefix
  return `/${locale}${urlWithoutLocale === "/" ? "" : urlWithoutLocale}`
}

/**
 * Gets the current locale from a URL
 */
export function getLocaleFromUrl(url: string): Locale | null {
  const match = url.match(/^\/([a-z]{2})(?:\/|$)/)
  if (match && locales.includes(match[1] as Locale)) {
    return match[1] as Locale
  }
  return null
}

/**
 * Removes the locale prefix from a URL
 */
export function removeLocaleFromUrl(url: string): string {
  return url.replace(/^\/[a-z]{2}(?:\/|$)/, "/")
}

/**
 * Gets all localized versions of a URL
 */
export function getLocalizedUrls(url: string): Record<Locale, string> {
  const urlWithoutLocale = removeLocaleFromUrl(url)

  return locales.reduce(
    (acc, locale) => {
      acc[locale] = localizeUrl(urlWithoutLocale, locale)
      return acc
    },
    {} as Record<Locale, string>,
  )
}

import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./config/i18n"

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // The default locale to use when a non-locale-prefixed path is visited
  defaultLocale,
  // Detect locale from browser settings
  localeDetection: true,
  // Redirect to locale-prefixed paths
  localePrefix: "always",
})

export const config = {
  // Match all paths except for
  // - API routes
  // - Static files
  // - _next paths
  // - Public files
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}

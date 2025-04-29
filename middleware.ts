import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "en"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "es",

  // Domains can be used to match specific locales to specific domains
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'es'
  //   },
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   }
  // ]
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}

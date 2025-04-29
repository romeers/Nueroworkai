"use client"

import { default as NextLink } from "next/link"
import { usePathname } from "next/navigation"
import { Link as NextIntlLink, useSelectedLocale } from "next-intl"
import { type ComponentProps, forwardRef } from "react"

type LinkProps = ComponentProps<typeof NextLink>

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ href, ...rest }, ref) {
  const pathname = usePathname()
  const locale = useSelectedLocale()

  // Handle external links
  if (typeof href === "string" && (href.startsWith("http") || href.startsWith("#"))) {
    return <NextLink ref={ref} href={href} {...rest} />
  }

  // Handle internal links with next-intl
  return <NextIntlLink ref={ref} href={href} locale={locale} {...rest} />
})

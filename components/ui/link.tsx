import type * as React from "react"
import NextLink from "next/link"

import { cn } from "@/lib/utils"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink className={cn(className)} {...props}>
      {children}
    </NextLink>
  )
}

export { Link }

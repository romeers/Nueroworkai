"use client"

import { cn } from "@/lib/utils"

interface AffiliateDisclosureProps {
  variant?: "default" | "compact"
  className?: string
}

const AffiliateDisclosure = ({ variant = "default", className }: AffiliateDisclosureProps) => {
  const text =
    "Utilizamos enlaces de afiliados. Si realizas una compra a través de nuestros enlaces, podemos recibir una comisión sin costo adicional para ti."

  return <p className={cn("text-xs text-gray-500", className)}>{text}</p>
}

export default AffiliateDisclosure

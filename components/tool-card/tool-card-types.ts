/**
 * Tipos para el componente ToolCard y sus subcomponentes
 */

export interface Tool {
  id: number
  name: string
  slug: string
  description: string
  long_description?: string
  category_id: number
  category_name: string
  image_url: string
  affiliate_url?: string
  score?: number
  pros?: string[]
  cons?: string[]
  features?: ToolFeature[]
  pricing?: ToolPricing[]
  tags?: string[]
  verified?: boolean
  special_offer?: string
  why_we_recommend?: string
}

export interface ToolFeature {
  name: string
  description: string
  image_url?: string
}

export interface ToolPricing {
  name: string
  price: number
  period: "monthly" | "yearly" | "one-time"
  features: string[]
  popular?: boolean
}

export interface ToolCardProps {
  tool: Tool
  variant?: "default" | "compact" | "featured"
  showRating?: boolean
  showFeatures?: boolean
  showTags?: boolean
  showActions?: boolean
  className?: string
  [key: string]: any
}

export interface ToolRatingProps {
  score: number
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export interface ToolFeaturesProps {
  features: ToolFeature[]
  maxItems?: number
  className?: string
}

export interface ToolTagsProps {
  tags: string[]
  maxItems?: number
  className?: string
}

export interface ToolImageProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export interface ToolSpecialOfferProps {
  offer: string
  className?: string
}

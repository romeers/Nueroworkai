import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingPlan {
  plan: string
  price: string
  features: string[]
  recommended?: boolean
  affiliateUrl?: string
}

interface PricingTableProps {
  plans: PricingPlan[]
  toolName: string
  affiliateUrl?: string
}

export default function PricingTable({ plans, toolName, affiliateUrl }: PricingTableProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={cn(
            "rounded-lg border p-6 shadow-sm transition-all duration-200 hover:shadow-md",
            plan.recommended ? "border-primary/30 bg-primary/5 relative" : "",
          )}
        >
          {plan.recommended && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
              Recomendado
            </div>
          )}
          <h3 className="text-lg font-semibold text-secondary">{plan.plan}</h3>
          <p className="mt-2 text-2xl font-bold text-primary">{plan.price}</p>
          <ul className="mt-4 space-y-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={cn(
              "mt-6 w-full",
              plan.recommended ? "bg-primary hover:bg-primary/90" : "bg-primary/80 hover:bg-primary",
            )}
          >
            <Link href={plan.affiliateUrl || affiliateUrl || "#"} target="_blank" rel="noopener sponsored">
              Probar {plan.plan}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}

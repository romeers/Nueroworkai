import UnifiedCTA from "@/components/unified-cta"

interface ToolCTASectionProps {
  toolName: string
  ctaText?: string
  affiliateUrl?: string
  specialOffer?: string
  slug: string
}

export default function ToolCTASection({ toolName, ctaText, affiliateUrl, specialOffer, slug }: ToolCTASectionProps) {
  // Función para obtener la URL oficial si no hay URL de afiliado
  const getOfficialUrl = (toolName: string) => {
    const toolUrls: Record<string, string> = {
      "Notion AI": "https://www.notion.so/product/ai",
      Zapier: "https://zapier.com/",
      ClickUp: "https://clickup.com/",
      Fireflies: "https://fireflies.ai/",
      "Otter.ai": "https://otter.ai/",
      Grammarly: "https://www.grammarly.com/",
      Jasper: "https://www.jasper.ai/",
      ChatGPT: "https://chat.openai.com/",
    }

    return toolUrls[toolName] || "https://www.notion.so/product/ai" // Notion AI como fallback
  }

  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para probar {toolName}?</h2>
          <p className="mt-4 text-lg text-white/90">
            {ctaText || `Descubre cómo ${toolName} puede transformar tu productividad y optimizar tu trabajo remoto.`}
          </p>
          <div className="mt-8">
            <UnifiedCTA
              href={affiliateUrl || getOfficialUrl(toolName)}
              external={true}
              affiliate={!!affiliateUrl}
              variant="tertiary"
              size="lg"
              trackingId={`cta-section-${slug}`}
            >
              {specialOffer ? "Aprovechar oferta especial" : "Probar gratis"}
            </UnifiedCTA>
          </div>
          <p className="mt-4 text-sm text-white/70">
            * Utilizamos enlaces de afiliados. Si realizas una compra a través de nuestros enlaces, podemos recibir una
            comisión sin costo adicional para ti.
          </p>
        </div>
      </div>
    </section>
  )
}

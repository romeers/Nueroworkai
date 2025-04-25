import type { Metadata } from "next"
import TopHerramientasIAContent from "./TopHerramientasIAContent"

export const metadata: Metadata = {
  title: "Mejores Herramientas de IA para Productividad | NeuroWorkAI",
  description:
    "Descubre nuestras herramientas de IA más valoradas, seleccionadas para mejorar tu productividad remota.",
  keywords:
    "mejores herramientas IA, productividad, trabajo remoto, Notion AI, Zapier, ClickUp, ChatGPT, automatización, IA para trabajo",
}

export default function TopHerramientasIAPage() {
  return <TopHerramientasIAContent />
}

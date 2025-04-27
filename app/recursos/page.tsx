import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo/metadata-generator"
import { ResourcesClientComponent } from "./ResourcesClientComponent"

export const metadata: Metadata = generateMetadata({
  title: "Recursos y Guías de IA para Profesionales | NeuroWorkAI",
  description:
    "Descarga guías prácticas, prompts optimizados y plantillas para implementar IA en tu trabajo diario. Recursos gratuitos para aumentar tu productividad con inteligencia artificial.",
  keywords: [
    "recursos IA",
    "guías IA",
    "prompts IA",
    "plantillas IA",
    "productividad IA",
    "herramientas IA",
    "automatización IA",
    "kit productividad IA",
    "descargas gratuitas IA",
    "tutoriales IA",
  ],
  ogImage: "/recursos-ia-productividad-og.png",
  ogType: "website",
  canonical: "/recursos",
})

export default function RecursosPage() {
  return <ResourcesClientComponent />
}

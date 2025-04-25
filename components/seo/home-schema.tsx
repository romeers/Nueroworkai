export default function HomeSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NeuroWorkAI",
    url: "https://neuroworkai.com",
    description: "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://neuroworkai.com/herramientas-ia?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}

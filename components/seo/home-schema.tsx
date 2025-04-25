export default function HomeSchema() {
  const currentYear = new Date().getFullYear()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NeuroWorkAI",
    alternateName: "Neuro Work AI",
    url: "https://neuroworkai.com",
    description: `Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Reseñas, comparativas y recursos gratuitos ${currentYear}.`,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://neuroworkai.com/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "NeuroWorkAI",
      logo: {
        "@type": "ImageObject",
        url: "https://neuroworkai.com/neuroworkai-logo.png",
        width: 600,
        height: 60,
      },
    },
    sameAs: [
      "https://twitter.com/neuroworkai",
      "https://facebook.com/neuroworkai",
      "https://instagram.com/neuroworkai",
      "https://linkedin.com/company/neuroworkai",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NeuroWorkAI",
    url: "https://neuroworkai.com",
    logo: "https://neuroworkai.com/neuroworkai-logo.png",
    description: "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contacto@neuroworkai.com",
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

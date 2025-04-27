export default function ContactPageSchema() {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacta con nosotros | NeuroWorkAI",
    description: "¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? Estamos aquí para ayudarte.",
    url: `${baseUrl}/contacto`,
    mainEntity: {
      "@type": "Organization",
      name: "NeuroWorkAI",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      email: "bussines@neuroworkai.com",
      telephone: "+34123456789",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Madrid",
        addressCountry: "ES",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61575664503316",
        "https://www.instagram.com/neuroworkai",
        "https://www.linkedin.com/company/neuroworksai/",
      ],
    },
    // Add breadcrumbs
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": baseUrl,
            name: "Inicio",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": `${baseUrl}/contacto`,
            name: "Contacto",
          },
        },
      ],
    },
    // Add FAQ section
    mainContentOfPage: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto tardan en responder a las consultas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nos esforzamos por responder a todas las consultas en un plazo de 24-48 horas laborables.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo sugerir una herramienta para que la reseñéis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "¡Por supuesto! Nos encanta descubrir nuevas herramientas. Puedes enviarnos tu sugerencia a través del formulario de contacto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Ofrecéis servicios de consultoría sobre herramientas de IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Actualmente no ofrecemos servicios de consultoría formales, pero estamos encantados de responder preguntas específicas sobre herramientas de IA para trabajo remoto.",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}

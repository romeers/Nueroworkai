export function getToolData(slug: string) {
  const toolsData: Record<string, any> = {
    "notion-ai": {
      name: "Notion AI",
      description: "Asistente de escritura y organización con IA integrada en Notion.",
      longDescription:
        "Notion AI es una potente herramienta de inteligencia artificial integrada directamente en la plataforma de Notion. Permite a los usuarios generar texto, resumir contenido, traducir a múltiples idiomas, mejorar la escritura y mucho más, todo sin salir de su espacio de trabajo habitual.",
      imageUrl: "/notion-ai-blue.png",
      category: "Escritura IA",
      tags: ["Escritura IA", "Productividad", "Organización", "Colaboración"],
      neuroScore: {
        overall: 9.2,
        easeOfUse: 9.5,
        aiFeatures: 9.0,
        valueForMoney: 8.8,
        support: 9.0,
        integration: 9.5,
        implementationTime: 9.0,
      },
      url: "https://www.notion.so/product/ai",
      affiliateUrl: "https://www.notion.so/product/ai?af=123",
      pros: [
        "Integración perfecta con el ecosistema de Notion",
        "Interfaz intuitiva y fácil de usar",
        "Múltiples funcionalidades de IA en una sola herramienta",
        "Excelente para equipos que ya utilizan Notion",
        "Mejora continua con nuevas funcionalidades",
      ],
      cons: [
        "Requiere suscripción a Notion para acceder a todas las funciones",
        "Algunas funciones avanzadas tienen limitaciones",
        "Puede ser costoso para equipos grandes",
        "Curva de aprendizaje para nuevos usuarios de Notion",
      ],
      features: [
        {
          name: "Generación de texto",
          description: "Crea contenido de alta calidad a partir de prompts simples.",
          imageUrl: "/notion-ai-text-generation.png",
        },
        {
          name: "Resumen automático",
          description: "Resume documentos largos o reuniones en puntos clave.",
          imageUrl: "/notion-ai-summarization.png",
        },
        {
          name: "Traducción",
          description: "Traduce contenido a múltiples idiomas con un solo clic.",
          imageUrl: "/notion-ai-translation-workflow.png",
        },
        {
          name: "Corrección y mejora de texto",
          description: "Mejora la gramática, el estilo y la claridad de tus textos.",
        },
        {
          name: "Integración con workspace",
          description: "Funciona directamente dentro de tu espacio de trabajo de Notion.",
        },
      ],
      pricing: [
        {
          plan: "Plus",
          price: "$10/mes",
          features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
        },
        {
          plan: "Business",
          price: "$15/mes",
          features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
        },
        {
          plan: "Enterprise",
          price: "$25/usuario/mes",
          features: [
            "100 créditos de IA al mes por usuario",
            "Todas las funciones avanzadas de IA",
            "Funciones de administración y seguridad",
            "Soporte prioritario",
          ],
        },
      ],
      useCases: [
        {
          title: "Creación de contenido",
          description: "Genera borradores de artículos, publicaciones de blog o correos electrónicos rápidamente.",
        },
        {
          title: "Documentación de proyectos",
          description: "Resume reuniones y crea documentación clara y concisa para tu equipo.",
        },
        {
          title: "Gestión del conocimiento",
          description: "Organiza y resume información importante para facilitar su acceso y comprensión.",
        },
      ],
      testimonials: [
        {
          author: "María Rodríguez",
          role: "Diseñadora UX",
          company: "Freelance",
          avatar: "/testimonial-avatar-1.png",
          rating: 5,
          title: "Notion AI ha transformado mi flujo de trabajo",
          comment:
            "Como diseñadora UX, necesito crear documentación clara y concisa. Notion AI me ayuda a generar resúmenes y organizar mis ideas de forma eficiente.",
          date: "15 de agosto, 2023",
          helpful: 23,
          unhelpful: 2,
        },
        {
          author: "Carlos Mendoza",
          role: "Project Manager",
          company: "TechSolutions",
          avatar: "/testimonial-avatar-2.png",
          rating: 4,
          title: "Excelente herramienta para la gestión de proyectos",
          comment:
            "Notion AI me permite mantener a mi equipo al tanto de los avances del proyecto y generar informes de progreso de forma automática.",
          date: "22 de agosto, 2023",
          helpful: 18,
          unhelpful: 1,
        },
      ],
      alternatives: [
        {
          name: "Jasper",
          description: "Generador de contenido con IA para marketing y comunicación.",
          imageUrl: "/ai-logo-blue.png",
          slug: "jasper",
          score: 8.7,
        },
        {
          name: "Grammarly",
          description: "Corrector gramatical y asistente de escritura con IA.",
          imageUrl: "/grammarly-blue.png",
          slug: "grammarly",
          score: 8.9,
        },
      ],
      comparisonFeatures: [
        "Generación de texto",
        "Corrección gramatical",
        "Resumen automático",
        "Traducción",
        "Integración con workspace",
      ],
      reviews: [
        {
          author: "Ana Pérez",
          rating: 5,
          title: "La mejor herramienta de escritura con IA que he probado",
          comment:
            "Notion AI ha superado mis expectativas. Me ayuda a generar contenido de alta calidad en cuestión de minutos.",
          date: "10 de julio, 2023",
          helpful: 15,
          unhelpful: 0,
        },
        {
          author: "Juan Gómez",
          rating: 4,
          title: "Muy útil para organizar mis ideas",
          comment: "Notion AI me permite estructurar mis pensamientos y crear documentos de forma rápida y sencilla.",
          date: "18 de julio, 2023",
          helpful: 12,
          unhelpful: 2,
        },
      ],
      whyWeRecommend:
        "Recomendamos Notion AI por su perfecta integración con el ecosistema de Notion, su interfaz intuitiva y sus múltiples funcionalidades de IA en una sola herramienta. Es ideal para equipos que ya utilizan Notion y buscan mejorar su productividad.",
      lastUpdated: "1 de septiembre, 2023",
      relatedTools: [],
      specialOffer: "20% de descuento en el plan Plus durante el primer año",
      ctaText: "Comienza a crear contenido con IA",
      verified: true,
    },
    zapier: {
      name: "Zapier",
      description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
      longDescription:
        "Zapier es una plataforma de automatización que te permite conectar diferentes aplicaciones y automatizar flujos de trabajo sin necesidad de escribir código. Puedes crear 'Zaps' que transfieren datos entre aplicaciones y realizan acciones automáticamente.",
      imageUrl: "/zapier-blue-background.png",
      category: "Automatización",
      tags: ["Automatización", "Productividad", "Integración", "Sin código"],
      neuroScore: {
        overall: 9.0,
        easeOfUse: 8.5,
        aiFeatures: 7.0,
        valueForMoney: 8.0,
        support: 9.0,
        integration: 9.5,
        implementationTime: 8.0,
      },
      url: "https://zapier.com/",
      affiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
      pros: [
        "Amplia variedad de integraciones con miles de aplicaciones",
        "Interfaz intuitiva y fácil de usar",
        "Gran cantidad de plantillas predefinidas",
        "Soporte técnico de alta calidad",
        "Funciones avanzadas para usuarios técnicos",
      ],
      cons: [
        "El precio puede ser elevado para usuarios con automatizaciones complejas",
        "Algunas integraciones tienen limitaciones",
        "Requiere una buena comprensión de las aplicaciones que se van a integrar",
      ],
      features: [
        {
          name: "Integraciones",
          description: "Conecta miles de aplicaciones diferentes para automatizar flujos de trabajo.",
        },
        {
          name: "Automatizaciones complejas",
          description: "Crea Zaps con múltiples pasos y condiciones para automatizar tareas complejas.",
        },
        {
          name: "Plantillas predefinidas",
          description: "Utiliza plantillas listas para usar para automatizar tareas comunes.",
        },
        {
          name: "Interfaz sin código",
          description: "Crea automatizaciones sin necesidad de escribir código.",
        },
        {
          name: "API personalizada",
          description: "Utiliza la API de Zapier para crear integraciones personalizadas.",
        },
      ],
      pricing: [
        {
          plan: "Free",
          price: "$0/mes",
          features: ["100 tareas al mes", "Integración con aplicaciones básicas", "Soporte limitado"],
        },
        {
          plan: "Starter",
          price: "$19.99/mes",
          features: ["750 tareas al mes", "Integración con aplicaciones premium", "Soporte técnico"],
        },
        {
          plan: "Professional",
          price: "$49/mes",
          features: ["2000 tareas al mes", "Automatizaciones complejas", "Soporte prioritario"],
        },
      ],
      useCases: [
        {
          title: "Automatización de marketing",
          description:
            "Automatiza tareas como el envío de emails, la gestión de redes sociales y la generación de leads.",
        },
        {
          title: "Automatización de ventas",
          description:
            "Automatiza tareas como el seguimiento de clientes, la gestión de contactos y la creación de informes.",
        },
        {
          title: "Automatización de soporte",
          description:
            "Automatiza tareas como la gestión de tickets, la respuesta a preguntas frecuentes y la creación de documentación.",
        },
      ],
      testimonials: [
        {
          author: "Laura Gómez",
          role: "Marketing Manager",
          company: "Acme Corp",
          avatar: "/testimonial-avatar-3.png",
          rating: 5,
          title: "Zapier ha transformado nuestro marketing",
          comment:
            "Zapier nos ha permitido automatizar tareas repetitivas y centrarnos en estrategias de marketing más creativas.",
          date: "1 de septiembre, 2023",
          helpful: 25,
          unhelpful: 1,
        },
        {
          author: "Pedro Sánchez",
          role: "Sales Representative",
          company: "SalesForce",
          avatar: "/testimonial-avatar-2.png",
          rating: 4,
          title: "Zapier me ayuda a cerrar más ventas",
          comment: "Zapier me permite automatizar el seguimiento de clientes y cerrar ventas de forma más eficiente.",
          date: "8 de septiembre, 2023",
          helpful: 20,
          unhelpful: 3,
        },
      ],
      alternatives: [
        {
          name: "Make",
          description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
          imageUrl: "/abstract-geometric-logo.png",
          slug: "make",
          score: 8.8,
        },
        {
          name: "IFTTT",
          description: "Plataforma de automatización para conectar apps y dispositivos.",
          imageUrl: "/abstract-geometric-logo.png",
          slug: "ifttt",
          score: 7.5,
        },
      ],
      comparisonFeatures: [
        "Integraciones",
        "Automatizaciones complejas",
        "Plantillas predefinidas",
        "Interfaz sin código",
        "API personalizada",
      ],
      reviews: [
        {
          author: "Ana Pérez",
          rating: 5,
          title: "La mejor herramienta de automatización que he probado",
          comment: "Zapier ha simplificado mi vida. Me permite automatizar tareas que antes me llevaban horas.",
          date: "15 de agosto, 2023",
          helpful: 18,
          unhelpful: 0,
        },
        {
          author: "Juan Gómez",
          rating: 4,
          title: "Muy útil para conectar mis aplicaciones favoritas",
          comment: "Zapier me permite integrar mis aplicaciones favoritas y crear flujos de trabajo personalizados.",
          date: "22 de agosto, 2023",
          helpful: 15,
          unhelpful: 2,
        },
      ],
      whyWeRecommend:
        "Recomendamos Zapier por su amplia variedad de integraciones, su interfaz intuitiva y su gran cantidad de plantillas predefinidas. Es ideal para usuarios que buscan automatizar tareas repetitivas y conectar diferentes aplicaciones.",
      lastUpdated: "1 de septiembre, 2023",
      relatedTools: [],
      specialOffer: "Prueba gratuita de 14 días",
      ctaText: "Comienza a automatizar tu trabajo",
      verified: true,
    },
    clickup: {
      name: "ClickUp",
      description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
      longDescription:
        "ClickUp es una plataforma de gestión de proyectos que combina funciones de gestión de tareas, colaboración, automatización y IA en una sola herramienta. Permite a los equipos planificar, organizar y realizar un seguimiento de su trabajo de forma eficiente.",
      imageUrl: "/clickup-blue-background.png",
      category: "Gestión de tareas",
      tags: ["Gestión de tareas", "Productividad", "Colaboración", "IA"],
      neuroScore: {
        overall: 8.8,
        easeOfUse: 7.5,
        aiFeatures: 8.5,
        valueForMoney: 9.0,
        support: 8.0,
        integration: 8.5,
        implementationTime: 7.0,
      },
      url: "https://clickup.com/",
      affiliateUrl: "https://clickup.com/?af=123",
      pros: [
        "Amplia variedad de funciones para la gestión de proyectos",
        "Funciones de IA integradas para automatizar tareas y mejorar la productividad",
        "Interfaz personalizable y adaptable a diferentes flujos de trabajo",
        "Planes gratuitos y de pago asequibles",
        "Soporte técnico de alta calidad",
      ],
      cons: [
        "La interfaz puede ser abrumadora para nuevos usuarios",
        "Algunas funciones avanzadas requieren planes de pago",
        "La curva de aprendizaje puede ser pronunciada para usuarios sin experiencia en gestión de proyectos",
      ],
      features: [
        {
          name: "Gestión de tareas",
          description:
            "Crea, asigna y realiza un seguimiento de tareas con diferentes estados, prioridades y fechas de vencimiento.",
        },
        {
          name: "Funciones IA",
          description: "Utiliza funciones de IA para automatizar tareas, generar contenido y mejorar la productividad.",
        },
        {
          name: "Colaboración en tiempo real",
          description: "Colabora con tu equipo en tiempo real con funciones de chat, comentarios y notificaciones.",
        },
        {
          name: "Automatizaciones",
          description: "Automatiza tareas repetitivas con reglas y disparadores personalizados.",
        },
        {
          name: "Personalización",
          description: "Personaliza la interfaz y las funciones de ClickUp para adaptarlas a tu flujo de trabajo.",
        },
      ],
      pricing: [
        {
          plan: "Free Forever",
          price: "$0/mes",
          features: ["100 MB de almacenamiento", "Integración con aplicaciones básicas", "Soporte limitado"],
        },
        {
          plan: "Unlimited",
          price: "$5/mes",
          features: ["Almacenamiento ilimitado", "Integración con aplicaciones premium", "Soporte técnico"],
        },
        {
          plan: "Business",
          price: "$12/mes",
          features: ["Funciones avanzadas de gestión de proyectos", "Funciones de IA", "Soporte prioritario"],
        },
      ],
      useCases: [
        {
          title: "Gestión de proyectos ágiles",
          description: "Utiliza ClickUp para planificar, organizar y realizar un seguimiento de proyectos ágiles.",
        },
        {
          title: "Gestión de tareas personales",
          description: "Utiliza ClickUp para organizar tus tareas personales y mejorar tu productividad.",
        },
        {
          title: "Gestión de equipos remotos",
          description: "Utiliza ClickUp para colaborar con tu equipo remoto y realizar un seguimiento de su trabajo.",
        },
      ],
      testimonials: [
        {
          author: "Sofía Fernández",
          role: "Project Manager",
          company: "Innovate Solutions",
          avatar: "/testimonial-avatar-1.png",
          rating: 5,
          title: "ClickUp ha transformado nuestra gestión de proyectos",
          comment:
            "ClickUp nos ha permitido centralizar toda la información de nuestros proyectos y mejorar la colaboración en equipo.",
          date: "1 de septiembre, 2023",
          helpful: 28,
          unhelpful: 2,
        },
        {
          author: "Javier López",
          role: "Team Leader",
          company: "WebDesign",
          avatar: "/testimonial-avatar-2.png",
          rating: 4,
          title: "ClickUp me ayuda a mantener a mi equipo organizado",
          comment:
            "ClickUp me permite asignar tareas, realizar un seguimiento del progreso y comunicarme con mi equipo de forma eficiente.",
          date: "8 de septiembre, 2023",
          helpful: 22,
          unhelpful: 3,
        },
      ],
      alternatives: [
        {
          name: "Asana",
          description: "Plataforma de gestión de proyectos y tareas para equipos.",
          imageUrl: "/Asana-logo-abstract.png",
          slug: "asana",
          score: 8.5,
        },
        {
          name: "Trello",
          description: "Herramienta de gestión de proyectos basada en tableros Kanban.",
          imageUrl: "/trello-logo-abstract.png",
          slug: "trello",
          score: 7.8,
        },
      ],
      comparisonFeatures: [
        "Gestión de tareas",
        "Funciones IA",
        "Colaboración en tiempo real",
        "Automatizaciones",
        "Personalización",
      ],
      reviews: [
        {
          author: "Ana Pérez",
          rating: 5,
          title: "La mejor herramienta de gestión de proyectos que he probado",
          comment: "ClickUp ha simplificado mi vida. Me permite organizar mis proyectos y tareas de forma eficiente.",
          date: "15 de agosto, 2023",
          helpful: 20,
          unhelpful: 0,
        },
        {
          author: "Juan Gómez",
          rating: 4,
          title: "Muy útil para gestionar mis proyectos personales",
          comment:
            "ClickUp me permite organizar mis tareas personales y alcanzar mis objetivos de forma más eficiente.",
          date: "22 de agosto, 2023",
          helpful: 17,
          unhelpful: 1,
        },
      ],
      whyWeRecommend:
        "Recomendamos ClickUp por su amplia variedad de funciones, sus funciones de IA integradas y su interfaz personalizable. Es ideal para equipos que buscan una plataforma completa para gestionar sus proyectos.",
      lastUpdated: "1 de septiembre, 2023",
      relatedTools: [],
      specialOffer: "20% de descuento en el plan Unlimited durante el primer año",
      ctaText: "Comienza a gestionar tus proyectos con IA",
      verified: true,
    },
  }

  return toolsData[slug] || null
}

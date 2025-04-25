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
        integration: 9.7,
        implementationTime: 8.5,
      },
      url: "https://notion.so/product/ai",
      affiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
      verified: true,
      specialOffer: "7 días de prueba gratuita + 20% de descuento en el primer año",
      whyWeRecommend:
        "Notion AI destaca por su perfecta integración con el ecosistema de Notion, lo que lo convierte en una solución ideal para equipos que ya utilizan esta plataforma. Su capacidad para generar contenido contextual, resumir documentos y traducir textos sin salir del espacio de trabajo ahorra tiempo considerable y mejora la productividad.",
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
      comparisonFeatures: [
        "Generación de texto",
        "Resumen automático",
        "Traducción",
        "Corrección gramatical",
        "Integración con workspace",
      ],
      pricing: [
        {
          plan: "Personal",
          price: "$10/mes",
          features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
          recommended: false,
          affiliateUrl: "https://notion.so/product/ai/personal?ref=neuroworkai",
        },
        {
          plan: "Plus",
          price: "$15/mes",
          features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
          recommended: true,
          affiliateUrl: "https://notion.so/product/ai/plus?ref=neuroworkai",
        },
        {
          plan: "Business",
          price: "$25/usuario/mes",
          features: [
            "100 créditos de IA al mes por usuario",
            "Todas las funciones avanzadas de IA",
            "Funciones de administración y seguridad",
            "Soporte prioritario",
          ],
          recommended: false,
          affiliateUrl: "https://notion.so/product/ai/business?ref=neuroworkai",
        },
      ],
      pricingAnalysis:
        "Notion AI ofrece un buen equilibrio entre precio y funcionalidades. El plan Plus es el más recomendable para la mayoría de usuarios, ya que proporciona suficientes créditos para un uso regular y acceso a todas las funciones de IA. Para equipos grandes, el plan Business puede resultar costoso, pero las funciones adicionales de administración y seguridad justifican el precio para empresas que priorizan estos aspectos.",
      useCases: [
        {
          title: "Creación de contenido",
          description: "Genera borradores de artículos, publicaciones de blog o correos electrónicos rápidamente.",
          icon: "Pencil",
          steps: [
            "Selecciona la opción 'Escribir con IA' en Notion",
            "Proporciona un prompt claro sobre el contenido que necesitas",
            "Edita y refina el resultado según tus necesidades",
          ],
        },
        {
          title: "Documentación de proyectos",
          description: "Resume reuniones y crea documentación clara y concisa para tu equipo.",
          icon: "FileText",
          steps: [
            "Toma notas durante la reunión en Notion",
            "Usa la función 'Resumir con IA' para condensar la información",
            "Organiza los puntos clave en una estructura clara",
          ],
        },
        {
          title: "Gestión del conocimiento",
          description: "Organiza y resume información importante para facilitar su acceso y comprensión.",
          icon: "Brain",
          steps: [
            "Recopila información relevante en una página de Notion",
            "Utiliza IA para resumir y estructurar el contenido",
            "Crea una base de conocimiento accesible para todo el equipo",
          ],
        },
      ],
      realExamples: [
        {
          title: "Optimización del proceso de creación de contenido en Acme Marketing",
          company: "Acme Marketing",
          description:
            "Acme Marketing implementó Notion AI para su equipo de contenido, reduciendo el tiempo de creación de artículos de blog en un 40%. El equipo utiliza la IA para generar borradores iniciales y resumir investigaciones, permitiéndoles enfocarse en la estrategia y el refinamiento.",
          results: [
            "Reducción del 40% en tiempo de creación de contenido",
            "Aumento del 25% en la producción mensual de artículos",
            "Mejora en la consistencia y calidad del contenido",
          ],
        },
        {
          title: "Documentación eficiente en TechSolutions",
          company: "TechSolutions",
          description:
            "El equipo de desarrollo de TechSolutions adoptó Notion AI para mejorar su documentación técnica. Utilizan la IA para resumir reuniones de planificación, generar documentación de API y traducir contenido para su equipo internacional.",
          results: [
            "Reducción del 60% en tiempo dedicado a documentación",
            "Mejora en la claridad y accesibilidad de la documentación técnica",
            "Facilitación de la colaboración entre equipos internacionales",
          ],
        },
      ],
      screenshots: [
        {
          url: "/notion-ai-text-generation.png",
          alt: "Interfaz de Notion AI mostrando generación de texto",
        },
        {
          url: "/notion-ai-summarization.png",
          alt: "Notion AI resumiendo un documento",
        },
        {
          url: "/notion-ai-translation-workflow.png",
          alt: "Función de traducción de Notion AI en acción",
        },
      ],
      alternatives: [
        {
          name: "Jasper",
          slug: "jasper",
          description: "Plataforma especializada en generación de contenido con IA.",
          imageUrl: "/ai-logo-blue.png",
          score: 8.7,
        },
        {
          name: "Grammarly",
          slug: "grammarly",
          description: "Enfocado en corrección gramatical y mejora de textos.",
          imageUrl: "/grammarly-blue.png",
          score: 8.9,
        },
      ],
      relatedTools: [
        {
          name: "Jasper",
          slug: "jasper",
          description: "Plataforma especializada en generación de contenido con IA.",
          imageUrl: "/ai-logo-blue.png",
          category: "Escritura IA",
          score: 8.7,
        },
        {
          name: "Grammarly",
          slug: "grammarly",
          description: "Enfocado en corrección gramatical y mejora de textos.",
          imageUrl: "/grammarly-blue.png",
          category: "Escritura IA",
          score: 8.9,
        },
        {
          name: "ClickUp",
          slug: "clickup",
          description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
          imageUrl: "/clickup-blue-background.png",
          category: "Gestión de tareas",
          score: 8.8,
        },
      ],
      reviews: [
        {
          author: "María G.",
          rating: 5,
          title: "Transformó mi forma de trabajar",
          comment:
            "Notion AI ha cambiado completamente mi flujo de trabajo. Ahorro horas cada semana en la creación de contenido y documentación.",
          date: "15/03/2023",
          helpful: 24,
          unhelpful: 2,
        },
        {
          author: "Carlos R.",
          rating: 4,
          title: "Excelente, pero con margen de mejora",
          comment:
            "Una herramienta fantástica que me ayuda diariamente. Le falta pulir algunas funciones, pero su integración con Notion es perfecta.",
          date: "22/04/2023",
          helpful: 18,
          unhelpful: 3,
        },
      ],
      testimonials: [
        {
          quote:
            "Notion AI ha revolucionado nuestra forma de documentar proyectos. Ahorramos al menos 5 horas semanales en la creación y organización de contenido.",
          author: "Laura Martínez",
          role: "Project Manager",
          company: "Digital Innovators",
          avatarUrl: "/testimonial-avatar-1.png",
        },
        {
          quote:
            "La capacidad de resumir reuniones y generar documentación clara ha mejorado significativamente nuestra comunicación interna.",
          author: "Javier Rodríguez",
          role: "Team Lead",
          company: "TechSolutions",
          avatarUrl: "/testimonial-avatar-2.png",
        },
      ],
      ctaText: "Prueba Notion AI gratis durante 7 días y descubre cómo puede transformar tu productividad.",
      lastUpdated: "15 de abril, 2023",
      reviewedBy: {
        name: "Ana Gómez",
        role: "Especialista en Productividad",
        avatarUrl: "/expert-ana-gomez.png",
        bio: "Ana es experta en herramientas de productividad y ha analizado más de 50 soluciones de IA para trabajo remoto.",
      },
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
    jasper: {
      name: "Jasper",
      description: "Generador de contenido con IA para marketing y comunicación.",
      longDescription:
        "Jasper es una plataforma de inteligencia artificial diseñada para la creación de contenido de marketing y comunicación. Permite a los usuarios generar textos originales, creativos y optimizados para SEO en cuestión de segundos.",
      imageUrl: "/ai-logo-blue.png",
      category: "Escritura IA",
      tags: ["Escritura IA", "Marketing", "Contenido", "SEO"],
      neuroScore: {
        overall: 8.7,
        easeOfUse: 8.0,
        aiFeatures: 9.2,
        valueForMoney: 7.5,
        support: 8.5,
        integration: 7.0,
        implementationTime: 8.0,
      },
      url: "https://www.jasper.ai/",
      affiliateUrl: "https://www.jasper.ai/?utm_source=neuroworkai&utm_medium=affiliate",
      pros: [
        "Generación de contenido de alta calidad en múltiples formatos",
        "Optimización SEO integrada",
        "Interfaz intuitiva y fácil de usar",
        "Soporte para múltiples idiomas",
        "Gran variedad de plantillas y casos de uso",
      ],
      cons: [
        "El precio puede ser elevado para usuarios con necesidades básicas",
        "Requiere una buena comprensión de marketing y SEO para obtener los mejores resultados",
        "Algunas funciones avanzadas tienen limitaciones",
      ],
      features: [
        {
          name: "Generación de texto",
          description: "Crea contenido original y creativo a partir de prompts simples.",
        },
        {
          name: "Optimización SEO",
          description: "Optimiza tu contenido para obtener un mejor posicionamiento en buscadores.",
        },
        {
          name: "Múltiples formatos",
          description: "Genera contenido en diferentes formatos, como artículos, emails, anuncios y más.",
        },
        {
          name: "Soporte multilingüe",
          description: "Crea contenido en múltiples idiomas con facilidad.",
        },
        {
          name: "Plantillas y casos de uso",
          description: "Utiliza plantillas y casos de uso predefinidos para acelerar el proceso de creación.",
        },
      ],
      pricing: [
        {
          plan: "Creator",
          price: "$49/mes",
          features: ["50.000 palabras al mes", "Generación de texto", "Soporte básico"],
        },
        {
          plan: "Teams",
          price: "$125/mes",
          features: [
            "Uso ilimitado de palabras",
            "Generación de texto",
            "Soporte prioritario",
            "Colaboración en equipo",
          ],
        },
        {
          plan: "Business",
          price: "Personalizado",
          features: [
            "Uso ilimitado de palabras",
            "Generación de texto",
            "Soporte premium",
            "Funciones avanzadas de colaboración",
          ],
        },
      ],
      useCases: [
        {
          title: "Creación de contenido para marketing",
          description:
            "Genera contenido para blogs, redes sociales, emails y otros canales de marketing de forma rápida y eficiente.",
        },
        {
          title: "Redacción de textos publicitarios",
          description: "Crea textos persuasivos para anuncios, landing pages y otros materiales publicitarios.",
        },
        {
          title: "Generación de ideas para contenido",
          description: "Obtén ideas originales para tu estrategia de contenido y planifica tu calendario editorial.",
        },
      ],
      testimonials: [
        {
          author: "Elena Vargas",
          role: "Marketing Specialist",
          company: "Digital Growth",
          avatar: "/testimonial-avatar-3.png",
          rating: 5,
          title: "Jasper ha revolucionado nuestra creación de contenido",
          comment:
            "Jasper nos ha permitido crear contenido de alta calidad de forma mucho más rápida y eficiente. ¡Lo recomiendo totalmente!",
          date: "1 de septiembre, 2023",
          helpful: 22,
          unhelpful: 0,
        },
        {
          author: "Ricardo Pérez",
          role: "SEO Consultant",
          company: "WebPositioning",
          avatar: "/testimonial-avatar-2.png",
          rating: 4,
          title: "Jasper me ayuda a optimizar el contenido para SEO",
          comment:
            "Jasper me permite optimizar el contenido para SEO de forma rápida y sencilla, lo que ha mejorado significativamente el posicionamiento de mis clientes.",
          date: "8 de septiembre, 2023",
          helpful: 18,
          unhelpful: 2,
        },
      ],
      alternatives: [
        {
          name: "Notion AI",
          description: "Asistente de escritura y organización con IA integrada en Notion.",
          imageUrl: "/notion-ai-blue.png",
          slug: "notion-ai",
          score: 9.2,
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
        "Optimización SEO",
        "Múltiples formatos",
        "Soporte multilingüe",
        "Plantillas y casos de uso",
      ],
      reviews: [
        {
          author: "Laura Gómez",
          rating: 5,
          title: "La mejor herramienta de generación de contenido que he probado",
          comment:
            "Jasper ha superado mis expectativas. Me permite generar contenido de alta calidad en cuestión de minutos.",
          date: "15 de agosto, 2023",
          helpful: 15,
          unhelpful: 0,
        },
        {
          author: "David Fernández",
          rating: 4,
          title: "Muy útil para generar ideas para contenido",
          comment: "Jasper me ayuda a superar el bloqueo del escritor y generar ideas originales para mi blog.",
          date: "22 de agosto, 2023",
          helpful: 12,
          unhelpful: 1,
        },
      ],
      whyWeRecommend:
        "Recomendamos Jasper por su capacidad para generar contenido de alta calidad en múltiples formatos, su optimización SEO integrada y su interfaz intuitiva. Es ideal para profesionales de marketing y comunicación que buscan ahorrar tiempo y mejorar sus resultados.",
      lastUpdated: "1 de septiembre, 2023",
      relatedTools: [],
      specialOffer: "Prueba gratuita de 5 días",
      ctaText: "Comienza a crear contenido con IA",
      verified: true,
    },
  }

  return toolsData[slug] || null
}

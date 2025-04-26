export const locales = ["es", "en"] as const
export const defaultLocale = "es" as const

export type Locale = (typeof locales)[number]

// Define the structure of our messages
export type Messages = {
  common: {
    title: string
    description: string
    navigation: {
      home: string
      tools: string
      resources: string
      about: string
    }
    cta: {
      topTools: string
      discoverTools: string
    }
    footer: {
      navigation: string
      resources: string
      legal: string
      contact: string
      copyright: string
      poweredBy: string
      affiliateDisclosure: string
    }
  }
  home: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    features: {
      title: string
      subtitle: string
    }
  }
  tools: {
    title: string
    description: string
    categories: {
      all: string
      productivity: string
      writing: string
      design: string
      communication: string
    }
  }
  resources: {
    title: string
    description: string
    categories: {
      guides: string
      prompts: string
      templates: string
      analysis: string
    }
  }
  about: {
    title: string
    description: string
    team: {
      title: string
      subtitle: string
    }
    contact: {
      title: string
      subtitle: string
      form: {
        name: string
        email: string
        message: string
        submit: string
      }
    }
  }
}

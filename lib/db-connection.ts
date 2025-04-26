import { neon, neonConfig } from "@neondatabase/serverless"

// Configure neon
neonConfig.fetchConnectionCache = true

// Get a direct SQL client
export function getDbConnection() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    console.warn("DATABASE_URL environment variable is not set. Using a mock connection.")
    return async (strings: TemplateStringsArray, ...values: any[]) => {
      console.warn("Mock SQL query:", strings.join("?"), values)
      return []
    }
  }

  return neon(connectionString)
}

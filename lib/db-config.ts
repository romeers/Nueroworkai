// Archivo simulado para mantener compatibilidad sin base de datos

// Función para ejecutar consultas SQL simuladas
export async function query(text: string, params: any[] = []) {
  console.warn("La función query() está deshabilitada en modo sin base de datos")
  return []
}

// Función para ejecutar transacciones simuladas
export async function transaction(callback: (client: any) => Promise<any>) {
  console.warn("La función transaction() está deshabilitada en modo sin base de datos")
  return null
}

// Exportar una función sql simulada para mantener compatibilidad
export const sql = async (strings: any, ...values: any[]) => {
  console.warn("La función sql() está deshabilitada en modo sin base de datos")
  return []
}

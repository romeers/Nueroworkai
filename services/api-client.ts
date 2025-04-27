/**
 * Cliente API centralizado para realizar peticiones HTTP
 */

// Tipos
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface RequestOptions extends Omit<RequestInit, "method" | "body"> {
  params?: Record<string, string | number | boolean | undefined>
  data?: any
}

interface ApiResponse<T = any> {
  data: T
  status: number
  headers: Headers
}

interface ApiError extends Error {
  status?: number
  data?: any
}

// URL base de la API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""

/**
 * Función para construir la URL con parámetros de consulta
 */
function buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>): string {
  // Asegurarse de que la ruta comienza con /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  // URL completa
  const url = new URL(`${API_BASE_URL}${normalizedPath}`)

  // Añadir parámetros de consulta
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  return url.toString()
}

/**
 * Función para realizar peticiones HTTP
 */
async function request<T = any>(
  method: HttpMethod,
  path: string,
  options: RequestOptions = {},
): Promise<ApiResponse<T>> {
  const { params, data, ...customConfig } = options

  // Configuración de la petición
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...customConfig.headers,
    },
    ...customConfig,
  }

  // Añadir body si es necesario
  if (data) {
    config.body = JSON.stringify(data)
  }

  try {
    // Realizar petición
    const response = await fetch(buildUrl(path, params), config)

    // Parsear respuesta
    const responseData = await response.json().catch(() => ({}))

    // Verificar si la respuesta es correcta
    if (response.ok) {
      return {
        data: responseData,
        status: response.status,
        headers: response.headers,
      }
    }

    // Crear error con información de la respuesta
    const error = new Error(responseData.message || response.statusText) as ApiError
    error.status = response.status
    error.data = responseData
    throw error
  } catch (error) {
    // Re-lanzar error
    throw error
  }
}

// Exportar métodos HTTP
export const apiClient = {
  get: <T = any>(path: string, options?: RequestOptions) => request<T>("GET", path, options),
  post: <T = any>(path: string, options?: RequestOptions) => request<T>("POST", path, options),
  put: <T = any>(path: string, options?: RequestOptions) => request<T>("PUT", path, options),
  patch: <T = any>(path: string, options?: RequestOptions) => request<T>("PATCH", path, options),
  delete: <T = any>(path: string, options?: RequestOptions) => request<T>("DELETE", path, options),
}

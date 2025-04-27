/**
 * Servicio para gestionar autenticación
 */

import { apiClient } from "./api-client"

// Tipos
export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
}

/**
 * Iniciar sesión
 */
export async function login(credentials: LoginCredentials): Promise<User> {
  const { data } = await apiClient.post<User>("/api/auth/login", { data: credentials })
  return data
}

/**
 * Registrar usuario
 */
export async function register(userData: RegisterData): Promise<User> {
  const { data } = await apiClient.post<User>("/api/auth/register", { data: userData })
  return data
}

/**
 * Cerrar sesión
 */
export async function logout(): Promise<void> {
  await apiClient.post("/api/auth/logout")
}

/**
 * Obtener usuario actual
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data } = await apiClient.get<User>("/api/auth/me")
    return data
  } catch (error) {
    return null
  }
}

/**
 * Verificar si el email existe
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  const { data } = await apiClient.post<{ exists: boolean }>("/api/auth/check-email", { data: { email } })
  return data.exists
}

/**
 * Solicitar restablecimiento de contraseña
 */
export async function requestPasswordReset(email: string): Promise<void> {
  await apiClient.post("/api/auth/reset-password", { data: { email } })
}

/**
 * Restablecer contraseña
 */
export async function resetPassword(token: string, password: string): Promise<void> {
  await apiClient.post("/api/auth/reset-password/confirm", { data: { token, password } })
}

/**
 * Actualizar perfil de usuario
 */
export async function updateUserProfile(userData: Partial<User>): Promise<User> {
  const { data } = await apiClient.put<User>("/api/auth/profile", { data: userData })
  return data
}

/**
 * Cambiar contraseña
 */
export async function changePassword(currentPassword: string, newPassword: string): Promise<void> {
  await apiClient.post("/api/auth/change-password", { data: { currentPassword, newPassword } })
}

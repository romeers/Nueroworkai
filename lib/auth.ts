/**
 * Utilidades para autenticación y autorización
 */

// Simulación de autenticación sin base de datos

// Usuarios simulados
const mockUsers = [
  {
    id: 1,
    email: "admin@neuroworkai.com",
    name: "Administrador",
    role: "admin",
    avatarUrl: null,
    passwordHash: "$2a$10$XdUEUgJDjSIJkYl6xpjmR.V7MO5Q.j8Ux/Xn1yJHWw.J3ueGFGvMK", // "admin123"
  },
  {
    id: 2,
    email: "usuario@ejemplo.com",
    name: "Usuario Ejemplo",
    role: "user",
    avatarUrl: null,
    passwordHash: "$2a$10$XdUEUgJDjSIJkYl6xpjmR.V7MO5Q.j8Ux/Xn1yJHWw.J3ueGFGvMK", // "password123"
  },
]

// Sesiones simuladas
let mockSessions = []

// Favoritos simulados
let mockFavorites = []

// Tipos
export interface User {
  id: number
  email: string
  name: string | null
  role: string
  avatarUrl: string | null
}

export interface Session {
  id: number
  userId: number
  token: string
  expiresAt: Date
}

// Funciones de autenticación simuladas
export async function hashPassword(password: string): Promise<string> {
  return `hashed_${password}`
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  // Simulación simple para desarrollo
  return hashedPassword.includes(password) || password === "password123" || password === "admin123"
}

export function generateToken(userId: number, role: string): string {
  return `token_${userId}_${role}_${Date.now()}`
}

export function verifyToken(token: string): { userId: number; role: string } | null {
  const session = mockSessions.find((s) => s.token === token)
  if (!session) return null

  const user = mockUsers.find((u) => u.id === session.userId)
  if (!user) return null

  return { userId: user.id, role: user.role }
}

// Funciones de usuario
export async function createUser(email: string, password: string, name?: string): Promise<User | null> {
  // Verificar si el usuario ya existe
  if (mockUsers.some((u) => u.email === email)) {
    return null
  }

  const newUser = {
    id: mockUsers.length + 1,
    email,
    name: name || null,
    role: "user",
    avatarUrl: null,
    passwordHash: await hashPassword(password),
  }

  mockUsers.push(newUser)

  return {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
    avatarUrl: newUser.avatarUrl,
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = mockUsers.find((u) => u.email === email)
  if (!user) return null

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatarUrl: user.avatarUrl,
  }
}

export async function getUserById(id: number): Promise<User | null> {
  const user = mockUsers.find((u) => u.id === id)
  if (!user) return null

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatarUrl: user.avatarUrl,
  }
}

export async function getUserByCredentials(email: string, password: string): Promise<User | null> {
  const user = mockUsers.find((u) => u.email === email)
  if (!user) return null

  const passwordMatch = await comparePasswords(password, user.passwordHash)
  if (!passwordMatch) return null

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatarUrl: user.avatarUrl,
  }
}

// Funciones de sesión
export async function createSession(userId: number): Promise<string | null> {
  const token = generateToken(userId, "user")

  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7)

  const newSession = {
    id: mockSessions.length + 1,
    userId,
    token,
    expiresAt,
  }

  mockSessions.push(newSession)

  return token
}

export async function getSessionByToken(token: string): Promise<Session | null> {
  const session = mockSessions.find((s) => s.token === token)
  if (!session) return null

  if (new Date(session.expiresAt) < new Date()) return null

  return session
}

export async function deleteSession(token: string): Promise<boolean> {
  const initialLength = mockSessions.length
  mockSessions = mockSessions.filter((s) => s.token !== token)
  return mockSessions.length < initialLength
}

// Variables para almacenar cookies simuladas
const mockCookies = {}

// Funciones de middleware
export async function getCurrentUser(): Promise<User | null> {
  try {
    const token = mockCookies["auth_token"]
    if (!token) return null

    const decoded = verifyToken(token)
    if (!decoded) return null

    return await getUserById(decoded.userId)
  } catch (error) {
    console.error("Error en getCurrentUser:", error)
    return null
  }
}

export function setAuthCookie(token: string): void {
  mockCookies["auth_token"] = token
}

export function removeAuthCookie(): void {
  delete mockCookies["auth_token"]
}

// Funciones de favoritos
export async function addFavorite(userId: number, toolId: number): Promise<boolean> {
  if (mockFavorites.some((f) => f.userId === userId && f.toolId === toolId)) {
    return true
  }

  mockFavorites.push({ userId, toolId })
  return true
}

export async function removeFavorite(userId: number, toolId: number): Promise<boolean> {
  const initialLength = mockFavorites.length
  mockFavorites = mockFavorites.filter((f) => !(f.userId === userId && f.toolId === toolId))
  return mockFavorites.length < initialLength
}

export async function getUserFavorites(userId: number): Promise<any[]> {
  const userFavoritesIds = mockFavorites.filter((f) => f.userId === userId).map((f) => f.toolId)

  // Importar datos estáticos para obtener información de herramientas
  const { getToolById } = require("./static-data")

  return userFavoritesIds.map((id) => {
    const tool = getToolById(id)
    return {
      id: tool.id,
      name: tool.name,
      slug: tool.slug,
      description: tool.description,
      image_url: tool.imageUrl,
      category: tool.category,
      score: tool.score,
    }
  })
}

export async function isToolFavorite(userId: number, toolId: number): Promise<boolean> {
  return mockFavorites.some((f) => f.userId === userId && f.toolId === toolId)
}

// Funciones para verificar autenticación y rol
export async function isAuthenticated(request: Request): Promise<boolean> {
  const token = mockCookies["auth_token"]
  if (!token) return false

  const decoded = verifyToken(token)
  return !!decoded
}

export async function getUserId(request: Request): Promise<number | null> {
  const token = mockCookies["auth_token"]
  if (!token) return null

  const decoded = verifyToken(token)
  return decoded ? decoded.userId : null
}

export async function isAdmin(request: Request): Promise<boolean> {
  const token = mockCookies["auth_token"]
  if (!token) return false

  const decoded = verifyToken(token)
  return decoded ? decoded.role === "admin" : false
}

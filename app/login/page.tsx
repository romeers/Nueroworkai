import LoginForm from "@/components/auth/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Iniciar sesión - NeuroWorkAI",
  description: "Inicia sesión en tu cuenta de NeuroWorkAI",
}

export default function LoginPage() {
  return <LoginForm />
}

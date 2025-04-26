import RegisterForm from "@/components/auth/register-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Registro - NeuroWorkAI",
  description: "Crea una cuenta en NeuroWorkAI",
}

export default function RegisterPage() {
  return <RegisterForm />
}

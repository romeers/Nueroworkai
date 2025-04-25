"use client"

import EmailSubscriptionForm from "./email-subscription-form"

interface NewsletterFormProps {
  buttonText?: string
  microcopy?: string
  className?: string
}

export default function NewsletterForm({
  buttonText = "Suscribirse",
  microcopy = "Sin spam · Recibe actualizaciones semanales",
  className = "",
}: NewsletterFormProps) {
  return (
    <div className={`mt-6 ${className}`}>
      <EmailSubscriptionForm buttonText={buttonText} microcopy={microcopy} />
    </div>
  )
}

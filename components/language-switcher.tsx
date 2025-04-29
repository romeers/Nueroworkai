"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next-intl/client"
import { type ChangeEvent, useTransition } from "react"

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label className={`relative text-gray-400 ${isPending ? "transition-opacity [&:disabled]:opacity-30" : ""}`}>
      <p className="sr-only">Idioma</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  )
}

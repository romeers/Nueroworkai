"use client"

import * as React from "react"
import {
  useForm,
  FormProvider,
  type UseFormReturn,
  type FieldValues,
  type DefaultValues,
  type SubmitHandler,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type * as z from "zod"
import { cn } from "@/lib/utils"

interface FormProps<TFormValues extends FieldValues> extends React.FormHTMLAttributes<HTMLFormElement> {
  schema?: z.ZodType<TFormValues>
  defaultValues?: DefaultValues<TFormValues>
  onSubmit: SubmitHandler<TFormValues>
  children: React.ReactNode | ((form: UseFormReturn<TFormValues>) => React.ReactNode)
  className?: string
}

export function Form<TFormValues extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  ...props
}: FormProps<TFormValues>) {
  const form = useForm<TFormValues>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-4", className)} {...props}>
        {typeof children === "function" ? children(form) : children}
      </form>
    </FormProvider>
  )
}

export const FormField = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-2", className)} {...props} />,
)
FormField.displayName = "FormField"

export const FormLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("text-sm font-medium text-gray-700", className)} {...props} />
  ),
)
FormLabel.displayName = "FormLabel"

export const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-xs text-gray-500", className)} {...props} />,
)
FormDescription.displayName = "FormDescription"

export const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn("text-xs font-medium text-red-500", className)} {...props}>
      {children}
    </p>
  ),
)
FormMessage.displayName = "FormMessage"

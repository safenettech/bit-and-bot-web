"use client"

import * as React from "react"
import { contactSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DynamicIcon } from "@/components/ui/icon"

interface FormStatus {
  type: "idle" | "submitting" | "success" | "error"
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormValues>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [status, setStatus] = React.useState<FormStatus>({ type: "idle" })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus({ type: "submitting" })

    // Validate using Zod
    const validationResult = contactSchema.safeParse(formData)

    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {}
      validationResult.error.issues.forEach((err) => {
        const fieldName = err.path[0] as keyof ContactFormValues
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message
        }
      })
      setErrors(fieldErrors)
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields below.",
      })
      return
    }

    setErrors({})

    // Simulated API dispatch / Supabase lead submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus({
        type: "success",
        message: "Thank you! Your message has been received. Our engineering leads will reach out within 24 hours.",
      })
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email us directly at hello@bitandbot.com",
      })
    }
  }

  if (status.type === "success") {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 sm:p-12 text-center space-y-4 animate-in fade-in-0 duration-300">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
          <DynamicIcon name="CheckCircle2" size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">Message Transmitted</h3>
        <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
          {status.message}
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus({ type: "idle" })}
          className="mt-4"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.type === "error" && status.message && (
        <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive text-sm flex items-center gap-2">
          <DynamicIcon name="ShieldAlert" size={18} className="shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Full Name <span className="text-primary">*</span>
          </label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Ada Lovelace"
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            disabled={status.type === "submitting"}
          />
          {errors.fullName && (
            <p className="text-xs text-destructive">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Work Email <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ada@company.com"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            disabled={status.type === "submitting"}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Company / Organization
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Innovations"
            value={formData.company}
            onChange={handleChange}
            disabled={status.type === "submitting"}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            disabled={status.type === "submitting"}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Subject / Project Title <span className="text-primary">*</span>
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="New Web Platform or AI Integration"
          value={formData.subject}
          onChange={handleChange}
          error={!!errors.subject}
          disabled={status.type === "submitting"}
        />
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Project Overview & Requirements <span className="text-primary">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your objectives, estimated timeline, tech preferences, and any specific challenges..."
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          disabled={status.type === "submitting"}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status.type === "submitting"}
        className="w-full sm:w-auto font-semibold shadow-md px-8"
      >
        {status.type === "submitting" ? (
          <>
            <DynamicIcon name="Clock" size={16} className="mr-2 animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            Send Message
            <DynamicIcon name="Send" size={16} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  )
}

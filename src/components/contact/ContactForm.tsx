"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormValues } from "@/lib/validations"
import { useEnquirySubmission } from "@/hooks/use-enquiry-submission"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DynamicIcon } from "@/components/ui/icon"
import { toast } from "@/components/ui/toast"

export function ContactForm() {
  const { submitEnquiry } = useEnquirySubmission()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await submitEnquiry(data)

      if (result.success) {
        // Clean, user-friendly success message
        toast.success(
          "Message Sent Successfully!",
          "Thank you for contacting us. Our engineering team will review your inquiry and get back to you shortly."
        )
        reset()
      } else {
        // Clean, user-friendly error message (technical details logged to developer console)
        toast.error(
          "Failed to Send Message",
          "Please check your connection and try again, or email us directly at hello@bitandbot.com."
        )
      }
    } catch (err) {
      console.error("[Developer Log] Contact form unexpected error:", err)
      toast.error(
        "Failed to Send Message",
        "An unexpected error occurred. Please try again or email us directly at hello@bitandbot.com."
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Full Name <span className="text-primary">*</span>
          </label>
          <Input
            id="fullName"
            placeholder="Ada Lovelace"
            disabled={isSubmitting}
            error={Boolean(errors.fullName)}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Work Email <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="ada@company.com"
            disabled={isSubmitting}
            error={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company */}
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Company / Organization
          </label>
          <Input
            id="company"
            placeholder="Acme Innovations"
            disabled={isSubmitting}
            error={Boolean(errors.company)}
            {...register("company")}
          />
          {errors.company && (
            <p className="text-xs text-destructive">{errors.company.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            disabled={isSubmitting}
            error={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-xs font-semibold uppercase tracking-wider text-foreground"
        >
          Subject / Project Title <span className="text-primary">*</span>
        </label>
        <Input
          id="subject"
          placeholder="New Web Platform or AI Integration"
          disabled={isSubmitting}
          error={Boolean(errors.subject)}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-wider text-foreground"
        >
          Project Overview & Requirements <span className="text-primary">*</span>
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your objectives, estimated timeline, tech preferences, and any specific challenges..."
          disabled={isSubmitting}
          error={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto font-semibold shadow-md px-8"
      >
        {isSubmitting ? (
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

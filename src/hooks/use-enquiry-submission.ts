"use client"

import * as React from "react"
import { createEnquiry, type CreateEnquiryInput } from "@/lib/supabase/enquiries"

export interface EnquirySubmissionState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export interface SubmitEnquiryResult {
  success: boolean
  warning?: string
  error?: string
  supabaseSuccess?: boolean
  emailSuccess?: boolean
}

export function useEnquirySubmission() {
  const [state, setState] = React.useState<EnquirySubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const submitEnquiry = React.useCallback(
    async (data: CreateEnquiryInput): Promise<SubmitEnquiryResult> => {
      setState({ isSubmitting: true, isSuccess: false, error: null })

      let supabaseErrorMsg: string | null = null
      let emailErrorMsg: string | null = null
      let isSupabaseOk = false
      let isEmailOk = false

      // 1. Upload enquiry to Supabase via reusable data utility
      try {
        const supabaseResult = await createEnquiry(data)
        if (supabaseResult.success) {
          isSupabaseOk = true
        } else {
          supabaseErrorMsg = supabaseResult.error || "Supabase submission failed"
          console.error("Supabase submission error:", supabaseErrorMsg)
        }
      } catch (err) {
        supabaseErrorMsg = err instanceof Error ? err.message : "Supabase request failed"
        console.error("Supabase submission error:", supabaseErrorMsg)
      }

      // 2. Dispatch notification email with TO and CC via POST API
      try {
        const emailResponse = await fetch("/api/send-enquiry-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })

        const emailResult = await emailResponse.json().catch(() => ({}))

        if (emailResponse.ok && emailResult.success) {
          isEmailOk = true
        } else {
          emailErrorMsg = emailResult.error || `Email failed with status ${emailResponse.status}`
          console.error("Email dispatch error:", emailErrorMsg)
        }
      } catch (emailErr) {
        emailErrorMsg = emailErr instanceof Error ? emailErr.message : "Email API network error"
        console.error("Email dispatch error:", emailErrorMsg)
      }

      // Check outcomes strictly
      if (!isSupabaseOk && !isEmailOk) {
        // BOTH FAILED: Do NOT show success!
        const combinedError = [
          supabaseErrorMsg ? `Database: ${supabaseErrorMsg}` : null,
          emailErrorMsg ? `Email: ${emailErrorMsg}` : null,
        ]
          .filter(Boolean)
          .join(" | ")

        setState({ isSubmitting: false, isSuccess: false, error: combinedError })
        return {
          success: false,
          error: combinedError,
          supabaseSuccess: false,
          emailSuccess: false,
        }
      }

      if (isSupabaseOk && !isEmailOk) {
        // Saved to database, but email failed
        const warning = `Inquiry recorded in database, but notification email could not be sent (${emailErrorMsg}).`
        setState({ isSubmitting: false, isSuccess: true, error: null })
        return {
          success: true,
          warning,
          supabaseSuccess: true,
          emailSuccess: false,
        }
      }

      if (!isSupabaseOk && isEmailOk) {
        // Email sent, but database failed
        const warning = `Notification email sent, but database record failed (${supabaseErrorMsg}).`
        setState({ isSubmitting: false, isSuccess: true, error: null })
        return {
          success: true,
          warning,
          supabaseSuccess: false,
          emailSuccess: true,
        }
      }

      // BOTH SUCCEEDED
      setState({ isSubmitting: false, isSuccess: true, error: null })
      return {
        success: true,
        supabaseSuccess: true,
        emailSuccess: true,
      }
    },
    []
  )

  const reset = React.useCallback(() => {
    setState({ isSubmitting: false, isSuccess: false, error: null })
  }, [])

  return {
    ...state,
    submitEnquiry,
    reset,
  }
}

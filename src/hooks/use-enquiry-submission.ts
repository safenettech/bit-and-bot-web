"use client"

import * as React from "react"
import { createEnquiry, type CreateEnquiryInput } from "@/lib/supabase/enquiries"

export interface EnquirySubmissionState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export function useEnquirySubmission() {
  const [state, setState] = React.useState<EnquirySubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const submitEnquiry = React.useCallback(
    async (
      data: CreateEnquiryInput
    ): Promise<{ success: boolean; error?: string }> => {
      setState({ isSubmitting: true, isSuccess: false, error: null })

      try {
        // 1. Upload enquiry to Supabase via reusable data utility
        const supabaseResult = await createEnquiry(data)

        if (!supabaseResult.success) {
          console.warn(
            "Supabase submission notice (continuing with email dispatch):",
            supabaseResult.error
          )
        }

        // 2. Dispatch notification email with TO and CC via POST API
        try {
          const emailResponse = await fetch("/api/send-enquiry-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })

          if (!emailResponse.ok) {
            const errData = await emailResponse.json().catch(() => ({}))
            console.warn("Email API response:", errData)
          }
        } catch (emailErr) {
          console.warn("Email dispatch error:", emailErr)
        }

        // If either Supabase or Email succeeded (or both)
        setState({ isSubmitting: false, isSuccess: true, error: null })
        return { success: true }
      } catch (err) {
        const errorMsg =
          err instanceof Error
            ? err.message
            : "An unexpected error occurred during submission."
        setState({ isSubmitting: false, isSuccess: false, error: errorMsg })
        return { success: false, error: errorMsg }
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

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
  supabaseSuccess: boolean
  emailSuccess: boolean
  error?: string
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

      let isSupabaseOk = false
      let isEmailOk = false
      let supabaseErrorMsg: string | null = null
      let emailErrorMsg: string | null = null

      // 1. Upload enquiry to Supabase via reusable data utility
      try {
        const supabaseResult = await createEnquiry(data)
        if (supabaseResult.success) {
          isSupabaseOk = true
        } else {
          supabaseErrorMsg = supabaseResult.error || "Unknown Supabase error"
          // Log detailed developer error in browser console
          console.error(
            "[Developer Log] Supabase insertion error:",
            supabaseErrorMsg
          )
        }
      } catch (err) {
        supabaseErrorMsg =
          err instanceof Error ? err.message : "Supabase exception"
        console.error(
          "[Developer Log] Supabase exception:",
          supabaseErrorMsg
        )
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
          emailErrorMsg =
            emailResult.error ||
            `API responded with status ${emailResponse.status}`
          // Log detailed developer error in browser console
          console.error(
            "[Developer Log] Nodemailer API dispatch error:",
            emailErrorMsg
          )
        }
      } catch (emailErr) {
        emailErrorMsg =
          emailErr instanceof Error ? emailErr.message : "Email network error"
        console.error(
          "[Developer Log] Email API network exception:",
          emailErrorMsg
        )
      }

      // Clean business logic:
      // If at least one channel received the submission (Email OR Supabase):
      // The user's inquiry was successfully delivered.
      if (isEmailOk || isSupabaseOk) {
        setState({ isSubmitting: false, isSuccess: true, error: null })
        return {
          success: true,
          supabaseSuccess: isSupabaseOk,
          emailSuccess: isEmailOk,
        }
      }

      // If BOTH failed:
      const devDetails = `Database: ${supabaseErrorMsg || "failed"} | Email: ${emailErrorMsg || "failed"}`
      console.error(
        "[Developer Log] Contact form submission failed entirely:",
        devDetails
      )

      setState({
        isSubmitting: false,
        isSuccess: false,
        error: "Failed to send message. Please try again.",
      })

      return {
        success: false,
        supabaseSuccess: false,
        emailSuccess: false,
        error: "Failed to send message. Please try again.",
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

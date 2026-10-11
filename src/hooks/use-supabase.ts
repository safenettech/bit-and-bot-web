"use client"

import * as React from "react"
import { getSupabaseBrowserClient, getSupabaseConfig } from "@/lib/supabase/client"
import {
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
  type EnquiryRecord,
} from "@/lib/supabase/enquiries"

/**
 * Reusable hook to access Supabase client instance and configuration status across the project.
 */
export function useSupabase() {
  const client = React.useMemo(() => getSupabaseBrowserClient(), [])
  const isConfigured = Boolean(getSupabaseConfig())

  return {
    client,
    isConfigured,
  }
}

/**
 * Reusable hook to fetch and manage enquiries from Supabase.
 */
export function useEnquiries() {
  const [enquiries, setEnquiries] = React.useState<EnquiryRecord[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const fetchAll = React.useCallback(async () => {
    setIsLoading(true)
    setError(null)

    const res = await getEnquiries()
    if (res.success && res.data) {
      setEnquiries(res.data)
    } else {
      setError(res.error || "Failed to load enquiries")
    }
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    let ignore = false

    async function initialFetch() {
      const res = await getEnquiries()
      if (!ignore) {
        if (res.success && res.data) {
          setEnquiries(res.data)
        } else {
          setError(res.error || "Failed to load enquiries")
        }
        setIsLoading(false)
      }
    }

    initialFetch()

    return () => {
      ignore = true
    }
  }, [])

  const markStatus = React.useCallback(
    async (id: string, status: EnquiryRecord["status"]) => {
      const res = await updateEnquiryStatus(id, status)
      if (res.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e))
        )
      }
      return res
    },
    []
  )

  const removeEnquiry = React.useCallback(async (id: string) => {
    const res = await deleteEnquiry(id)
    if (res.success) {
      setEnquiries((prev) => prev.filter((e) => e.id !== id))
    }
    return res
  }, [])

  return {
    enquiries,
    isLoading,
    error,
    refetch: fetchAll,
    markStatus,
    removeEnquiry,
  }
}

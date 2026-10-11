"use client"

import * as React from "react"
import { type Enquiry } from "@/data/enquiries"
import {
  fetchAdminEnquiries,
  updateAdminEnquiry,
  deleteAdminEnquiry,
  bulkUpdateAdminEnquiries,
  bulkDeleteAdminEnquiries,
} from "@/lib/supabase/enquiries"
import { toast } from "@/components/global"

export interface AdminEnquiriesContextType {
  enquiries: Enquiry[]
  unreadCount: number
  isLoading: boolean
  error: string | null
  refresh: () => Promise<void>
  markAsRead: (id: string) => Promise<void>
  markAsUnread: (id: string) => Promise<void>
  toggleStar: (id: string) => void
  deleteSingle: (id: string) => Promise<boolean>
  bulkDelete: (ids: string[]) => Promise<boolean>
  bulkMarkAsRead: (ids: string[]) => Promise<void>
  bulkMarkAsUnread: (ids: string[]) => Promise<void>
}

const AdminEnquiriesContext = React.createContext<AdminEnquiriesContextType | null>(null)

export function AdminEnquiriesProvider({ children }: { children: React.ReactNode }) {
  const [enquiries, setEnquiries] = React.useState<Enquiry[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const unreadCount = React.useMemo(() => {
    return enquiries.filter((item) => !item.isRead).length
  }, [enquiries])

  const refresh = React.useCallback(async () => {
    setIsLoading(true)
    setError(null)
    const result = await fetchAdminEnquiries()
    if (result.success && result.data) {
      setEnquiries(result.data)
    } else {
      setError(result.error || "Failed to load enquiries")
    }
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    refresh()
  }, [refresh])

  const markAsRead = React.useCallback(async (id: string) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isRead: true, status: "in_review" } : e))
    )
    await updateAdminEnquiry(id, { isRead: true, status: "in_review" })
  }, [])

  const markAsUnread = React.useCallback(async (id: string) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isRead: false, status: "new" } : e))
    )
    await updateAdminEnquiry(id, { isRead: false, status: "new" })
  }, [])

  const toggleStar = React.useCallback((id: string) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isStarred: !e.isStarred } : e))
    )
  }, [])

  const deleteSingle = React.useCallback(async (id: string): Promise<boolean> => {
    const backup = [...enquiries]
    setEnquiries((prev) => prev.filter((e) => e.id !== id))

    const res = await deleteAdminEnquiry(id)
    if (!res.success) {
      setEnquiries(backup)
      toast.error(res.error || "Failed to delete enquiry from database.")
      return false
    }

    toast.success("Enquiry deleted successfully.")
    return true
  }, [enquiries])

  const bulkDelete = React.useCallback(
    async (ids: string[]): Promise<boolean> => {
      const idSet = new Set(ids)
      const backup = [...enquiries]
      setEnquiries((prev) => prev.filter((e) => !idSet.has(e.id)))

      const res = await bulkDeleteAdminEnquiries(ids)
      if (!res.success) {
        setEnquiries(backup)
        toast.error(res.error || "Failed to bulk delete enquiries.")
        return false
      }

      toast.success(`${ids.length} enquiries deleted successfully.`)
      return true
    },
    [enquiries]
  )

  const bulkMarkAsRead = React.useCallback(async (ids: string[]) => {
    const idSet = new Set(ids)
    setEnquiries((prev) =>
      prev.map((e) =>
        idSet.has(e.id) ? { ...e, isRead: true, status: "in_review" } : e
      )
    )
    await bulkUpdateAdminEnquiries(ids, { isRead: true, status: "in_review" })
    toast.success(`Marked ${ids.length} enquiries as read.`)
  }, [])

  const bulkMarkAsUnread = React.useCallback(async (ids: string[]) => {
    const idSet = new Set(ids)
    setEnquiries((prev) =>
      prev.map((e) =>
        idSet.has(e.id) ? { ...e, isRead: false, status: "new" } : e
      )
    )
    await bulkUpdateAdminEnquiries(ids, { isRead: false, status: "new" })
    toast.success(`Marked ${ids.length} enquiries as unread.`)
  }, [])

  const value = React.useMemo(
    () => ({
      enquiries,
      unreadCount,
      isLoading,
      error,
      refresh,
      markAsRead,
      markAsUnread,
      toggleStar,
      deleteSingle,
      bulkDelete,
      bulkMarkAsRead,
      bulkMarkAsUnread,
    }),
    [
      enquiries,
      unreadCount,
      isLoading,
      error,
      refresh,
      markAsRead,
      markAsUnread,
      toggleStar,
      deleteSingle,
      bulkDelete,
      bulkMarkAsRead,
      bulkMarkAsUnread,
    ]
  )

  return (
    <AdminEnquiriesContext.Provider value={value}>
      {children}
    </AdminEnquiriesContext.Provider>
  )
}

export function useAdminEnquiries(): AdminEnquiriesContextType {
  const context = React.useContext(AdminEnquiriesContext)
  if (!context) {
    throw new Error("useAdminEnquiries must be used within an AdminEnquiriesProvider")
  }
  return context
}

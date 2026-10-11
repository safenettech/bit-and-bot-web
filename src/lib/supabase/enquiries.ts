import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { type Enquiry } from "@/data/enquiries"

export interface CreateEnquiryInput {
  fullName: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  serviceType?: string
  budget?: string
}

export interface EnquiryRecord {
  id: string
  full_name: string
  email: string
  company: string | null
  phone: string | null
  subject: string
  message: string
  service_type: string | null
  budget: string | null
  status: "new" | "in_review" | "replied" | "archived"
  created_at: string
}

export interface EnquiryResponse<T = unknown> {
  success: boolean
  data?: T
  count?: number
  unreadCount?: number
  error?: string
}

/**
 * Creates a new client enquiry in Supabase.
 * Reusable across forms, modals, or API endpoints.
 */
export async function createEnquiry(
  input: CreateEnquiryInput
): Promise<EnquiryResponse<EnquiryRecord>> {
  const client = getSupabaseBrowserClient()

  if (!client) {
    return {
      success: false,
      error: "Supabase client is not configured. Please verify environment variables.",
    }
  }

  try {
    const payload = {
      full_name: input.fullName.trim(),
      email: input.email.trim().toLowerCase(),
      company: input.company?.trim() || null,
      phone: input.phone?.trim() || null,
      subject: input.subject.trim(),
      message: input.message.trim(),
      service_type: input.serviceType || "General Inquiry",
      budget: input.budget || null,
      status: "new",
    }

    const { error } = await client.from("enquiries").insert([payload])

    if (error) {
      console.warn("Supabase insert to 'enquiries' returned error:", error.message)
      return {
        success: false,
        error: error.message,
      }
    }

    return {
      success: true,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to record enquiry"
    console.error("Enquiry submission error:", message)
    return {
      success: false,
      error: message,
    }
  }
}

/**
 * Fetches all dynamic enquiries for the admin inbox.
 * Calls /api/admin/enquiries with session credentials.
 */
export async function fetchAdminEnquiries(): Promise<EnquiryResponse<Enquiry[]>> {
  try {
    const res = await fetch("/api/admin/enquiries", {
      method: "GET",
      cache: "no-store",
    })

    const result = await res.json()
    if (!res.ok || !result.success) {
      return {
        success: false,
        error: result.error || "Failed to fetch enquiries",
        data: [],
      }
    }

    return {
      success: true,
      data: result.data as Enquiry[],
      count: result.count,
      unreadCount: result.unreadCount,
    }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to fetch enquiries",
      data: [],
    }
  }
}

/**
 * Updates an enquiry's status or read state.
 */
export async function updateAdminEnquiry(
  id: string,
  params: { status?: string; isRead?: boolean }
): Promise<EnquiryResponse> {
  try {
    const res = await fetch("/api/admin/enquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...params }),
    })

    const result = await res.json()
    return result
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to update enquiry",
    }
  }
}

/**
 * Deletes a single enquiry by ID.
 */
export async function deleteAdminEnquiry(id: string): Promise<EnquiryResponse> {
  try {
    const res = await fetch("/api/admin/enquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    const result = await res.json()
    return result
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to delete enquiry",
    }
  }
}

/**
 * Bulk updates multiple enquiries.
 */
export async function bulkUpdateAdminEnquiries(
  ids: string[],
  params: { status?: string; isRead?: boolean }
): Promise<EnquiryResponse> {
  try {
    const res = await fetch("/api/admin/enquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids, ...params }),
    })

    const result = await res.json()
    return result
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to bulk update enquiries",
    }
  }
}

/**
 * Bulk deletes multiple enquiries.
 */
export async function bulkDeleteAdminEnquiries(ids: string[]): Promise<EnquiryResponse> {
  try {
    const res = await fetch("/api/admin/enquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
    })

    const result = await res.json()
    return result
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to bulk delete enquiries",
    }
  }
}

/**
 * Backward compatibility helpers for use-supabase hook
 */
export async function getEnquiries(): Promise<EnquiryResponse<EnquiryRecord[]>> {
  const res = await fetchAdminEnquiries()
  return {
    success: res.success,
    data: (res.data as unknown as EnquiryRecord[]) || [],
    error: res.error,
  }
}

export async function updateEnquiryStatus(
  id: string,
  status: EnquiryRecord["status"]
): Promise<EnquiryResponse> {
  return updateAdminEnquiry(id, { status })
}

export const deleteEnquiry = deleteAdminEnquiry


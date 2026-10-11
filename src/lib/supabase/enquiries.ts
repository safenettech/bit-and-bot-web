import { getSupabaseBrowserClient } from "@/lib/supabase/client"

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

    const { error } = await client
      .from("enquiries")
      .insert([payload])

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
 * Fetches all enquiries ordered by newest first.
 */
export async function getEnquiries(): Promise<EnquiryResponse<EnquiryRecord[]>> {
  const client = getSupabaseBrowserClient()
  if (!client) {
    return { success: false, error: "Supabase not configured." }
  }

  try {
    const { data, error } = await client
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: data as EnquiryRecord[] }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to fetch enquiries",
    }
  }
}

/**
 * Updates enquiry status.
 */
export async function updateEnquiryStatus(
  id: string,
  status: EnquiryRecord["status"]
): Promise<EnquiryResponse> {
  const client = getSupabaseBrowserClient()
  if (!client) {
    return { success: false, error: "Supabase not configured." }
  }

  try {
    const { error } = await client
      .from("enquiries")
      .update({ status })
      .eq("id", id)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to update enquiry",
    }
  }
}

/**
 * Deletes an enquiry by ID.
 */
export async function deleteEnquiry(id: string): Promise<EnquiryResponse> {
  const client = getSupabaseBrowserClient()
  if (!client) {
    return { success: false, error: "Supabase not configured." }
  }

  try {
    const { error } = await client.from("enquiries").delete().eq("id", id)
    if (error) {
      return { success: false, error: error.message }
    }
    return { success: true }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to delete enquiry",
    }
  }
}

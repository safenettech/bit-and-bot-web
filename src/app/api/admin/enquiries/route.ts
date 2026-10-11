import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { BITBOT_AUTH_COOKIE, verifyAdminToken } from "@/lib/auth/jwt"

interface RawEnquiry {
  id: string
  full_name: string
  email: string
  company: string | null
  phone: string | null
  service_type: string | null
  budget: string | null
  subject: string
  message: string
  status: "new" | "in_review" | "replied" | "archived"
  created_at: string
}

/**
 * Format timestamp into display date string (e.g. "10:42 AM", "Yesterday", "Oct 10")
 */
function formatEnquiryDate(isoString: string): string {
  try {
    const d = new Date(isoString)
    if (isNaN(d.getTime())) return "Recently"

    const now = new Date()
    const isToday =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()

    if (isToday) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    const yesterday = new Date(now)
    yesterday.setDate(now.getDate() - 1)
    const isYesterday =
      d.getDate() === yesterday.getDate() &&
      d.getMonth() === yesterday.getMonth() &&
      d.getFullYear() === yesterday.getFullYear()

    if (isYesterday) {
      return "Yesterday"
    }

    return d.toLocaleDateString([], { month: "short", day: "numeric" })
  } catch {
    return "Recently"
  }
}

/**
 * Map raw Supabase database row to frontend EnquiryViewModel
 */
function mapRecordToEnquiry(row: RawEnquiry) {
  const isRead = row.status !== "new"
  return {
    id: row.id,
    fullName: row.full_name || "Anonymous Client",
    email: row.email || "",
    company: row.company || "Not Specified",
    phone: row.phone || undefined,
    serviceType: row.service_type || "General Inquiry",
    budget: row.budget || "Not Specified",
    subject: row.subject || "No Subject",
    message: row.message || "",
    date: formatEnquiryDate(row.created_at),
    timestamp: row.created_at || new Date().toISOString(),
    isRead,
    isStarred: false,
    status: row.status || "new",
  }
}

/**
 * Helper to ensure request has valid bitbot_auth token
 */
async function checkAuth() {
  const cookieStore = await cookies()
  const token =
    cookieStore.get(BITBOT_AUTH_COOKIE)?.value ||
    cookieStore.get("bit_and_bot_admin_session")?.value

  if (!token) return null
  return await verifyAdminToken(token)
}

/**
 * GET /api/admin/enquiries
 * Returns all enquiries ordered by newest first with unreadCount
 */
export async function GET() {
  const auth = await checkAuth()
  if (!auth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  const supabase = getSupabaseBrowserClient()
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: "Supabase client not configured" },
      { status: 500 }
    )
  }

  try {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    const rawList = (data || []) as RawEnquiry[]
    const items = rawList.map(mapRecordToEnquiry)
    const unreadCount = items.filter((item) => !item.isRead).length

    return NextResponse.json({
      success: true,
      data: items,
      count: items.length,
      unreadCount,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load enquiries"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

/**
 * PATCH /api/admin/enquiries
 * Updates status or read state of single or multiple enquiries
 */
export async function PATCH(request: Request) {
  const auth = await checkAuth()
  if (!auth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  const supabase = getSupabaseBrowserClient()
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: "Supabase client not configured" },
      { status: 500 }
    )
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { id, ids, status, isRead } = body

    // Compute status value
    let newStatus: string = status
    if (!newStatus && typeof isRead === "boolean") {
      newStatus = isRead ? "in_review" : "new"
    }

    if (!newStatus) {
      return NextResponse.json(
        { success: false, error: "Missing status or isRead parameter" },
        { status: 400 }
      )
    }

    // Bulk update
    if (Array.isArray(ids) && ids.length > 0) {
      const { error } = await supabase
        .from("enquiries")
        .update({ status: newStatus })
        .in("id", ids)

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }
      return NextResponse.json({ success: true, count: ids.length })
    }

    // Single item update
    if (id) {
      const { error } = await supabase
        .from("enquiries")
        .update({ status: newStatus })
        .eq("id", id)

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, error: "Must provide either id or ids" },
      { status: 400 }
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to update enquiry"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

/**
 * DELETE /api/admin/enquiries
 * Permanently removes single or multiple enquiries
 */
export async function DELETE(request: Request) {
  const auth = await checkAuth()
  if (!auth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  const supabase = getSupabaseBrowserClient()
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: "Supabase client not configured" },
      { status: 500 }
    )
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { id, ids } = body

    // Bulk deletion
    if (Array.isArray(ids) && ids.length > 0) {
      const { error } = await supabase
        .from("enquiries")
        .delete()
        .in("id", ids)

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }
      return NextResponse.json({ success: true, count: ids.length })
    }

    // Single item deletion
    if (id) {
      const { error } = await supabase
        .from("enquiries")
        .delete()
        .eq("id", id)

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, error: "Must provide id or ids for deletion" },
      { status: 400 }
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to delete enquiry"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

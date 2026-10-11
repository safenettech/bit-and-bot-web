import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { signAdminToken, verifyAdminToken, BITBOT_AUTH_COOKIE } from "@/lib/auth/jwt"

/**
 * GET /api/admin/profile
 * Returns the currently authenticated admin's profile directly from Supabase
 */
export async function GET() {
  try {
    const cookieStore = await cookies()
    const token =
      cookieStore.get(BITBOT_AUTH_COOKIE)?.value ||
      cookieStore.get("bit_and_bot_admin_session")?.value

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    const payload = await verifyAdminToken(token)
    if (!payload?.id) {
      return NextResponse.json(
        { success: false, error: "Invalid session" },
        { status: 401 }
      )
    }

    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Supabase client not configured" },
        { status: 500 }
      )
    }

    const { data, error } = await supabase
      .from("admins")
      .select("id, name, email, role, avatar_url, created_at, updated_at, last_login_at")
      .eq("id", payload.id)
      .single()

    if (error || !data) {
      // Fallback to token payload if direct row query is missing
      return NextResponse.json({
        success: true,
        user: {
          id: payload.id,
          name: payload.name,
          email: payload.email,
          role: payload.role || "super_admin",
          avatarUrl: payload.avatarUrl,
        },
      })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role || "super_admin",
        avatarUrl: data.avatar_url,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        lastLoginAt: data.last_login_at,
      },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load profile"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

/**
 * PATCH /api/admin/profile
 * Updates the admin's name, email, and optionally password in Supabase
 */
export async function PATCH(request: Request) {
  try {
    const cookieStore = await cookies()
    const token =
      cookieStore.get(BITBOT_AUTH_COOKIE)?.value ||
      cookieStore.get("bit_and_bot_admin_session")?.value

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    const payload = await verifyAdminToken(token)
    if (!payload?.id) {
      return NextResponse.json(
        { success: false, error: "Invalid session" },
        { status: 401 }
      )
    }

    const body = await request.json().catch(() => ({}))
    const { name, email, password } = body

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Display name and email are required." },
        { status: 400 }
      )
    }

    const cleanName = String(name).trim()
    const cleanEmail = String(email).trim().toLowerCase()

    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Supabase client not configured" },
        { status: 500 }
      )
    }

    const updatePayload: Record<string, unknown> = {
      name: cleanName,
      email: cleanEmail,
      updated_at: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    if (password && String(password).trim().length > 0) {
      updatePayload.password = String(password).trim()
    }

    const { data, error } = await supabase
      .from("admins")
      .update(updatePayload)
      .eq("id", payload.id)
      .select("id, name, email, role, avatar_url")
      .single()

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      )
    }

    const updatedUser = {
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role || payload.role || "super_admin",
      avatarUrl: data.avatar_url || payload.avatarUrl,
    }

    // Generate refreshed JWT token with updated name and email
    const newToken = await signAdminToken({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      avatarUrl: updatedUser.avatarUrl,
    })

    // Update cookie
    cookieStore.set(BITBOT_AUTH_COOKIE, newToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })

    return NextResponse.json({
      success: true,
      user: updatedUser,
      token: newToken,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to update profile"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

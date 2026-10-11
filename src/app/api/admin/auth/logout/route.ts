import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { BITBOT_AUTH_COOKIE, verifyAdminToken } from "@/lib/auth/jwt"

export async function POST() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(BITBOT_AUTH_COOKIE)?.value

    if (token) {
      const decoded = await verifyAdminToken(token)
      if (decoded?.id) {
        const supabase = getSupabaseBrowserClient()
        if (supabase) {
          try {
            await supabase
              .from("admins")
              .update({
                is_loggined: false,
                isLoggined: false,
                updated_at: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              })
              .eq("id", decoded.id)
          } catch {
            // Ignore failure if column/table is still pending
          }
        }
      }
    }

    // Clear the cookie
    cookieStore.set(BITBOT_AUTH_COOKIE, "", {
      path: "/",
      maxAge: 0,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Logout error"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

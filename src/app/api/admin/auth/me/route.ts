import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { BITBOT_AUTH_COOKIE, verifyAdminToken } from "@/lib/auth/jwt"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(BITBOT_AUTH_COOKIE)?.value

    if (!token) {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      )
    }

    const payload = await verifyAdminToken(token)
    if (!payload) {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      authenticated: true,
      user: {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        role: payload.role,
        avatarUrl: payload.avatarUrl,
      },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Session error"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyAdminToken, BITBOT_AUTH_COOKIE } from "@/lib/auth/jwt"

/**
 * Next.js Middleware to guard all /admin routes.
 * Inspects `bitbot_auth` JWT cookie.
 * Ensures unauthenticated visitors cannot access administrative dashboards, enquiries, or profiles.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token =
    request.cookies.get(BITBOT_AUTH_COOKIE)?.value ||
    request.cookies.get("bit_and_bot_admin_session")?.value

  // Admin route protection
  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/login"

    // Verify token if present
    const isAuthenticated = token ? await verifyAdminToken(token) : null

    // If trying to access protected admin pages without active session
    if (!isLoginPage && !isAuthenticated) {
      const loginUrl = new URL("/admin/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(loginUrl)
    }

    // If already authenticated and trying to visit login page
    if (isLoginPage && isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

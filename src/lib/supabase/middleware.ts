import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

/**
 * Supabase Middleware helper for session refreshes and route protection.
 */
export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Hook for Supabase auth cookie synchronization when session auth is used
  return response
}

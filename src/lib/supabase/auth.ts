import { getSupabaseEnv } from "@/lib/supabase/client"

export interface AdminUser {
  id: string
  email: string
  name: string
  role: "super_admin" | "admin" | "editor"
  avatarUrl?: string
}

export interface AuthSession {
  accessToken: string
  user: AdminUser
}

const STORAGE_KEY = "bit_and_bot_admin_session"

/**
 * Sign in admin using email and password via Supabase Auth (or demo fallback if env vars unset).
 */
export async function signInWithEmail(
  email: string,
  password: string
): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
  // Validate basic inputs
  if (!email || !password) {
    return { success: false, error: "Please provide both email and password." }
  }

  const supabaseEnv = getSupabaseEnv()

  // 1. If Supabase credentials are configured in environment variables
  if (supabaseEnv) {
    try {
      const response = await fetch(`${supabaseEnv.url}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: {
          "apikey": supabaseEnv.anonKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.error_description || data.msg || "Authentication failed with Supabase.",
        }
      }

      const session: AuthSession = {
        accessToken: data.access_token,
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.full_name || email.split("@")[0],
          role: "super_admin",
        },
      }

      saveSession(session)
      return { success: true, session }
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : "Failed to connect to Supabase auth service.",
      }
    }
  }

  // 2. Demo fallback when Supabase is not yet linked in .env.local
  // This allows the admin interface to be explored immediately without configuration blocks.
  if (email.toLowerCase() === "admin@bitandbot.com" && password === "admin123456") {
    const session: AuthSession = {
      accessToken: "demo-jwt-token-preview",
      user: {
        id: "usr_admin_01",
        email: "admin@bitandbot.com",
        name: "Alex Mercer",
        role: "super_admin",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      },
    }

    saveSession(session)
    return { success: true, session }
  }

  return {
    success: false,
    error: "Invalid email or password. (Use demo: admin@bitandbot.com / admin123456)",
  }
}

/**
 * Sign out and clear stored admin credentials.
 */
export function signOutAdmin(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY)
    document.cookie = `${STORAGE_KEY}=; path=/; max-age=0; SameSite=Lax`
  }
}

/**
 * Get active admin session from client storage.
 */
export function getAdminSession(): AuthSession | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthSession
  } catch {
    return null
  }
}

/**
 * Helper to persist session in localStorage and document.cookie.
 */
function saveSession(session: AuthSession): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
    document.cookie = `${STORAGE_KEY}=${session.accessToken}; path=/; max-age=604800; SameSite=Lax`
  }
}

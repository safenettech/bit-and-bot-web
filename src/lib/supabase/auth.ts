import { BITBOT_AUTH_COOKIE } from "@/lib/auth/jwt"

export interface AdminUser {
  id: string
  email: string
  name: string
  role: "super_admin" | "admin" | "editor"
  avatarUrl?: string
  createdAt?: string
  updatedAt?: string
  lastLoginAt?: string
}

export interface AuthSession {
  accessToken: string
  user: AdminUser
}

export { BITBOT_AUTH_COOKIE }

/**
 * Sign in admin using email and password via backend login API endpoint,
 * authenticating against Supabase `admins` table and saving JWT token `bitbot_auth`.
 */
export async function signInWithEmail(
  email: string,
  password: string
): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
  if (!email || !password) {
    return { success: false, error: "Please provide both email and password." }
  }

  try {
    const response = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      return {
        success: false,
        error: data.error || "Authentication failed. Please verify credentials.",
      }
    }

    const session: AuthSession = {
      accessToken: data.token,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        role: data.user.role || "super_admin",
        avatarUrl: data.user.avatarUrl,
      },
    }

    saveSession(session)
    return { success: true, session }
  } catch (err) {
    return {
      success: false,
      error:
        err instanceof Error ? err.message : "Failed to connect to authentication service.",
    }
  }
}

/**
 * Sign out and clear stored admin credentials and bitbot_auth cookie.
 */
export async function signOutAdmin(): Promise<void> {
  try {
    await fetch("/api/admin/auth/logout", { method: "POST" })
  } catch {
    // Continue local cleanup even if network request fails
  }

  if (typeof window !== "undefined") {
    localStorage.removeItem(BITBOT_AUTH_COOKIE)
    localStorage.removeItem("bit_and_bot_admin_session") // legacy fallback cleanup
    document.cookie = `${BITBOT_AUTH_COOKIE}=; path=/; max-age=0; SameSite=Lax`
    document.cookie = `bit_and_bot_admin_session=; path=/; max-age=0; SameSite=Lax`
  }
}

/**
 * Get active admin session from client storage.
 */
export function getAdminSession(): AuthSession | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(BITBOT_AUTH_COOKIE)
    if (!raw) return null
    return JSON.parse(raw) as AuthSession
  } catch {
    return null
  }
}

/**
 * Fetches the freshest admin profile data from Supabase.
 */
export async function fetchAdminProfile(): Promise<{
  success: boolean
  user?: AdminUser
  error?: string
}> {
  try {
    const res = await fetch("/api/admin/profile", {
      method: "GET",
      cache: "no-store",
    })
    const data = await res.json()
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || "Failed to load profile" }
    }
    return { success: true, user: data.user }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to load profile",
    }
  }
}

/**
 * Updates the admin profile in Supabase and syncs local session and headers.
 */
export async function updateAdminProfile(payload: {
  name: string
  email: string
  password?: string
}): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
  try {
    const res = await fetch("/api/admin/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || "Failed to update profile",
      }
    }

    if (data.token && data.user) {
      saveSession({ accessToken: data.token, user: data.user })
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("admin-profile-updated"))
      }
    }

    return { success: true, user: data.user }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error updating profile",
    }
  }
}

/**
 * Helper to persist session in localStorage and document.cookie.
 */
function saveSession(session: AuthSession): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(BITBOT_AUTH_COOKIE, JSON.stringify(session))
    document.cookie = `${BITBOT_AUTH_COOKIE}=${session.accessToken}; path=/; max-age=604800; SameSite=Lax`
  }
}

import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * Polyfill WebSocket in server/Node environment for @supabase/supabase-js on Node 20
 */
if (typeof window === "undefined" && typeof globalThis.WebSocket === "undefined") {
  // @ts-expect-error fallback dummy class for Node environment without native WebSocket
  globalThis.WebSocket = class {}
}

export interface SupabaseConfig {
  url: string
  key: string
}

export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    return null
  }

  return { url, key }
}

export function getSupabaseEnv() {
  const config = getSupabaseConfig()
  if (!config) return null
  return { url: config.url, anonKey: config.key }
}

let browserClient: SupabaseClient | null = null

/**
 * Singleton client initializer for browser usage.
 * Returns null if Supabase environment variables are missing to prevent crashes.
 */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (browserClient) return browserClient

  const config = getSupabaseConfig()
  if (!config) {
    return null
  }

  browserClient = createClient(config.url, config.key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  })

  return browserClient
}

/**
 * Direct export for standard usage.
 */
export const supabase = getSupabaseBrowserClient()

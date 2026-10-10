/**
 * Supabase Browser Client configuration.
 * Isolates Supabase client initialization from UI components.
 */

export interface SupabaseConfig {
  url: string
  anonKey: string
}

export function getSupabaseEnv(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    return null
  }

  return { url, anonKey }
}

/**
 * Returns a configured Supabase client or null if environment variables
 * are not yet provisioned. This prevents runtime crashes during local builds.
 */
export function createBrowserClient() {
  const config = getSupabaseEnv()
  if (!config) {
    if (process.env.NODE_ENV === "development") {
      console.info("Supabase credentials not configured in environment variables.")
    }
    return null
  }

  return {
    config,
    async insertSubmission(table: string, data: Record<string, unknown>) {
      // Direct REST API fallback when client library is optional
      const res = await fetch(`${config.url}/rest/v1/${table}`, {
        method: "POST",
        headers: {
          "apikey": config.anonKey,
          "Authorization": `Bearer ${config.anonKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error(`Failed to submit data: ${res.statusText}`)
      }
      return { success: true }
    },
  }
}

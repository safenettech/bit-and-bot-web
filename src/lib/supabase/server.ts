/**
 * Server-side Supabase utilities.
 * Ensures secret keys and privileged queries never leak to the client bundle.
 */

export interface ServerSupabaseConfig {
  url: string
  serviceRoleKey: string
}

export function getServerSupabaseEnv(): ServerSupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    return null
  }

  return { url, serviceRoleKey }
}

export async function createServerClient() {
  const config = getServerSupabaseEnv()
  if (!config) {
    return null
  }

  return {
    config,
    async query(endpoint: string, options?: RequestInit) {
      const res = await fetch(`${config.url}/rest/v1/${endpoint}`, {
        ...options,
        headers: {
          "apikey": config.serviceRoleKey,
          "Authorization": `Bearer ${config.serviceRoleKey}`,
          "Content-Type": "application/json",
          ...options?.headers,
        },
      })
      if (!res.ok) {
        throw new Error(`Server Supabase query failed: ${res.statusText}`)
      }
      return res.json()
    },
  }
}

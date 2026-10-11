import { SignJWT, jwtVerify } from "jose"

export interface AdminJwtPayload {
  id: string
  name: string
  email: string
  role: string
  avatarUrl?: string
  [key: string]: unknown
}

export const BITBOT_AUTH_COOKIE = "bitbot_auth"
const JWT_SECRET =
  process.env.JWT_SECRET || "bitbot_admin_jwt_secret_key_2026_super_secure"
const secretKey = new TextEncoder().encode(JWT_SECRET)

/**
 * Signs a secure JWT token for authenticated Bit & Bot administrators.
 * Default validity is 7 days.
 */
export async function signAdminToken(payload: AdminJwtPayload): Promise<string> {
  return await new SignJWT({
    id: payload.id,
    name: payload.name,
    email: payload.email,
    role: payload.role || "super_admin",
    avatarUrl: payload.avatarUrl,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey)
}

/**
 * Verifies and decodes a bitbot_auth JWT token.
 * Compatible with Edge Middleware and Node.js server runtimes.
 */
export async function verifyAdminToken(
  token: string
): Promise<AdminJwtPayload | null> {
  try {
    if (!token) return null
    const { payload } = await jwtVerify(token, secretKey)
    return payload as unknown as AdminJwtPayload
  } catch {
    return null
  }
}

"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signInWithEmail } from "@/lib/supabase/auth"
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, DynamicIcon, Badge } from "@/components/global"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)

    // Authenticate with bitbot_auth JWT
    const result = await signInWithEmail(email, password)

    if (result.success) {
      const target =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("redirect") ||
            "/admin/dashboard"
          : "/admin/dashboard"
      router.push(target)
    } else {
      setErrorMessage(result.error || "Authentication failed. Please verify credentials.")
      setIsLoading(false)
    }
  }

  function handleFillDemo() {
    setEmail("admin@bitandbot.com")
    setPassword("admin123456")
    setErrorMessage(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="w-full max-w-md space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight text-foreground hover:opacity-90"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <DynamicIcon name="Bot" size={22} />
            </div>
            <span>
              Bit<span className="text-primary font-black mx-0.5">&</span>Bot
            </span>
          </Link>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Administrative Control Panel
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl">
          <CardHeader className="space-y-1.5 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-foreground">
                Admin Sign In
              </CardTitle>
              <Badge variant="glow" size="sm">
                bitbot_auth JWT
              </Badge>
            </div>
            <CardDescription className="text-xs">
              Enter your authorized staff credentials to access the management portal.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive text-xs flex items-center gap-2 animate-in fade-in-0 duration-200">
                  <DynamicIcon name="ShieldAlert" size={16} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Admin Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="admin@bitandbot.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Demo Helper Pill */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Quick test login:</span>
                <Button
                  type="button"
                  variant="outline"
                  size="xs"
                  onClick={handleFillDemo}
                  className="text-[0.7rem] font-semibold"
                >
                  Fill Demo Credentials
                </Button>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 pt-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full font-semibold h-11 text-sm shadow-md"
              >
                {isLoading ? (
                  <>
                    <DynamicIcon name="Clock" size={16} className="mr-2 animate-spin" />
                    Authenticating with Supabase...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard
                    <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
                  </>
                )}
              </Button>

              <Link
                href="/"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors text-center inline-flex items-center justify-center gap-1"
              >
                <DynamicIcon name="ChevronRight" size={12} className="rotate-180" />
                Return to Public Website
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

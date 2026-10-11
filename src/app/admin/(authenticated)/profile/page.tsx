"use client"

import * as React from "react"
import {
  getAdminSession,
  fetchAdminProfile,
  updateAdminProfile,
} from "@/lib/supabase/auth"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar,
  Badge,
  Input,
  Button,
  DynamicIcon,
  toast,
} from "@/components/global"

export default function AdminProfilePage() {
  const [sessionUser, setSessionUser] = React.useState(() => {
    const session = getAdminSession()
    return {
      name: session?.user?.name || "Bit & Bot Admin",
      email: session?.user?.email || "admin@bitandbot.com",
      role: session?.user?.role || "super_admin",
      avatarUrl: session?.user?.avatarUrl,
    }
  })

  const [password, setPassword] = React.useState("")
  const [showPasswordField, setShowPasswordField] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isLoadingProfile, setIsLoadingProfile] = React.useState(true)
  const [saveSuccess, setSaveSuccess] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  // Fetch freshest profile info directly from Supabase admins table on mount
  React.useEffect(() => {
    let ignore = false

    async function loadFreshProfile() {
      setIsLoadingProfile(true)
      const res = await fetchAdminProfile()
      if (!ignore && res.success && res.user) {
        setSessionUser({
          name: res.user.name,
          email: res.user.email,
          role: res.user.role || "super_admin",
          avatarUrl: res.user.avatarUrl,
        })
      }
      if (!ignore) {
        setIsLoadingProfile(false)
      }
    }

    loadFreshProfile()

    return () => {
      ignore = true
    }
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setSaveSuccess(false)
    setErrorMessage(null)

    const result = await updateAdminProfile({
      name: sessionUser.name,
      email: sessionUser.email,
      password: password.trim() ? password.trim() : undefined,
    })

    setIsSubmitting(false)

    if (result.success) {
      setSaveSuccess(true)
      setPassword("")
      setShowPasswordField(false)
      toast.success("Profile saved successfully to Supabase.")
      setTimeout(() => setSaveSuccess(false), 4000)
    } else {
      const err = result.error || "Failed to update profile."
      setErrorMessage(err)
      toast.error(err)
    }
  }

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in-0 duration-300">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Admin Profile &amp; Security
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
          Manage administrative credentials, role authorizations, and connected session environments.
        </p>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm flex items-center gap-2 animate-in fade-in-0 duration-200">
          <DynamicIcon name="CheckCircle2" size={18} />
          <span>Profile configuration saved successfully in Supabase.</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-2xl border border-destructive/30 bg-destructive/10 text-destructive text-sm flex items-center gap-2 animate-in fade-in-0 duration-200">
          <DynamicIcon name="ShieldAlert" size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Profile Overview Card */}
      <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
        <CardHeader className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50">
          <div className="flex items-center gap-4">
            <Avatar
              fallback={sessionUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() || "AD"}
              size="lg"
              status="online"
              src={sessionUser.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
            />
            <div>
              <CardTitle className="text-xl font-bold text-foreground">
                {sessionUser.name}
              </CardTitle>
              <CardDescription className="text-xs mt-0.5">
                {sessionUser.email}
              </CardDescription>
              <Badge variant="glow" size="sm" className="mt-2 text-[0.65rem]">
                {sessionUser.role.toUpperCase()}
              </Badge>
            </div>
          </div>

          {isLoadingProfile && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <DynamicIcon name="RotateCw" size={13} className="animate-spin text-primary" />
              <span>Syncing Supabase...</span>
            </div>
          )}
        </CardHeader>

        <form onSubmit={handleSave}>
          <CardContent className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Display Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Display Name
                </label>
                <Input
                  required
                  value={sessionUser.name}
                  onChange={(e) =>
                    setSessionUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                  disabled={isSubmitting}
                />
              </div>

              {/* Login Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Login Email
                </label>
                <Input
                  type="email"
                  required
                  value={sessionUser.email}
                  onChange={(e) =>
                    setSessionUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Optional Change Password toggle */}
            <div className="pt-1">
              {!showPasswordField ? (
                <button
                  type="button"
                  onClick={() => setShowPasswordField(true)}
                  className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1.5"
                >
                  <DynamicIcon name="Key" size={13} />
                  Change admin password
                </button>
              ) : (
                <div className="space-y-1.5 p-3.5 rounded-xl border border-border/60 bg-muted/20 animate-in fade-in-0 duration-150">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      New Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowPasswordField(false)
                        setPassword("")
                      }}
                      className="text-[0.7rem] text-muted-foreground hover:text-foreground"
                    >
                      Cancel
                    </button>
                  </div>
                  <Input
                    type="password"
                    placeholder="Enter new admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <p className="text-[0.65rem] text-muted-foreground">
                    Leave empty if you only want to update your name or email.
                  </p>
                </div>
              )}
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <Button
                type="submit"
                size="sm"
                disabled={isSubmitting}
                className="font-semibold shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <DynamicIcon name="RotateCw" size={14} className="mr-1.5 animate-spin" />
                    Saving Changes to Supabase...
                  </>
                ) : (
                  "Save Profile Changes"
                )}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>

      {/* Supabase Environment Information */}
      <Card className="border-border/60 bg-card/60" id="settings">
        <CardHeader className="p-6 space-y-1">
          <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
            <DynamicIcon name="ShieldCheck" size={18} className="text-primary" />
            Supabase Authentication Status
          </CardTitle>
          <CardDescription className="text-xs">
            Current backend auth environment configuration.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs">
          <div className="p-3.5 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-between">
            <span className="text-muted-foreground font-mono">Auth Strategy:</span>
            <span className="font-semibold text-foreground">Supabase JWT + Session Cookie</span>
          </div>

          <div className="p-3.5 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-between">
            <span className="text-muted-foreground font-mono">RBAC Authorization:</span>
            <Badge variant="secondary" size="sm">
              Role: Super Admin (Level 0)
            </Badge>
          </div>

          <div className="p-3.5 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-between">
            <span className="text-muted-foreground font-mono">Active Session Token:</span>
            <span className="text-emerald-500 font-mono font-medium">Valid • Encrypted</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

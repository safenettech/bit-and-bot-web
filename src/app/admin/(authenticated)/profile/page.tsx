"use client"

import * as React from "react"
import { getAdminSession } from "@/lib/supabase/auth"
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
} from "@/components/global"

export default function AdminProfilePage() {
  const [sessionUser, setSessionUser] = React.useState(() => {
    const session = getAdminSession()
    return {
      name: session?.user?.name || "Alex Mercer",
      email: session?.user?.email || "admin@bitandbot.com",
      role: session?.user?.role || "super_admin",
    }
  })
  const [saveSuccess, setSaveSuccess] = React.useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
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
        <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm flex items-center gap-2">
          <DynamicIcon name="CheckCircle2" size={18} />
          <span>Profile configuration saved successfully.</span>
        </div>
      )}

      {/* Profile Overview Card */}
      <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
        <CardHeader className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50">
          <div className="flex items-center gap-4">
            <Avatar
              fallback="AM"
              size="lg"
              status="online"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
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
        </CardHeader>

        <form onSubmit={handleSave}>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Display Name
                </label>
                <Input
                  value={sessionUser.name}
                  onChange={(e) =>
                    setSessionUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Login Email
                </label>
                <Input
                  type="email"
                  value={sessionUser.email}
                  onChange={(e) =>
                    setSessionUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" size="sm" className="font-semibold shadow-sm">
                Save Profile Changes
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

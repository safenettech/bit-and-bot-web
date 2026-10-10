"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signOutAdmin, getAdminSession } from "@/lib/supabase/auth"
import { Avatar, DropdownMenu, ThemeToggle, DynamicIcon, Badge } from "@/components/global"

export interface AdminHeaderProps {
  onToggleSidebar?: () => void
}

export function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
  const router = useRouter()
  const [userName] = React.useState(() => {
    const session = getAdminSession()
    return session?.user?.name || "Alex Mercer"
  })
  const [userEmail] = React.useState(() => {
    const session = getAdminSession()
    return session?.user?.email || "admin@bitandbot.com"
  })

  function handleLogout() {
    signOutAdmin()
    router.push("/admin/login")
  }

  return (
    <header className="sticky top-0 z-20 flex h-16 sm:h-20 w-full items-center justify-between border-b border-border/60 bg-background/80 px-4 sm:px-6 backdrop-blur-md">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar navigation"
            className="flex lg:hidden size-9 items-center justify-center rounded-xl border border-border/60 bg-card text-foreground hover:bg-accent transition-colors"
          >
            <DynamicIcon name="Menu" size={18} />
          </button>
        )}

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Link
            href="/admin/dashboard"
            className="font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Admin
          </Link>
          <DynamicIcon name="ChevronRight" size={14} className="text-muted-foreground/60" />
          <span className="font-semibold text-foreground">Management Portal</span>
        </div>
      </div>

      {/* Right Side: Theme toggle + Notifications + User Profile Menu */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Dark/Light Theme Toggle */}
        <ThemeToggle />

        {/* Notifications Icon Button */}
        <Link
          href="/admin/enquiries"
          className="relative flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          title="2 unread enquiries"
        >
          <DynamicIcon name="Mail" size={16} />
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
            2
          </span>
        </Link>

        {/* User Menu Dropdown */}
        <DropdownMenu
          align="right"
          trigger={
            <div className="flex items-center gap-2.5 rounded-full border border-border/80 bg-card/60 p-1 pr-3 hover:border-primary/50 transition-colors">
              <Avatar
                fallback="AM"
                size="sm"
                status="online"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              />
              <div className="hidden md:flex flex-col text-left leading-none">
                <span className="text-xs font-bold text-foreground">{userName}</span>
                <span className="text-[0.65rem] text-muted-foreground mt-0.5">Super Admin</span>
              </div>
              <DynamicIcon name="ChevronRight" size={14} className="text-muted-foreground ml-0.5 rotate-90" />
            </div>
          }
        >
          <div className="p-3 border-b border-border/50 space-y-1">
            <p className="text-xs font-bold text-foreground">{userName}</p>
            <p className="text-[0.7rem] text-muted-foreground truncate">{userEmail}</p>
            <Badge variant="glow" size="sm" className="mt-1 text-[0.65rem]">
              Super Admin
            </Badge>
          </div>

          <div className="p-1 space-y-0.5 text-xs">
            <Link
              href="/admin/profile"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-foreground/90 hover:bg-accent hover:text-foreground transition-colors"
            >
              <DynamicIcon name="Award" size={15} className="text-primary" />
              <span>Admin Profile</span>
            </Link>

            <Link
              href="/admin/enquiries"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-foreground/90 hover:bg-accent hover:text-foreground transition-colors"
            >
              <DynamicIcon name="Mail" size={15} className="text-primary" />
              <span>Enquiries Inbox</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-foreground/90 hover:bg-accent hover:text-foreground transition-colors"
            >
              <DynamicIcon name="ExternalLink" size={15} className="text-primary" />
              <span>View Public Website</span>
            </Link>
          </div>

          <div className="p-1 border-t border-border/50">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-destructive hover:bg-destructive/10 transition-colors text-left"
            >
              <DynamicIcon name="X" size={15} className="text-destructive" />
              <span>Sign Out / Logout</span>
            </button>
          </div>
        </DropdownMenu>
      </div>
    </header>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DynamicIcon } from "@/components/global"
import { Badge } from "@/components/global"
import { cn } from "@/lib/utils"

export interface AdminSidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  unreadEnquiriesCount?: number
}

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: "LayoutGrid",
  },
  {
    title: "Enquiries",
    href: "/admin/enquiries",
    icon: "Mail",
    badge: "unread",
  },
  // {
  //   title: "Projects CMS",
  //   href: "/admin/dashboard#projects",
  //   icon: "Layers",
  // },
  // {
  //   title: "Services CMS",
  //   href: "/admin/dashboard#services",
  //   icon: "Cpu",
  // },
  {
    title: "Admin Profile",
    href: "/admin/profile",
    icon: "Award",
  },
]

export function AdminSidebar({
  isCollapsed,
  onToggleCollapse,
  unreadEnquiriesCount = 0,
}: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "relative flex flex-col justify-between border-r border-border/60 bg-card/60 backdrop-blur-xl transition-all duration-300 z-30 select-none",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Top Header / Branding */}
      <div>
        <div className="flex h-16 sm:h-20 items-center justify-between px-4 border-b border-border/50">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2.5 overflow-hidden focus:outline-none"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <DynamicIcon name="Bot" size={20} />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col leading-tight animate-in fade-in-0 duration-200">
                <span className="font-heading font-bold text-base text-foreground tracking-tight">
                  Bit<span className="text-primary font-black mx-0.5">&</span>Bot
                </span>
                <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold">
                  Control Center
                </span>
              </div>
            )}
          </Link>

          {/* Collapse Toggle Button */}
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden lg:flex size-8 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <DynamicIcon
              name={isCollapsed ? "ChevronRight" : "Menu"}
              size={16}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-1 space-y-1.5">
          {adminNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href))
            const isEnquiry = item.badge === "unread"

            return (
              <Link
                key={item.href}
                href={item.href}
                title={isCollapsed ? item.title : undefined}
                className={cn(
                  "group relative flex border rounded-sm items-center px-3 py-2.5 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "border-primary text-primary shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  isCollapsed ? "justify-center" : "justify-between"
                )}
              >
                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name={item.icon}
                    size={18}
                    className={cn(
                      "shrink-0 transition-transform group-hover:scale-110",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  {!isCollapsed && <span>{item.title}</span>}
                </div>

                {/* Unread Badge indicator */}
                {isEnquiry && unreadEnquiriesCount > 0 && (
                  <>
                    {!isCollapsed ? (
                      <Badge
                        variant={isActive ? "secondary" : "default"}
                        size="sm"
                        className="ml-auto font-mono text-[0.7rem] px-1.5 py-0.5"
                      >
                        {unreadEnquiriesCount} new
                      </Badge>
                    ) : (
                      <span className="absolute top-2 right-2 size-2 rounded-full bg-primary ring-2 ring-background" />
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom Footer Actions */}
      <div className="p-3 border-t border-border/50 space-y-2">
        <Link
          href="/"
          target="_blank"
          title={isCollapsed ? "View Live Public Website" : undefined}
          className={cn(
            "flex items-center rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors",
            isCollapsed ? "justify-center" : "gap-2.5"
          )}
        >
          <DynamicIcon name="ExternalLink" size={16} />
          {!isCollapsed && <span>View Public Site</span>}
        </Link>

        {/* Small collapsed bar indicator toggle on mobile / all screen */}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="flex lg:hidden w-full items-center justify-center rounded-xl p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          <DynamicIcon name={isCollapsed ? "ChevronRight" : "X"} size={16} />
        </button>
      </div>
    </aside>
  )
}

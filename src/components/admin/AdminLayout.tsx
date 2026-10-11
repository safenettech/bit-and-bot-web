"use client"

import * as React from "react"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { AdminHeader } from "@/components/admin/AdminHeader"
import {
  AdminEnquiriesProvider,
  useAdminEnquiries,
} from "@/context/admin-enquiries-context"

export interface AdminLayoutProps {
  children: React.ReactNode
}

function AdminLayoutInner({ children }: AdminLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false)
  const { unreadCount } = useAdminEnquiries()

  return (
    <div className="flex min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Sidebar with dynamic unread count */}
      <AdminSidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        unreadEnquiriesCount={unreadCount}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <AdminHeader
          onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
          unreadEnquiriesCount={unreadCount}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminEnquiriesProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminEnquiriesProvider>
  )
}

import * as React from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"

export default function AuthenticatedAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AdminLayout>{children}</AdminLayout>
}

import * as React from "react"
import { MainLayout } from "@/components/layout/MainLayout"

export default function MainAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MainLayout>{children}</MainLayout>
}

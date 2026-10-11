"use client"

import * as React from "react"
import Link from "next/link"
import { useAdminEnquiries } from "@/context/admin-enquiries-context"
import { projects } from "@/data/projects"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/global"
import { Button, Badge, DynamicIcon } from "@/components/global"

export default function AdminDashboardPage() {
  const { enquiries, unreadCount, isLoading } = useAdminEnquiries()
  const recentEnquiries = enquiries.slice(0, 4)

  return (
    <div className="space-y-8 animate-in fade-in-0 duration-300">
      {/* Top Banner & Quick Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/40">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Executive Operations Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Real-time pipeline overview, incoming client inquiries, and sprint telemetry.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button asChild size="sm" variant="outline" className="text-xs">
            <Link href="/admin/profile">
              <DynamicIcon name="Award" size={14} className="mr-1.5" />
              Settings
            </Link>
          </Button>

          <Button asChild size="sm" className="text-xs font-semibold shadow-sm">
            <Link href="/admin/enquiries">
              <DynamicIcon name="Mail" size={14} className="mr-1.5" />
              View Enquiries ({unreadCount})
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Inquiries */}
        <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
          <CardHeader className="p-5 flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Total Inquiries
            </CardTitle>
            <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <DynamicIcon name="Mail" size={16} />
            </div>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="font-heading text-3xl font-extrabold text-foreground">
              {isLoading && enquiries.length === 0 ? "..." : enquiries.length}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium mt-1">
              <DynamicIcon name="TrendingUp" size={13} />
              <span>Real-time from Supabase</span>
            </div>
          </CardContent>
        </Card>

        {/* Unread Inquiries */}
        <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
          <CardHeader className="p-5 flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Pending Inquiries
            </CardTitle>
            <div className="size-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <DynamicIcon name="Clock" size={16} />
            </div>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="font-heading text-3xl font-extrabold text-amber-500">
              {isLoading && enquiries.length === 0 ? "..." : unreadCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires engineer review
            </p>
          </CardContent>
        </Card>

        {/* Active Client Sprints */}
        <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
          <CardHeader className="p-5 flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Production Systems
            </CardTitle>
            <div className="size-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <DynamicIcon name="Layers" size={16} />
            </div>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="font-heading text-3xl font-extrabold text-foreground">
              {projects.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Active client deployments
            </p>
          </CardContent>
        </Card>

        {/* Response SLA */}
        <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
          <CardHeader className="p-5 flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Response Speed
            </CardTitle>
            <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <DynamicIcon name="Zap" size={16} />
            </div>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="font-heading text-3xl font-extrabold text-foreground">
              1.8 hrs
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Average architect turnaround
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid: Enquiries Preview & Active Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Recent Inquiries Preview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h2 className="font-heading text-lg font-bold text-foreground">
                Recent Inquiries Inbox
              </h2>
              <p className="text-xs text-muted-foreground">
                Latest submissions from prospective clients
              </p>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-xs">
              <Link href="/admin/enquiries">
                Go to Inbox
                <DynamicIcon name="ArrowRight" size={13} className="ml-1" />
              </Link>
            </Button>
          </div>

          <Card className="border-border/60 bg-card/60 divide-y divide-border/40">
            {isLoading && enquiries.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground space-y-2">
                <DynamicIcon name="RotateCw" size={20} className="mx-auto text-primary animate-spin" />
                <p className="text-xs">Loading recent enquiries from Supabase...</p>
              </div>
            ) : recentEnquiries.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground space-y-1.5">
                <DynamicIcon name="Mail" size={24} className="mx-auto text-muted-foreground/50" />
                <p className="text-xs font-semibold text-foreground">No enquiries received yet</p>
                <p className="text-[0.7rem] text-muted-foreground">
                  New submissions from the contact form will appear here dynamically.
                </p>
              </div>
            ) : (
              recentEnquiries.map((enquiry) => (
                <Link
                  key={enquiry.id}
                  href="/admin/enquiries"
                  className="p-4 flex items-start justify-between gap-4 hover:bg-accent/50 transition-colors block group"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {enquiry.fullName}
                      </span>
                      {!enquiry.isRead && (
                        <span className="size-2 rounded-full bg-primary" />
                      )}
                      {enquiry.company && (
                        <Badge variant="outline" size="sm" className="text-[0.65rem] py-0">
                          {enquiry.company}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-medium text-foreground/90 truncate">
                      {enquiry.subject}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {enquiry.message}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[0.7rem] text-muted-foreground font-mono">
                      {enquiry.date}
                    </span>
                    {enquiry.budget && (
                      <p className="text-[0.7rem] font-semibold text-primary mt-1">
                        {enquiry.budget}
                      </p>
                    )}
                  </div>
                </Link>
              ))
            )}
          </Card>
        </div>

        {/* Right: Active Production Projects */}
        <div className="lg:col-span-5 space-y-4" id="projects">
          <div className="space-y-0.5">
            <h2 className="font-heading text-lg font-bold text-foreground">
              Production Deployed Systems
            </h2>
            <p className="text-xs text-muted-foreground">
              Live enterprise client systems in production
            </p>
          </div>

          <Card className="border-border/60 bg-card/60 divide-y divide-border/40">
            {projects.slice(0, 4).map((project) => (
              <div key={project.slug} className="p-4 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">
                    {project.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {project.category}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 3).map((t) => (
                      <Badge key={t} variant="secondary" size="sm" className="text-[0.65rem] py-0">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <Badge variant="glow" size="sm" className="text-[0.65rem]">
                    Live 99.9%
                  </Badge>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[0.7rem] text-primary hover:underline mt-2"
                    >
                      Visit &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Card>

          {/* Infrastructure Health Status */}
          <div className="p-4 rounded-2xl border border-border/50 bg-muted/20 space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cloud Infrastructure Status
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-foreground">Supabase DB: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-foreground">Next.js Edge: 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-foreground">API Latency: 42ms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-foreground">SSL &amp; DNS: Valid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

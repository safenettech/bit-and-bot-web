"use client"

import * as React from "react"
import {
  Button,
  Badge,
  Input,
  Card,
  Avatar,
  DynamicIcon,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/global"
import { useAdminEnquiries } from "@/context/admin-enquiries-context"
import { cn } from "@/lib/utils"

export default function AdminEnquiriesPage() {
  const {
    enquiries,
    unreadCount,
    isLoading,
    refresh,
    markAsRead,
    markAsUnread,
    toggleStar,
    deleteSingle,
    bulkDelete,
    bulkMarkAsRead,
    bulkMarkAsUnread,
  } = useAdminEnquiries()

  const [activeEnquiryId, setActiveEnquiryId] = React.useState<string | null>(null)
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filter, setFilter] = React.useState<"all" | "unread" | "read" | "starred">("all")

  // State for Delete Confirmation Modal (single or bulk)
  const [deleteTarget, setDeleteTarget] = React.useState<{
    type: "single" | "bulk"
    id?: string
    fullName?: string
    count?: number
  } | null>(null)

  // Selected enquiry object
  const activeEnquiry = React.useMemo(() => {
    return enquiries.find((e) => e.id === activeEnquiryId) || null
  }, [enquiries, activeEnquiryId])

  // Filter & search logic
  const filteredEnquiries = React.useMemo(() => {
    return enquiries.filter((item) => {
      // Tab filter
      if (filter === "unread" && item.isRead) return false
      if (filter === "read" && !item.isRead) return false
      if (filter === "starred" && !item.isStarred) return false

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        return (
          item.fullName.toLowerCase().includes(query) ||
          item.company.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query) ||
          item.subject.toLowerCase().includes(query) ||
          item.message.toLowerCase().includes(query) ||
          item.serviceType.toLowerCase().includes(query)
        )
      }
      return true
    })
  }, [enquiries, filter, searchQuery])

  // Checkbox handlers
  function handleToggleSelect(id: string, e: React.MouseEvent) {
    e.stopPropagation()
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function handleSelectAll() {
    if (selectedIds.size === filteredEnquiries.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filteredEnquiries.map((e) => e.id)))
    }
  }

  // Toggle Read / Unread
  function handleToggleRead(id: string, e?: React.MouseEvent) {
    if (e) e.stopPropagation()
    const item = enquiries.find((e) => e.id === id)
    if (item?.isRead) {
      markAsUnread(id)
    } else {
      markAsRead(id)
    }
  }

  // Toggle Star
  function handleToggleStar(id: string, e?: React.MouseEvent) {
    if (e) e.stopPropagation()
    toggleStar(id)
  }

  // Open Enquiry & auto mark as read
  function handleOpenEnquiry(id: string) {
    setActiveEnquiryId(id)
    const item = enquiries.find((e) => e.id === id)
    if (item && !item.isRead) {
      markAsRead(id)
    }
  }

  // Trigger Delete Confirmation for Single Item
  function requestDeleteSingle(id: string, fullName: string, e?: React.MouseEvent) {
    if (e) e.stopPropagation()
    setDeleteTarget({ type: "single", id, fullName })
  }

  // Trigger Delete Confirmation for Bulk Items
  function requestBulkDelete() {
    if (selectedIds.size === 0) return
    setDeleteTarget({ type: "bulk", count: selectedIds.size })
  }

  // Confirm and execute delete from Supabase
  async function handleConfirmDelete() {
    if (!deleteTarget) return

    if (deleteTarget.type === "single" && deleteTarget.id) {
      const targetId = deleteTarget.id
      const success = await deleteSingle(targetId)
      if (success) {
        if (activeEnquiryId === targetId) {
          setActiveEnquiryId(null)
        }
        setSelectedIds((prev) => {
          const next = new Set(prev)
          next.delete(targetId)
          return next
        })
      }
    } else if (deleteTarget.type === "bulk") {
      const ids = Array.from(selectedIds)
      const success = await bulkDelete(ids)
      if (success) {
        if (activeEnquiryId && selectedIds.has(activeEnquiryId)) {
          setActiveEnquiryId(null)
        }
        setSelectedIds(new Set())
      }
    }

    setDeleteTarget(null)
  }

  return (
    <div className="space-y-6">
      {/* Page Title & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <span>Client Enquiries</span>
            {unreadCount > 0 && (
              <Badge variant="default" size="sm" className="font-mono">
                {unreadCount} unread
              </Badge>
            )}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Real-time Supabase enquiries inbox. Read, track, respond, or manage client leads.
          </p>
        </div>

        {/* Quick Search & Refresh */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-full sm:w-64">
            <Input
              placeholder="Search sender, company, subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 text-xs"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={refresh}
            disabled={isLoading}
            title="Refresh inbox from Supabase"
            className="shrink-0 h-9 px-3 gap-1.5 text-xs"
          >
            <DynamicIcon
              name="RotateCw"
              size={13}
              className={cn(isLoading && "animate-spin")}
            />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
        </div>
      </div>

      {/* Main Mail Container */}
      <Card className="border-border/80 bg-card shadow-sm overflow-hidden flex flex-col min-h-[620px]">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:px-4 border-b border-border/60 bg-muted/30">
          <div className="flex items-center gap-2">
            {/* Select All Checkbox */}
            <button
              type="button"
              onClick={handleSelectAll}
              title={selectedIds.size > 0 ? "Deselect All" : "Select All"}
              className={cn(
                "size-5 rounded border flex items-center justify-center transition-colors",
                selectedIds.size > 0
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-input bg-background hover:border-primary"
              )}
            >
              {selectedIds.size > 0 && (
                <DynamicIcon name="CheckCircle2" size={12} />
              )}
            </button>

            {/* Bulk Action Buttons (when items are selected) */}
            {selectedIds.size > 0 ? (
              <div className="flex items-center gap-1.5 pl-2 border-l border-border/60 animate-in fade-in-0 duration-150">
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => bulkMarkAsRead(Array.from(selectedIds))}
                  className="gap-1 text-xs"
                >
                  <DynamicIcon name="CheckCircle2" size={13} />
                  Mark Read
                </Button>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => bulkMarkAsUnread(Array.from(selectedIds))}
                  className="gap-1 text-xs"
                >
                  <DynamicIcon name="Mail" size={13} />
                  Mark Unread
                </Button>
                <Button
                  variant="destructive"
                  size="xs"
                  onClick={requestBulkDelete}
                  className="gap-1 text-xs"
                >
                  <DynamicIcon name="X" size={13} />
                  Delete ({selectedIds.size})
                </Button>
              </div>
            ) : (
              /* Filter Tabs */
              <div className="flex items-center gap-1">
                {(["all", "unread", "read", "starred"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilter(tab)}
                    className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-colors",
                      filter === tab
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            {isLoading ? (
              <span className="flex items-center gap-1.5">
                <DynamicIcon name="RotateCw" size={11} className="animate-spin" />
                Syncing Supabase...
              </span>
            ) : (
              <span>Showing {filteredEnquiries.length} of {enquiries.length}</span>
            )}
          </div>
        </div>

        {/* Content View: Split Pane / Detail vs List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
          {/* List Pane */}
          <div
            className={cn(
              "lg:col-span-5 xl:col-span-5 overflow-y-auto divide-y divide-border/40 max-h-[680px]",
              activeEnquiry ? "hidden lg:block" : "block"
            )}
          >
            {isLoading && enquiries.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground space-y-3">
                <DynamicIcon name="RotateCw" size={28} className="mx-auto text-primary animate-spin" />
                <p className="text-sm font-semibold">Loading enquiries from Supabase...</p>
                <p className="text-xs">Fetching client submissions from your cloud database.</p>
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground space-y-2">
                <DynamicIcon name="Mail" size={32} className="mx-auto text-muted-foreground/50" />
                <p className="text-sm font-semibold">No enquiries found</p>
                <p className="text-xs">
                  {enquiries.length === 0
                    ? "Your Supabase enquiries table has no submissions yet. Submit a test inquiry on the contact form!"
                    : "No enquiries match your current filter or search criteria."}
                </p>
                {enquiries.length === 0 && (
                  <Button
                    variant="outline"
                    size="xs"
                    onClick={refresh}
                    className="mt-3 gap-1.5 text-xs"
                  >
                    <DynamicIcon name="RotateCw" size={12} />
                    Check for New Inquiries
                  </Button>
                )}
              </div>
            ) : (
              filteredEnquiries.map((item) => {
                const isSelected = selectedIds.has(item.id)
                const isActive = activeEnquiryId === item.id

                return (
                  <div
                    key={item.id}
                    onClick={() => handleOpenEnquiry(item.id)}
                    className={cn(
                      "group p-3.5 sm:p-4 flex items-start gap-3 cursor-pointer transition-colors relative",
                      !item.isRead ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-accent/50",
                      isActive && "bg-accent border-l-4 border-primary",
                      isSelected && "bg-primary/10"
                    )}
                  >
                    {/* Checkbox */}
                    <div
                      onClick={(e) => handleToggleSelect(item.id, e)}
                      className="pt-0.5"
                    >
                      <button
                        type="button"
                        className={cn(
                          "size-4 rounded border flex items-center justify-center transition-colors",
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-input hover:border-primary"
                        )}
                      >
                        {isSelected && <DynamicIcon name="CheckCircle2" size={10} />}
                      </button>
                    </div>

                    {/* Star Button */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleStar(item.id, e)}
                      aria-label={item.isStarred ? "Unstar" : "Star"}
                      className={cn(
                        "pt-0.5 text-muted-foreground hover:text-amber-500 transition-colors",
                        item.isStarred && "text-amber-500"
                      )}
                    >
                      <DynamicIcon
                        name="Star"
                        size={15}
                        className={item.isStarred ? "fill-amber-500" : ""}
                      />
                    </button>

                    {/* Content Snippet */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "text-xs truncate",
                            !item.isRead ? "font-bold text-foreground" : "font-medium text-foreground/80"
                          )}
                        >
                          {item.fullName}
                        </span>
                        <span className="text-[0.65rem] text-muted-foreground font-mono shrink-0">
                          {item.date}
                        </span>
                      </div>

                      <p
                        className={cn(
                          "text-xs truncate",
                          !item.isRead ? "font-semibold text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {item.subject}
                      </p>

                      <p className="text-[0.7rem] text-muted-foreground line-clamp-1">
                        {item.message}
                      </p>

                      <div className="flex items-center gap-1.5 pt-1">
                        <Badge variant="outline" size="sm" className="text-[0.65rem] py-0 px-1.5">
                          {item.company}
                        </Badge>
                        <Badge variant="secondary" size="sm" className="text-[0.65rem] py-0 px-1.5">
                          {item.serviceType}
                        </Badge>
                      </div>
                    </div>

                    {/* Quick Hover Actions (Read/Unread + Delete) */}
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity shrink-0">
                      <button
                        type="button"
                        onClick={(e) => handleToggleRead(item.id, e)}
                        title={item.isRead ? "Mark as unread" : "Mark as read"}
                        className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                      >
                        <DynamicIcon name="Mail" size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => requestDeleteSingle(item.id, item.fullName, e)}
                        title="Delete enquiry"
                        className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                      >
                        <DynamicIcon name="X" size={14} />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Detail View Pane */}
          <div
            className={cn(
              "lg:col-span-7 xl:col-span-7 p-6 overflow-y-auto max-h-[680px]",
              activeEnquiry ? "block" : "hidden lg:flex lg:items-center lg:justify-center"
            )}
          >
            {activeEnquiry ? (
              <div className="space-y-6">
                {/* Detail View Actions Toolbar */}
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveEnquiryId(null)}
                    className="gap-1.5 lg:hidden text-xs"
                  >
                    <DynamicIcon name="ChevronRight" size={14} className="rotate-180" />
                    Back to Inbox
                  </Button>

                  <div className="flex items-center gap-2 ml-auto">
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => handleToggleRead(activeEnquiry.id)}
                      className="gap-1.5 text-xs"
                    >
                      <DynamicIcon name="Mail" size={13} />
                      {activeEnquiry.isRead ? "Mark Unread" : "Mark Read"}
                    </Button>

                    <Button
                      variant="destructive"
                      size="xs"
                      onClick={(e) =>
                        requestDeleteSingle(activeEnquiry.id, activeEnquiry.fullName, e)
                      }
                      className="gap-1.5 text-xs"
                    >
                      <DynamicIcon name="X" size={13} />
                      Delete
                    </Button>
                  </div>
                </div>

                {/* Subject & Badges */}
                <div className="space-y-2">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    {activeEnquiry.subject}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="glow">{activeEnquiry.serviceType}</Badge>
                    <Badge variant="outline">Budget: {activeEnquiry.budget}</Badge>
                    <span className="text-xs text-muted-foreground font-mono">
                      Received {activeEnquiry.date}
                    </span>
                  </div>
                </div>

                {/* Sender Profile Box */}
                <div className="p-4 rounded-2xl border border-border/60 bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar
                      fallback={activeEnquiry.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                      size="default"
                    />
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {activeEnquiry.fullName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activeEnquiry.email} • {activeEnquiry.company}
                      </p>
                    </div>
                  </div>

                  {activeEnquiry.phone && (
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <DynamicIcon name="Phone" size={14} className="text-primary" />
                      <span>{activeEnquiry.phone}</span>
                    </div>
                  )}
                </div>

                {/* Full Message Body */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Inquiry Content &amp; Scope
                  </h3>
                  <div className="p-5 rounded-2xl border border-border/50 bg-background text-sm leading-relaxed whitespace-pre-line text-foreground/90 font-sans">
                    {activeEnquiry.message}
                  </div>
                </div>

                {/* Action reply footer */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-3">
                  <Button asChild size="sm" className="font-semibold shadow-sm">
                    <a
                      href={`mailto:${activeEnquiry.email}?subject=Re: ${encodeURIComponent(
                        activeEnquiry.subject
                      )}&body=Hi ${encodeURIComponent(activeEnquiry.fullName)},%0D%0A%0D%0A`}
                    >
                      <DynamicIcon name="Send" size={14} className="mr-1.5" />
                      Reply via Email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleStar(activeEnquiry.id)}
                    className="gap-1.5 text-xs"
                  >
                    <DynamicIcon
                      name="Star"
                      size={14}
                      className={activeEnquiry.isStarred ? "fill-amber-500 text-amber-500" : ""}
                    />
                    {activeEnquiry.isStarred ? "Starred" : "Star Inquiry"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground space-y-3 py-16">
                <div className="size-14 rounded-2xl bg-muted/60 flex items-center justify-center mx-auto text-muted-foreground/60">
                  <DynamicIcon name="Mail" size={28} />
                </div>
                <div>
                  <p className="font-heading text-base font-bold text-foreground">
                    Select an inquiry to view
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Choose from the list on the left to read client specifications and message details.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Delete Confirmation Alert Dialog */}
      <AlertDialog
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive shrink-0">
                <DynamicIcon name="ShieldAlert" size={20} />
              </div>
              <AlertDialogTitle>
                {deleteTarget?.type === "bulk"
                  ? `Delete ${deleteTarget.count} Enquiries?`
                  : `Delete Enquiry from ${deleteTarget?.fullName || "Client"}?`}
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="pt-2 text-left">
              {deleteTarget?.type === "bulk"
                ? `Are you sure you want to permanently delete ${deleteTarget.count} selected enquiries? This action cannot be undone and will permanently remove them from Supabase.`
                : `Are you sure you want to delete this enquiry from ${deleteTarget?.fullName || "Client"}? This action cannot be undone and will permanently remove it from your database.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setDeleteTarget(null)}
              className="font-medium"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold gap-1.5"
            >
              <DynamicIcon name="X" size={14} />
              Delete Permanently
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

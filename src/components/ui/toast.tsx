"use client"

import * as React from "react"
import { DynamicIcon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export type ToastType = "default" | "success" | "error" | "info"

export interface ToastItem {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
}

type ToastListener = (toasts: ToastItem[]) => void

let toasts: ToastItem[] = []
const listeners: Set<ToastListener> = new Set()

function emit() {
  listeners.forEach((listener) => listener([...toasts]))
}

export const toast = {
  show(title: string, description?: string, type: ToastType = "default", duration = 4500) {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    const newToast: ToastItem = { id, title, description, type, duration }
    toasts = [...toasts, newToast]
    emit()

    if (duration > 0) {
      setTimeout(() => {
        toast.dismiss(id)
      }, duration)
    }

    return id
  },

  success(title: string, description?: string, duration = 4500) {
    return toast.show(title, description, "success", duration)
  },

  error(title: string, description?: string, duration = 5000) {
    return toast.show(title, description, "error", duration)
  },

  info(title: string, description?: string, duration = 4500) {
    return toast.show(title, description, "info", duration)
  },

  dismiss(id: string) {
    toasts = toasts.filter((t) => t.id !== id)
    emit()
  },

  clear() {
    toasts = []
    emit()
  },
}

export function Toaster() {
  const [activeToasts, setActiveToasts] = React.useState<ToastItem[]>([])

  React.useEffect(() => {
    const handleUpdate = (updated: ToastItem[]) => setActiveToasts(updated)
    listeners.add(handleUpdate)
    return () => {
      listeners.delete(handleUpdate)
    }
  }, [])

  if (activeToasts.length === 0) return null

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm sm:max-w-md w-full pointer-events-none px-4"
    >
      {activeToasts.map((item) => {
        const isSuccess = item.type === "success"
        const isError = item.type === "error"

        return (
          <div
            key={item.id}
            role="status"
            className={cn(
              "pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in-0",
              isSuccess && "bg-card/95 border-emerald-500/40 text-foreground",
              isError && "bg-card/95 border-destructive/40 text-foreground",
              !isSuccess && !isError && "bg-card/95 border-border text-foreground"
            )}
          >
            <div
              className={cn(
                "size-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                isSuccess && "bg-emerald-500/15 text-emerald-500",
                isError && "bg-destructive/15 text-destructive",
                !isSuccess && !isError && "bg-primary/15 text-primary"
              )}
            >
              <DynamicIcon
                name={isSuccess ? "CheckCircle2" : isError ? "ShieldAlert" : "Sparkles"}
                size={18}
              />
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <h4 className="text-sm font-semibold tracking-tight text-foreground">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => toast.dismiss(item.id)}
              aria-label="Dismiss notification"
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
            >
              <DynamicIcon name="X" size={14} />
            </button>
          </div>
        )
      })}
    </div>
  )
}

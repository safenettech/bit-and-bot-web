"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" className="size-9 opacity-0">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="size-9 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
    >
      <DynamicIcon name={isDark ? "Sun" : "Moon"} size={18} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

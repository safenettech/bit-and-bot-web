"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { headerNavigation } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({
    Services: true,
  })
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = React.useState(pathname)

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpen(false)
  }

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="text-foreground hover:bg-muted"
          >
            <DynamicIcon name="Menu" size={22} />
          </Button>
        </DrawerTrigger>

        <DrawerContent direction="right">
          {/* Drawer Header */}
          <DrawerHeader className="flex flex-row items-center justify-between space-y-0 p-5">
            <DrawerTitle asChild>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                  <DynamicIcon name="Bot" size={18} />
                </div>
                <span>
                  Bit<span className="text-primary font-black mx-0.5">&</span>Bot
                </span>
              </Link>
            </DrawerTitle>

            <DrawerClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="size-8 rounded-lg text-foreground hover:bg-muted"
              >
                <DynamicIcon name="X" size={20} />
              </Button>
            </DrawerClose>
          </DrawerHeader>

          {/* Drawer Body - Navigation Items */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
              Navigation
            </p>
            <nav className="flex flex-col space-y-1">
              {headerNavigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href + "/"))
                const hasChildren = Boolean(item.children && item.children.length > 0)
                const isExpanded = Boolean(expandedItems[item.title])

                if (hasChildren) {
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border/50 bg-muted/20 overflow-hidden mb-2"
                    >
                      <div className="flex items-center justify-between px-3 py-2.5">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "text-base font-semibold transition-colors flex-1",
                            isActive
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          )}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.title)}
                          aria-label={`Toggle ${item.title} submenu`}
                          className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          <DynamicIcon
                            name="ChevronRight"
                            size={16}
                            className={cn(
                              "transition-transform duration-200",
                              isExpanded ? "rotate-90" : "rotate-0"
                            )}
                          />
                        </button>
                      </div>

                      {isExpanded && item.children && (
                        <div className="px-3 pb-2 pt-1 border-t border-border/40 flex flex-col space-y-1 bg-background/50">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors",
                                  isChildActive
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                              >
                                <span className="size-1.5 rounded-full bg-primary/60 shrink-0" />
                                <span>{child.title}</span>
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    )}
                  >
                    <span>{item.title}</span>
                    <DynamicIcon
                      name="ChevronRight"
                      size={14}
                      className={isActive ? "text-primary" : "text-muted-foreground/60"}
                    />
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Drawer Footer */}
          <DrawerFooter className="p-5">
            <Button asChild size="lg" className="w-full font-semibold shadow-md">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Start a Project
                <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
            <div className="flex flex-col items-center justify-center text-center mt-2">
              <a
                href="mailto:hello@bitandbot.com"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                hello@bitandbot.com
              </a>
              <span className="text-[11px] text-muted-foreground/70 mt-0.5">
                Available for new projects worldwide
              </span>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { headerNavigation } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = React.useState(pathname)

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setIsOpen(false)
  }

  // Prevent scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-50 text-foreground"
      >
        <DynamicIcon name={isOpen ? "X" : "Menu"} size={22} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 animate-in fade-in-0 duration-200">
          <nav className="flex flex-col space-y-4 overflow-y-auto pr-2">
            {headerNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <div key={item.title} className="flex flex-col space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-semibold tracking-tight transition-colors py-1",
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.title}
                  </Link>

                  {item.children && (
                    <div className="pl-4 flex flex-col space-y-2 border-l border-border/60">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-sm transition-colors py-1",
                            pathname === child.href
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
            <Button asChild size="lg" className="w-full font-semibold shadow-md">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Start a Project
                <DynamicIcon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              hello@bitandbot.com • Available Worldwide
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

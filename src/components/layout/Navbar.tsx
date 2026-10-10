import Link from "next/link"
import { headerNavigation } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { DynamicIcon } from "@/components/ui/icon"
import { MobileNav } from "@/components/layout/MobileNav"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <DynamicIcon name="Bot" size={20} />
          </div>
          <span className="flex items-center tracking-tight">
            Bit<span className="text-primary font-black mx-0.5">&</span>Bot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {headerNavigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0
            if (hasChildren) {
              return (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg transition-colors group-hover:text-primary"
                  >
                    {item.title}
                    <DynamicIcon
                      name="ChevronRight"
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-90 text-muted-foreground"
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-72 z-50 animate-in fade-in-0 duration-150">
                    <div className="rounded-2xl border border-border/80 bg-popover/95 p-2 shadow-xl backdrop-blur-md">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col rounded-xl p-2.5 hover:bg-accent hover:text-accent-foreground transition-colors group/child"
                        >
                          <span className="text-sm font-semibold text-foreground group-hover/child:text-primary">
                            {child.title}
                          </span>
                          {child.description && (
                            <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:text-primary rounded-lg transition-colors"
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Button asChild size="sm" className="hidden sm:inline-flex font-semibold shadow-sm">
            <Link href="/contact">
              Start a Project
              <DynamicIcon name="ArrowRight" size={14} className="ml-1" />
            </Link>
          </Button>

          {/* Mobile Navigation Trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

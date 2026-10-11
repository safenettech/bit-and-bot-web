import Link from "next/link"
import { footerNavigation, socialLinks } from "@/data/navigation"
import { DynamicIcon } from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-12">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight text-foreground hover:opacity-90"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <DynamicIcon name="Bot" size={20} />
              </div>
              <span>
                Bit<span className="text-primary font-black mx-0.5">&</span>Bot
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              We design, architect, and engineer scalable web applications, mobile platforms, and intelligent AI systems for forward-thinking enterprises.
            </p>

            {/* <div className="flex items-center gap-2 pt-2">
              <Badge variant="outline" size="sm" className="gap-1.5 py-1">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Q2 & Q3 Engagements
              </Badge>
            </div> */}

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="size-9 rounded-xl border border-border/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-background transition-colors"
                >
                  <DynamicIcon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Link Columns */}
          {footerNavigation.map((group) => (
            <div key={group.title} className="flex flex-col space-y-3">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground/90">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bit and Bot Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Crafted with Next.js, TypeScript & Tailwind CSS</span>
            <span className="hidden sm:inline-block">•</span>
            <Link href="mailto:bitandbot1@gmail.com" className="hover:text-foreground transition-colors">
              bitandbot1@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

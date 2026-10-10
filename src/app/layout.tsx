import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Bit & Bot | Digital Product Engineering & AI Studio",
  description:
    "We design, build, and deploy production-grade web applications, mobile platforms, and autonomous AI systems for forward-thinking companies.",
  keywords: [
    "Web Development",
    "Mobile Apps",
    "Next.js",
    "React Native",
    "AI Agents",
    "Cloud Architecture",
    "Custom Software",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans")}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

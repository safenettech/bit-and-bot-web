import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps {
  badge?: string
  title: string | React.ReactNode
  description?: string | React.ReactNode
  align?: "left" | "center" | "right"
  size?: "sm" | "default" | "lg"
  className?: string
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  size = "default",
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align]

  const titleSizes = {
    sm: "text-2xl sm:text-3xl font-bold tracking-tight",
    default: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
    lg: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
  }[size]

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClass, className)}>
      {badge && (
        <Badge variant="glow" size="default" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className={cn("text-foreground font-heading", titleSizes)}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

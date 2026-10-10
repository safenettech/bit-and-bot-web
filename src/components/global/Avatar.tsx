import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback: string
  size?: "sm" | "default" | "lg"
  status?: "online" | "busy" | "offline"
}

export function Avatar({
  src,
  alt = "User Avatar",
  fallback,
  size = "default",
  status,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  const sizeClasses = {
    sm: "size-8 text-xs",
    default: "size-10 text-sm",
    lg: "size-12 text-base",
  }[size]

  const statusSize = {
    sm: "size-2",
    default: "size-2.5",
    lg: "size-3",
  }[size]

  const statusColor = {
    online: "bg-emerald-500",
    busy: "bg-amber-500",
    offline: "bg-muted-foreground",
  }[status ?? "online"]

  return (
    <div className={cn("relative inline-block shrink-0", className)} {...props}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full border border-border/80 bg-muted/60 font-semibold text-foreground overflow-hidden select-none",
          sizeClasses
        )}
      >
        {src && !imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="size-full object-cover"
          />
        ) : (
          <span>{fallback}</span>
        )}
      </div>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            statusSize,
            statusColor
          )}
        />
      )}
    </div>
  )
}

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground border border-border/50 hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive border border-destructive/20",
        outline:
          "border border-border text-foreground hover:bg-accent hover:text-accent-foreground",
        glow:
          "bg-primary/15 text-primary border border-primary/30 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]",
      },
      size: {
        sm: "px-2 py-0.5 text-[0.7rem]",
        default: "px-2.5 py-1 text-xs",
        lg: "px-3.5 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { badgeVariants }

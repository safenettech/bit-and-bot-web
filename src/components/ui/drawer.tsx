"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer"
import { cn } from "@/lib/utils"

const Drawer = ({
  swipeDirection = "right",
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root swipeDirection={swipeDirection} {...props} />
)
Drawer.displayName = "Drawer"

export interface DrawerTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger> {
  asChild?: boolean
}

const DrawerTrigger = React.forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  ({ asChild, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return (
        <DrawerPrimitive.Trigger
          ref={ref}
          render={children as React.ReactElement}
          {...props}
        />
      )
    }
    return (
      <DrawerPrimitive.Trigger ref={ref} {...props}>
        {children}
      </DrawerPrimitive.Trigger>
    )
  }
)
DrawerTrigger.displayName = "DrawerTrigger"

const DrawerPortal = DrawerPrimitive.Portal

export interface DrawerCloseProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close> {
  asChild?: boolean
}

const DrawerClose = React.forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ asChild, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return (
        <DrawerPrimitive.Close
          ref={ref}
          render={children as React.ReactElement}
          {...props}
        />
      )
    }
    return (
      <DrawerPrimitive.Close ref={ref} {...props}>
        {children}
      </DrawerPrimitive.Close>
    )
  }
)
DrawerClose.displayName = "DrawerClose"

const DrawerBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0 data-[closed]:opacity-0",
      className
    )}
    {...props}
  />
))
DrawerBackdrop.displayName = "DrawerBackdrop"

const DrawerOverlay = DrawerBackdrop

const DrawerContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Popup> & {
    direction?: "left" | "right" | "top" | "bottom"
  }
>(({ className, children, direction = "right", ...props }, ref) => (
  <DrawerPortal>
    <DrawerBackdrop />
    <DrawerPrimitive.Viewport
      className={cn(
        "fixed inset-0 z-50 flex pointer-events-none",
        direction === "right" && "items-stretch justify-end",
        direction === "left" && "items-stretch justify-start",
        direction === "bottom" && "items-end justify-center",
        direction === "top" && "items-start justify-center"
      )}
    >
      <DrawerPrimitive.Popup
        ref={ref}
        className={cn(
          "pointer-events-auto bg-background text-foreground shadow-2xl outline-none transition-transform duration-300 ease-out flex flex-col h-full",
          direction === "right" &&
            "w-[320px] sm:w-[360px] max-w-[85vw] border-l border-border [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-starting-style:translate-x-full data-ending-style:translate-x-full data-[closed]:translate-x-full",
          direction === "left" &&
            "w-[320px] sm:w-[360px] max-w-[85vw] border-r border-border [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-starting-style:-translate-x-full data-ending-style:-translate-x-full data-[closed]:-translate-x-full",
          direction === "bottom" &&
            "w-full max-h-[85vh] rounded-t-2xl border-t border-border [transform:translateY(var(--drawer-swipe-movement-y,0px))] data-starting-style:translate-y-full data-ending-style:translate-y-full data-[closed]:translate-y-full",
          direction === "top" &&
            "w-full max-h-[85vh] rounded-b-2xl border-b border-border [transform:translateY(var(--drawer-swipe-movement-y,0px))] data-starting-style:-translate-y-full data-ending-style:-translate-y-full data-[closed]:-translate-y-full",
          className
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Popup>
    </DrawerPrimitive.Viewport>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-5 border-b border-border", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-5 border-t border-border bg-muted/20", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

export interface DrawerTitleProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {
  asChild?: boolean
}

const DrawerTitle = React.forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ asChild, children, className, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return (
        <DrawerPrimitive.Title
          ref={ref}
          render={children as React.ReactElement}
          className={cn("text-lg font-bold leading-none tracking-tight text-foreground font-heading", className)}
          {...props}
        />
      )
    }
    return (
      <DrawerPrimitive.Title
        ref={ref}
        className={cn("text-lg font-bold leading-none tracking-tight text-foreground font-heading", className)}
        {...props}
      >
        {children}
      </DrawerPrimitive.Title>
    )
  }
)
DrawerTitle.displayName = "DrawerTitle"

export interface DrawerDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> {
  asChild?: boolean
}

const DrawerDescription = React.forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ asChild, children, className, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return (
        <DrawerPrimitive.Description
          ref={ref}
          render={children as React.ReactElement}
          className={cn("text-sm text-muted-foreground", className)}
          {...props}
        />
      )
    }
    return (
      <DrawerPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      >
        {children}
      </DrawerPrimitive.Description>
    )
  }
)
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

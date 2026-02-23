import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-cinzel transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sacred disabled:pointer-events-none disabled:opacity-50 tracking-widest",
  {
    variants: {
      variant: {
        default: "bg-sacred text-void hover:bg-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        outline: "border border-sacred bg-transparent text-sacred hover:bg-sacred/10",
        ghost: "hover:bg-sacred/10 text-cyan",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-14 rounded-md px-10 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

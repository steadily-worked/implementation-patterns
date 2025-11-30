import type { ButtonHTMLAttributes } from "react"
import { cn } from "../utils"

type ToggleButtonSize = "sm" | "md" | "lg"

const SIZE_CLASSES: Record<ToggleButtonSize, string> = {
  sm: "text-sm px-3 py-1.5 h-8",
  md: "text-base px-4 py-2 h-10",
  lg: "text-lg px-5 py-2.5 h-12",
}

export interface ToggleButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  pressed: boolean
  onChange?: (pressed: boolean) => void
  size?: ToggleButtonSize
}

export const ToggleButton = function ToggleButton({
  pressed,
  onChange,
  size = "md",
  disabled,
  className,
  onClick,
  ref,
  ...props
}: ToggleButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    if (!e.defaultPrevented) {
      onChange?.(!pressed)
    }
  }

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md border transition-colors"
  const sizeClasses = SIZE_CLASSES[size]
  const pressedClasses = pressed
    ? "bg-blue-500 text-white border-blue-500"
    : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-50"
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"

  const combinedClasses = cn(baseClasses, sizeClasses, pressedClasses, stateClasses, className)

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={pressed}
      disabled={disabled}
      onClick={handleClick}
      className={combinedClasses}
      {...props}
    />
  )
}

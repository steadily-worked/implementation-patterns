import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

type IconButtonVariant = "solid" | "outline" | "ghost";
type IconButtonSize = "xs" | "sm" | "md" | "lg";

const SIZE_CLASSES: Record<IconButtonSize, string> = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
};

const VARIANT_CLASSES: Record<IconButtonVariant, string> = {
  solid: "bg-blue-500 text-white hover:bg-blue-600",
  outline: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50",
  ghost: "bg-transparent text-blue-500 hover:bg-blue-50",
};

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  isRound?: boolean;
  "aria-label": string;
}

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  isRound,
  disabled,
  className,
  ref,
  ...props
}: IconButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const baseClasses = "inline-flex items-center justify-center transition-colors";
  const sizeClasses = SIZE_CLASSES[size];
  const variantClasses = VARIANT_CLASSES[variant];
  const shapeClasses = isRound ? "rounded-full" : "rounded-md";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";

  const combinedClasses = cn(baseClasses, sizeClasses, variantClasses, shapeClasses, stateClasses, className)

  return (
    <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
      {icon}
    </button>
  );
};

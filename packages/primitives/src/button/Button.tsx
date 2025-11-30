import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

type ButtonVariant = "solid" | "outline" | "ghost" | "link";
type ButtonSize = "xs" | "sm" | "md" | "lg";

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "text-xs px-2 py-1 h-6",
  sm: "text-sm px-3 py-1.5 h-8",
  md: "text-base px-4 py-2 h-10",
  lg: "text-lg px-5 py-2.5 h-12",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  solid: "bg-blue-500 text-white border border-transparent hover:bg-blue-600",
  outline: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50",
  ghost: "bg-transparent text-blue-500 border border-transparent hover:bg-blue-50",
  link: "bg-transparent text-blue-500 border-none underline hover:text-blue-600 px-0 h-auto",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  variant = "solid",
  size = "md",
  fullWidth,
  loading,
  leftIcon,
  rightIcon,
  disabled,
  className,
  children,
  ref,
  ...props
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const isDisabled = disabled || loading;

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors";
  const sizeClasses = VARIANT_CLASSES[variant].includes("px-0") ? "" : SIZE_CLASSES[size];
  const variantClasses = VARIANT_CLASSES[variant];
  const stateClasses = isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  const widthClasses = fullWidth ? "w-full" : "";

  const combinedClasses = cn(
    baseClasses,
    sizeClasses,
    variantClasses,
    stateClasses,
    widthClasses,
    className,
  )

  return (
    <button ref={ref} disabled={isDisabled} className={combinedClasses} {...props}>
      {loading ? <LoadingSpinner /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
};

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label="Loading"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.4 31.4"
      />
    </svg>
  );
}

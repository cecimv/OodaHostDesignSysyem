import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonAnimation = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

type ButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", disabled = false, size = "md", variant = "primary", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full";
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base", 
      lg: "px-6 py-3 text-lg",
    };

    const variantClasses = {
      primary: "bg-[var(--color-white)] text-[var(--color-dark-black)] hover:opacity-90 focus:ring-[var(--color-white)] active:opacity-80",
      secondary: "bg-[var(--color-dark-gray)] text-[var(--color-white)] hover:opacity-90 focus:ring-[var(--color-dark-gray)] active:opacity-80",
      ghost: "bg-transparent text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-dark-black)] focus:ring-[var(--color-white)] active:bg-[var(--color-medium-gray)] active:text-[var(--color-dark-black)] transition-all duration-200",
      outline: "bg-transparent border-4 border-[var(--color-green)] text-[var(--color-green)] shadow-[0_0_0_1px_var(--color-green)] hover:bg-[var(--color-green)] hover:text-white focus:ring-[var(--color-green)] active:bg-[var(--color-green-dark)]" }

    const disabledClasses = "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-current";

    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? {} : buttonAnimation}
        whileTap={disabled ? {} : { scale: 0.95 }}
        className={`
          ${baseClasses}
          ${sizeClasses[size]} 
          ${variantClasses[variant]} 
          ${disabledClasses}
          ${className}
        `}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
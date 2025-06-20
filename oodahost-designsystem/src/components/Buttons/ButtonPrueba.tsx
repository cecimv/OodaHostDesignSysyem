import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
//import 'ButtonPrueba.css'

const buttonAnimation = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

type ButtonPruebaProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

export const ButtonPrueba = React.forwardRef<HTMLButtonElement, ButtonPruebaProps>(
  ({ children, className = "", disabled = false, size = "md", variant = "primary", ...props }, ref) => {
    const baseClasses = "relative overflow-hidden rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base", 
      lg: "px-6 py-3 text-lg",
    };

    const variantClasses = {
      //primary: "bg-[--color-#46b592] text-[--color-#b8b8b8] hover:bg-emerald-600 focus:ring-emerald-500 active:bg-emerald-700",
      //primary: "bg-primary text-text-muted hover:bg-emerald-600 focus:ring-emerald-500 active:bg-emerald-700",
      //primary: "bg-[var(--color-primary)] text-[var(--color-text-muted)] hover:bg-blue-700 focus:ring-blue-500",
      //secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
      //secondary: "bg-customGray text-customText hover:opacity-90 focus:ring-2 focus:ring-customGray active:opacity-80 dark:opacity-90",
      //ghost: "bg-transparent text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 focus:ring-emerald-500 active:bg-emerald-100 dark:text-emerald-400 dark:hover:bg-emerald-950 dark:hover:text-emerald-300",
      
      primary: "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 focus:ring-[var(--btn-primary-bg)] active:opacity-80",
      secondary: "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] hover:opacity-90 focus:ring-[var(--btn-secondary-bg)] active:opacity-80",
      ghost: "bg-transparent text-[#b8b8b8] hover:bg-[#b8b8b8] hover:text-[#111110] focus:ring-[#b8b8b8] active:bg-[#a8a8a8] active:text-[#111110] transition-all duration-200",
      outline: "bg-transparent border-4 border-[#46b592] text-[#46b592] shadow-[0_0_0_1px_#46b592] hover:bg-[#46b592] hover:text-white focus:ring-[#46b592] active:bg-[#3da882]",
      //outline: "bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white focus:ring-emerald-500 active:bg-emerald-600 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-gray-900",
    };

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

ButtonPrueba.displayName = "ButtonPrueba";
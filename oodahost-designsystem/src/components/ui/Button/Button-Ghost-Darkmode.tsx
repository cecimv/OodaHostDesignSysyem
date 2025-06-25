import React, { useState } from "react";
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
  variant?: "primaryTextOnly" | "primaryLeftIcon" | "primaryRightIcon";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const ButtonGhostDarkmode = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftIcon, rightIcon, className = "", disabled = false, size = "md", variant = "primaryTextOnly", onClick, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full";
    
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base', 
        lg: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
        primaryTextOnly: isPressed && variant === "primaryTextOnly"
            ? "bg-[#B3B3B3] text-[#000000] focus:ring-[#E9FAF3]"
            : "bg-transparent text-[#FFFFFF] hover:bg-[#4B4B4B] focus:ring-[#E9FAF3]",
        primaryLeftIcon: isPressed && variant === "primaryLeftIcon"
            ? "bg-[#B3B3B3] text-[#000000] focus:ring-[#E9FAF3]"
            : "bg-transparent text-[#FFFFFF] hover:bg-[#4B4B4B] focus:ring-[#E9FAF3]",
        primaryRightIcon: isPressed && variant === "primaryRightIcon"
            ? "bg-[#B3B3B3] text-[#000000] focus:ring-[#E9FAF3]"
            : "bg-transparent text-[#FFFFFF] hover:bg-[#4B4B4B] focus:ring-[#E9FAF3]",
        }

        const disabledClasses = "disabled:bg-transparent disabled:text-[#4A4A4A] disabled:cursor-not-allowed";
        //const disabledClasses = "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-current disabled:before:bg-white";
        //const disabledClasses = "disabled:relative disabled:cursor-not-allowed disabled:before:content-[''] disabled:before:absolute disabled:before:inset-0 disabled:before:bg-white disabled:before:opacity-50 disabled:before:rounded-full";

        const primaryVariants = ["primaryTextOnly", "primaryLeftIcon", "primaryRightIcon"] as const;
    
        const isPrimaryVariant = primaryVariants.includes(variant);
        const canPress = isPrimaryVariant && !disabled;

        const handleMouseDown = () => {
        if (canPress) {
            setIsPressed(true);
        }
        };

        const handleMouseUp = () => {
        if (canPress) {
            setIsPressed(false);
        }
        };

        const handleMouseLeave = () => {
        if (canPress) {
            setIsPressed(false);
        }
        };

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
        onClick={onClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);

ButtonGhostDarkmode.displayName = "ButtonGhostDarkmode";
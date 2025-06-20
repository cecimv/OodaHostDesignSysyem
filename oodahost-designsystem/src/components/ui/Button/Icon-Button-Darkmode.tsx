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
  variant?: "primaryIconButton" | "outlineIconButton" | "ghostIconButton";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftIcon, rightIcon, className = "", disabled = false, size = "md", variant = "primaryIconButton", onClick, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full";
    
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base', 
        lg: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
        primaryIconButton: isPressed
            ? "bg-[#177D50] text-[#000000] focus:ring-[#E9FAF3]"
            : "bg-[#26D086] text-[#000000] focus:ring-[#E9FAF3]",
        outlineIconButton: isPressed
            ? "bg-transparent border-2 border-[#5AD99E] text-[#177D50]"
            : "bg-transparent border-2 border-[#B3B3B3] text-[#FFFFFF] hover:border-[#26D086] hover:text-[#26D086]",
        ghostIconButton: isPressed
            ? "bg-[#B3B3B3] text-[#000000] focus:ring-[#E9FAF3]"
            : "bg-transparent text-[#FFFFFF] hover:bg-[#4B4B4B] focus:ring-[#E9FAF3]",
    }

    const disabledClasses = {
      primaryIconButton: "disabled:bg-[#2D2D2D] disabled:text-[#A4A4A4] disabled:cursor-not-allowed",
      outlineIconButton: "disabled:bg-transparent disabled:border-[#B3B3B3] disabled:text-[#B3B3B3] disabled:cursor-not-allowed",
      ghostIconButton: "disabled:bg-transparent disabled:text-[#4A4A4A] disabled:cursor-not-allowed",
    };

    //const disabledClasses = "disabled:bg-[#7DE3B6] disabled:text-[#FFFFFF] disabled:cursor-not-allowed";
    
    const primaryVariants = ["primaryIconButton", "outlineIconButton", "ghostIconButton"] as const;
    
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
          ${disabledClasses[variant]}
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

Button.displayName = "Button";
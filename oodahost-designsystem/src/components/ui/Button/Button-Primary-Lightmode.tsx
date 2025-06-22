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

export const ButtonPrimaryLightmode = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftIcon, rightIcon, className = "", disabled = false, size = "md", variant = "primaryTextOnly", onClick, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    //const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full";
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full focus:outline-none";

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base', 
        lg: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
        primaryTextOnly: isPressed && variant === "primaryTextOnly"
            ? "bg-[#177D50] text-[#000000] focus:ring-[#E9FAF3] font-roboto"
            : "bg-primarycolor-900 text-[#000000] focus:ring-[#E9FAF3] font-roboto",
        primaryLeftIcon: isPressed && variant === "primaryLeftIcon"
            ? "bg-[#177D50] text-[#04150D] focus:ring-[#E9FAF3] font-roboto"
            : "bg-[#26D086] text-[#04150D] focus:ring-[#E9FAF3] font-roboto",
        primaryRightIcon: isPressed && variant === "primaryRightIcon"
            ? "bg-[#177D50] text-[#04150D] focus:ring-[#E9FAF3] font-roboto"
            : "bg-[#26D086] text-[#04150D] focus:ring-[#E9FAF3] font-roboto",
        }

        const disabledClasses = "disabled:bg-[#7DE3B6] disabled:text-[#FFFFFF] disabled:cursor-not-allowed";
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

        console.log('Variable test:', 
          window.getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-950')
        );
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
        //aria-label={props["aria-label"]}
        {...props}
      >
        {variant === "primaryLeftIcon" && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {variant === "primaryRightIcon" && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

ButtonPrimaryLightmode.displayName = "ButtonPrimaryLightmode";
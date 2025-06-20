import React, { useState, useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonAnimation = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

const focusClasses = "focus:outline-none focus:ring-2 focus:ring-offset-2";

type ButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primaryTextOnly"
    | "primaryLeftIcon"
    | "primaryRightIcon"
    | "outlineTextOnly"
    | "outlineLeftIcon"
    | "outlineRightIcon"
    | "ghostTextOnly"
    | "ghostLeftIcon"
    | "ghostRightIcon";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const ButtonLightmode = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leftIcon,
      rightIcon,
      className = "",
      disabled = false,
      size = "md",
      variant = "primaryTextOnly",
      onClick,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);

    const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full ${focusClasses}`;

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const variantClasses = useMemo(
      () => ({
        primaryTextOnly: isPressed
          ? "bg-[#177D50] text-black focus:ring-[#E9FAF3]"
          : "bg-[#26D086] text-black focus:ring-[#E9FAF3] hover:bg-[#1EA66B]",
        primaryLeftIcon: isPressed
          ? "bg-[#177D50] text-[#111110] focus:ring-[#E9FAF3]"
          : "bg-[#26D086] text-[#111110] focus:ring-[#E9FAF3] hover:bg-[#1EA66B]",
        primaryRightIcon: isPressed
          ? "bg-[#177D50] text-[#111110] focus:ring-[#E9FAF3]"
          : "bg-[#26D086] text-[#111110] focus:ring-[#E9FAF3] hover:bg-[#1EA66B]",
        outlineTextOnly: isPressed
          ? "bg-transparent border-2 border-[#177D50] text-[#177D50] focus:ring-[#E9FAF3]"
          : "bg-transparent border-2 border-[#A4A4A4] text-black hover:border-[#26D086] hover:text-[#26D086] focus:ring-[#E9FAF3]",
        outlineLeftIcon: isPressed
          ? "bg-transparent border-2 border-[#177D50] text-[#177D50] focus:ring-[#E9FAF3]"
          : "bg-transparent border-2 border-[#A4A4A4] text-black hover:border-[#26D086] hover:text-[#26D086] focus:ring-[#E9FAF3]",
        outlineRightIcon: isPressed
          ? "bg-transparent border-2 border-[#177D50] text-[#177D50] focus:ring-[#E9FAF3]"
          : "bg-transparent border-2 border-[#A4A4A4] text-black hover:border-[#26D086] hover:text-[#26D086] focus:ring-[#E9FAF3]",
        ghostTextOnly: isPressed
          ? "bg-[#C1C1C1] text-black focus:ring-[#E9FAF3]"
          : "bg-transparent text-black hover:bg-[#DFDFDF] focus:ring-[#E9FAF3]",
        ghostLeftIcon: isPressed
          ? "bg-[#C1C1C1] text-black focus:ring-[#E9FAF3]"
          : "bg-transparent text-black hover:bg-[#DFDFDF] focus:ring-[#E9FAF3]",
        ghostRightIcon: isPressed
          ? "bg-[#C1C1C1] text-black focus:ring-[#E9FAF3]"
          : "bg-transparent text-black hover:bg-[#DFDFDF] focus:ring-[#E9FAF3]",
      }),
      [isPressed]
    );

    const disabledClassesMap = {
      primary:
        "disabled:bg-[#7DE3B6] disabled:text-white disabled:cursor-not-allowed",
      outline:
        "disabled:bg-transparent disabled:border-[#D0D0D0] disabled:text-[#D0D0D0] disabled:cursor-not-allowed",
      ghost:
        "disabled:bg-transparent disabled:text-[#868686] disabled:cursor-not-allowed",
    };

    const disabledClasses = useMemo(() => {
      if (variant.startsWith("primary")) return disabledClassesMap.primary;
      if (variant.startsWith("outline")) return disabledClassesMap.outline;
      if (variant.startsWith("ghost")) return disabledClassesMap.ghost;
      return disabledClassesMap.primary;
    }, [variant]);

    const canPress = !disabled;

    const handleMouseDown = () => canPress && setIsPressed(true);
    const handleMouseUp = () => canPress && setIsPressed(false);
    const handleMouseLeave = () => canPress && setIsPressed(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? {} : buttonAnimation}
        whileTap={disabled ? {} : { scale: 0.95 }}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`.trim()}
        disabled={disabled}
        onClick={handleClick}
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

ButtonLightmode.displayName = "ButtonLightmode";

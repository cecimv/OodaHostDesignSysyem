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
  variant?: "primaryTextOnly" | "primaryLeftIcon" | "primaryRightIcon" | "outlineTextOnly" | "outlineLeftIcon" | "outlineRightIcon" | "ghostTextOnly" | "ghostLeftIcon" | "ghostRightIcon";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const ButtonLightmode = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftIcon, rightIcon, className = "", disabled = false, size = "md", variant = "primaryTextOnly", onClick, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    
    const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-full ${focusClasses}`;
    
    // Ajustar tamaños incluyendo espacio para iconos
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base', 
      lg: 'px-6 py-3 text-lg'
    };

    // Tamaños de iconos según el tamaño del botón
    const iconSizes = {
      sm: 14,
      md: 16,
      lg: 18
    };

    const variantClasses = useMemo(() => ({
      primaryTextOnly: isPressed 
        ? "bg-[#177D50] text-[#000000] focus:ring-[#E9FAF3] font-roboto"
        : "bg-[#26D086] text-[#000000] focus:ring-[#E9FAF3] font-roboto",
      primaryLeftIcon: isPressed
        ? "bg-[#177D50] text-[#04150D] focus:ring-[#E9FAF3] font-roboto"
        : "bg-[#26D086] text-[#04150D] focus:ring-[#E9FAF3] font-roboto",
      primaryRightIcon: isPressed
        ? "bg-[#177D50] text-[#04150D] focus:ring-[#E9FAF3] font-roboto"
        : "bg-[#26D086] text-[#04150D] focus:ring-[#E9FAF3] font-roboto",
      outlineTextOnly: isPressed
        ? "bg-transparent border-2 border-[#177D50] text-[#177D50]"
        : "bg-transparent border-2 border-[#A4A4A4] text-[#000000] hover:border-[#26D086] hover:text-[#26D086]",
      outlineLeftIcon: isPressed
        ? "bg-transparent border-2 border-[#177D50] text-[#177D50]"
        : "bg-transparent border-2 border-[#A4A4A4] text-[#000000] hover:border-[#26D086] hover:text-[#26D086]",
      outlineRightIcon: isPressed
        ? "bg-transparent border-2 border-[#177D50] text-[#177D50]"
        : "bg-transparent border-2 border-[#A4A4A4] text-[#000000] hover:border-[#26D086] hover:text-[#26D086]",
      ghostTextOnly: isPressed
        ? "bg-[#C1C1C1] text-[#000000] focus:ring-[#E9FAF3]"
        : "bg-transparent text-[#000000] hover:bg-[#DFDFDF] focus:ring-[#E9FAF3]",
      ghostLeftIcon: isPressed
        ? "bg-[#C1C1C1] text-[#000000] focus:ring-[#E9FAF3]"
        : "bg-transparent text-[#000000] hover:bg-[#DFDFDF] focus:ring-[#E9FAF3]",
      ghostRightIcon: isPressed
        ? "bg-[#C1C1C1] text-[#000000] focus:ring-[#E9FAF3]"
        : "bg-transparent text-[#000000] hover:bg-[#DFDFDF] focus:ring-[#E9FAF3]",
    }), [isPressed]);

    // Mapa de clases disabled por tipo de variante
    const disabledClassesMap = {
      primary: "disabled:bg-primary-200 disabled:text-white disabled:cursor-not-allowed",
      outline: "disabled:bg-transparent disabled:border-neutral-200 disabled:text-neutral-200 disabled:cursor-not-allowed",
      ghost: "disabled:bg-transparent disabled:text-neutral-600 disabled:cursor-not-allowed"
    };

    // Determinar tipo de variante y memoizar clases disabled
    const disabledClasses = useMemo(() => {
      if (variant.startsWith('primary')) return disabledClassesMap.primary;
      if (variant.startsWith('outline')) return disabledClassesMap.outline;
      if (variant.startsWith('ghost')) return disabledClassesMap.ghost;
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

    // Renderizar icono con el tamaño apropiado
    const renderIcon = (icon: React.ReactNode, position: 'left' | 'right') => {
      if (!icon) return null;
      
      // Si es un elemento React válido, clonarlo con el tamaño correcto
      if (React.isValidElement(icon)) {
        return React.cloneElement(icon as React.ReactElement<any>, { 
          size: iconSizes[size] 
        });
      }
      
      // Para otros tipos de iconos, envolverlos en un span
      return (
        <span 
          className="flex items-center justify-center"
          style={{ 
            width: iconSizes[size], 
            height: iconSizes[size] 
          }}
        >
          {icon}
        </span>
      );
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
        {leftIcon && (
          <span className={`${children ? 'mr-2' : ''} flex items-center`}>
            {renderIcon(leftIcon, 'left')}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className={`${children ? 'ml-2' : ''} flex items-center`}>
            {renderIcon(rightIcon, 'right')}
          </span>
        )}
      </motion.button>
    );
  }
);

ButtonLightmode.displayName = "ButtonLightmode";
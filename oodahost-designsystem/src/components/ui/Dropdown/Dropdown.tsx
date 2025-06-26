// Dropdown.tsx
import * as React from 'react';
import { useState } from 'react';

import { Ban } from "lucide-react";

export type Variant = "onlyText" | "leftIcon" | "rightIcon" | "leftRightIcon" | "avatarleft";

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  selected?: Option;
  onSelect?: (value: string) => void;
  variant?: Variant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  name?: string;
  
  size?: "sm" | "md" | "lg";
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select option",
  disabled = false,
  selected,
  onSelect,
  variant = "onlyText",
  leftIcon,
  rightIcon,
  name = "User",
  size = "md",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onSelect?.(option.value);
    setIsOpen(false);
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const avatarSizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const buttonSizeClass = sizeClasses[size];
  const avatarSize = avatarSizeClasses[size];

  return (
    <div className="relative w-64">
      <button
        className={`w-full border-4  border-white shadow-sm transition-all flex items-center hover:text-[#333333] hover:font-bold hover:bg-[#F5F4F2] font-roboto
            ${isOpen ? 'text-[#26D086] bg-[#E9FAF3] font-bold ' : 'bg-white'}
            ${disabled ? "opacity-50 cursor-not-allowed text-[#333333]" : " "}
            ${buttonSizeClass}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {/* Avatar o icono izquierdo */}
        {variant === "avatarleft" ? (
          <div className="flex items-center flex-shrink-0 min-w-[40px] justify-center font-roboto">
            
            {disabled ? (
              <AvatarDisabledWithBadge name={name} size={avatarSize} />
            ) : (
              <div className={`rounded-full border-2 border-green-500 overflow-hidden ${avatarSize} `}>
                {leftIcon}
              </div>
            )}
          </div>
        ) : (
          ["leftIcon", "leftRightIcon"].includes(variant) && leftIcon && (
            <div className="flex items-center flex-shrink-0 min-w-[40px] justify-center">
              {leftIcon}
            </div>
          )
        )}

        {/* Texto */}
        <div className="flex-1 flex justify-start items-center overflow-hidden pr-4">
          <span className="truncate">{selected ? selected.label : placeholder}</span>
        </div>

        {/* Icono derecho */}
        {["rightIcon", "leftRightIcon"].includes(variant) && rightIcon && (
          <div className="flex items-center flex-shrink-0 min-w-[40px] justify-center text-[#333333]">
            {rightIcon}
          </div>
        )}
      </button>

      {isOpen && !disabled && (
        <ul className="absolute z-10 mt-2 w-full border border-gray-300 bg-white shadow-md overflow-hidden rounded-md max-h-60 overflow-y-auto ">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer transition flex items-center gap-2 "
            >
              {option.icon && <span className="w-6 h-6 flex items-center justify-center">{option.icon}</span>}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AvatarDisabledWithBadge: React.FC<{ name: string; size: string }> = ({ name, size }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`relative rounded-full bg-gray-700 text-white flex items-center justify-center font-semibold select-none border-2 border-gray-400 ${size}`}>
      {initials}
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-700">
        <Ban size={12} color="white" strokeWidth={3} />
      </div>
    </div>
  );
};
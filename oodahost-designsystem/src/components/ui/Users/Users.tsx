import React from "react";
import { Ban } from "lucide-react";

interface UsersProps {
  placeholder?: string;
  Icon?: React.ReactNode;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean; // ✅ AÑADIDO
}

export const Users: React.FC<UsersProps> = ({
  name = "User",
  size = "md",
  Icon,
  disabled = false, // ✅ AÑADIDO
}) => {
  const usersSizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-[72px] h-[72px]",
  };

  const usersSize = usersSizeClasses[size];

  return (
    <div className="flex items-center">
      {Icon ? (
        <div
          className={`mr-2 relative rounded-full flex justify-center items-center overflow-hidden border-2 border-green-500 ${usersSize}`}
        >
          {Icon}
        </div>
      ) : (
        <UsersNamed name={name} size={size} disabled={disabled} />
      )}
    </div>
  );
};

interface UsersNamedProps {
  name: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean; // ✅ AÑADIDO
}

const UsersNamed: React.FC<UsersNamedProps> = ({
  name,
  size,
  disabled = false,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const sizeClasses = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-lg",
    xl: "w-[72px] h-[72px] text-2xl",
  };

  const badgeSizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  const iconSizeValues = {
    xs: 10,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
  };

  return (
    <div
      className={`relative rounded-full flex items-center justify-center font-semibold select-none border-2 leading-none ${sizeClasses[size]} ${
        disabled
          ? "bg-gray-700 text-white border-gray-700"
          : "bg-[#1EA66B] text-black border-[#26D086]"
      }`}
    >
      {initials}
      {disabled && (
        <div
          className={`absolute bottom-0 right-0 rounded-full flex items-center justify-center border-2 border-gray-700 bg-gray-700 ${badgeSizeClasses[size]} rotate-85`}
        >
          <Ban size={iconSizeValues[size]} color="white" strokeWidth={3} />
        </div>
      )}
    </div>
  );
};

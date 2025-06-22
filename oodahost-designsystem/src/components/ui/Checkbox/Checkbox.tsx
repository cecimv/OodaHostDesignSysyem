import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  defaultChecked?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  defaultChecked = false,
  className = '',
  disabled = false,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <label
          htmlFor={id}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => !disabled && setIsHovered(false)}
          className={`
            flex items-center justify-center
            w-6 h-6 rounded-sm border-2 
            transition-colors duration-100
            focus-within:ring-2 focus-within:ring-emerald-500
            ${className}
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            ${disabled ? 'border-gray-200' : isChecked ? 'border-[#10B981]' : 'border-gray-300'}
            ${disabled ? 'bg-gray-100' : isChecked ? 'bg-[#10B981]' : 'bg-white'}
            ${!disabled && isChecked ? 'hover:bg-white' : ''}
            ${!disabled ? 'hover:border-[#10B981]' : ''}
          `}
        >
          {/* Cuando está marcado y NO hay hover: palomita */}
          {isChecked && !isHovered && (
            <Check className={`w-4 h-4 ${disabled ? 'text-gray-400' : 'text-white'}`} strokeWidth="2.5" />
          )}

          {/* Cuando está marcado y hay hover: cuadrado verde sólido (sin palomita) */}
          {isChecked && isHovered && !disabled && (
            <div className="w-3 h-3 bg-[#10B981]"></div>
          )}
        </label>
      </div>
      <label
        htmlFor={id}
        className={`text-sm ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800 cursor-pointer'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
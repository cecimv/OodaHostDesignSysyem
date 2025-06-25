// components/ui/Input/Input-Basic.tsx
import React, { useState } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';

type InputProps = {
  label: string;
  error?: string;
  variant?: 'basic' | 'search' | 'dark';
  isPressed?: boolean;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  showClearButton?: boolean;
  hideLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'basic',
  isPressed,
  onLeftIconClick,
  onRightIconClick,
  showClearButton = true,
  value,
  onChange,
  id,
  hideLabel = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState('');
  const inputId = id ?? `input-${Math.random().toString(36).substring(2, 9)}`;
  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = currentValue && currentValue.toString().length > 0;
  const isTextType = props.type === 'text' || props.type === undefined;
  const isSearchVariant = variant === 'search';
  const isBasicVariant = variant === 'basic';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const handleClear = () => {
    if (onChange) {
      const event = {
        target: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    } else {
      setInternalValue('');
    }
  };

  const getInputClasses = () => {
    const baseClasses =
      'w-full py-2 border transition-colors duration-200 focus:outline-none focus:ring-2';

    if (isBasicVariant) {
      return `${baseClasses} px-4 rounded-md focus:ring-white focus:border-[#177D50] hover:bg-neutral-100 hover:border-2 hover:border-[#26D086] ${
        isPressed ? 'bg-green-100' : 'bg-white'
      } ${error ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'} text-neutral-700`;
    }

    const paddingLeft = 'pl-10';
    const paddingRight = hasValue && showClearButton && isTextType ? 'pr-16' : 'pr-10';

    return `${baseClasses} ${paddingLeft} ${paddingRight} rounded-md focus:ring-white focus:border-[#177D50] hover:bg-neutral-100 hover:border-2 hover:border-[#26D086] ${
      isPressed ? 'bg-green-100' : 'bg-white'
    } ${error ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'} text-neutral-700`;
  };

  const sharedProps = {
    id: inputId,
    className: getInputClasses(),
    value: currentValue,
    onChange: handleChange,
    'aria-label': hideLabel ? label : undefined,
    min: props.type === 'number' && props.min === undefined ? 0 : props.min,
    ...props
  };

  return (
    <div className="mb-4">
      {!hideLabel && (
        <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Icono de búsqueda (izquierda) */}
        {isSearchVariant && (
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
            onClick={onLeftIconClick}
          >
            <Search 
              className="size-5 text-gray-400 hover:text-gray-600 transition-colors" 
              strokeWidth={2}
            />
          </div>
        )}

        <input {...sharedProps} />

        {/* Botón de limpiar (X) */}
        {isSearchVariant && hasValue && showClearButton && isTextType && (
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10 bg-gray-400 hover:bg-gray-500 rounded-full p-1.5 transition-colors"
            onClick={handleClear}
          >
            <X 
              className="size-3 text-white" 
              strokeWidth={2.5}
            />
          </div>
        )}

        {/* Icono de chevron (derecha) */}
        {isSearchVariant && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
            onClick={onRightIconClick}
          >
            <ChevronRight 
              className="size-5 text-gray-400 hover:text-gray-600 transition-colors" 
              strokeWidth={2}
            />
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

Input.displayName = 'Input';
import React, { useState } from 'react';

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
      } ${error ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'} text-neutral-700 ${
        props.type === 'number' ? 'input-hide-spinner' : ''
      }`;
    }

    const paddingLeft = 'pl-10';
    const paddingRight = hasValue && showClearButton && isTextType ? 'pr-16' : 'pr-10';

    return `${baseClasses} ${paddingLeft} ${paddingRight} rounded-md focus:ring-white focus:border-[#177D50] hover:bg-neutral-100 hover:border-2 hover:border-[#26D086] ${
      isPressed ? 'bg-green-100' : 'bg-white'
    } ${error ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'} text-neutral-700 ${
      props.type === 'number' ? 'input-hide-spinner' : ''
    }`;
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
        {isSearchVariant && (
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
            onClick={onLeftIconClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        )}

        <input {...sharedProps} />

        {isSearchVariant && hasValue && showClearButton && isTextType && (
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10 bg-gray-400 hover:bg-gray-500 rounded-full p-1.5 transition-colors"
            onClick={handleClear}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}

        {isSearchVariant && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
            onClick={onRightIconClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

Input.displayName = 'Input';

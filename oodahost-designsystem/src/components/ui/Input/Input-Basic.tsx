import React, { useState } from 'react';

type InputProps = {
  label: string;
  error?: string;
  isPressed?: boolean;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  showClearButton?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  isPressed,
  onLeftIconClick,
  onRightIconClick,
  showClearButton = true,
  value,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState('');
  
  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = currentValue && currentValue.toString().length > 0;
  const isTextType = props.type === 'text' || props.type === undefined;

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

  const inputClasses = `
  w-full px-10 py-2 border rounded-md
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-white focus:border-[#177D50]
  hover:bg-neutral-100 hover:border-2 hover:border-[#26D086]
  ${isPressed ? 'bg-green-100' : 'bg-white'}
  ${error ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}
  text-neutral-700
  ${hasValue && showClearButton && isTextType ? 'pr-16' : 'pr-10'}
  ${props.type === 'number' ? 'input-hide-spinner' : ''}
`;


  return (
    <div className="mb-4">
      <div className="relative">
        {/* Ícono izquierda */}
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

        {/* Input */}
        <input 
          className={inputClasses}
          value={currentValue}
          onChange={handleChange}
          min={props.type === 'number' && props.min === undefined ? 0 : props.min}
          {...props}
        />

        {/* Botón Clear (solo si es tipo text) */}
        {hasValue && showClearButton && isTextType && (
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}

        {/* Ícono derecha */}
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
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

Input.displayName = 'Input';

import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  showText?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  showText = false,
}) => {
  const widthClass = showText ? 'w-14' : 'w-11';
  const text = checked ? 'ON' : 'OFF';
  const translateClass = checked
    ? showText
      ? 'translate-x-8'
      : 'translate-x-5'
    : 'translate-x-0';

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      {label && <span className="text-sm">{label}</span>}
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative ${widthClass} h-6 rounded-full transition-colors duration-300 flex items-center px-1 text-xs font-medium
          ${checked ? 'bg-[#25D086]' : 'bg-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-white'}
          `}
      >
        {showText && (
          <>
            <span
              className={`
                absolute left-2 text-white text-xs font-semibold z-10 transition-opacity duration-200
                ${checked ? 'opacity-100' : 'opacity-0'}
              `}
            >
              ON
            </span>
            <span
              className={`
                absolute right-2 text-white text-xs font-semibold z-10 transition-opacity duration-200
                ${!checked ? 'opacity-100' : 'opacity-0'}
              `}
            >
              OFF
            </span>
          </>
        )}
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${translateClass}`}
        />
      </button>
    </label>
  );
};

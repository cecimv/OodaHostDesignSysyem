import React, { useId } from "react";

interface RadioButtonProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  name?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  checked,
  onChange,
  disabled = false,
  name,
}) => {
  const id = useId();
  const radioName = name || `radio-${id}`;
  const inputId = `radio-${radioName}-${value}`;

  return (
    <div
      className={`inline-flex items-center gap-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="radio"
        id={inputId}
        className="sr-only"
        name={radioName}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
      />
      <label htmlFor={inputId} className="inline-flex items-center gap-2">
      <span
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors hover:border-[#177D50]
          ${
            disabled
              ? "bg-[#4B4B4B] border-[#4B4B4B] hover:border-[#4B4B4B]"
              : checked
              ? "border-green-500"
              : "border-gray-400"
          }`}
      >
        {checked && !disabled && (
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
        )}
      </span>

        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
};

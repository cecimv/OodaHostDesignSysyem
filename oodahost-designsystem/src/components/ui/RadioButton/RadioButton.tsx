import React from "react";

type RadioButtonProps = {
  label: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
}) => {
  const id = `${name}-${value}`;

  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={`
          w-5 aspect-square rounded-full border-2
          border-gray-400 bg-white
          flex items-center justify-center
          cursor-pointer transition-colors duration-200

          hover:border-[#26D086]

          peer-checked:border-[#26D086]
          peer-checked:bg-[#26D086]
        `}
      >
        <span className="w-2 h-2 bg-white rounded-full" />
      </label>
      <label htmlFor={id} className="cursor-pointer text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

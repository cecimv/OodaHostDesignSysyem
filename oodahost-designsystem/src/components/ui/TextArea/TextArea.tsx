import React, { useState } from 'react';

type TextAreaProps = {
  label: string;
  error?: string;
  hideLabel?: boolean;
  maxLength?: number;
  showCharCount?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  defaultValue?: string;
  id?: string;
  disabled?: boolean; // <-- ¡Añade esta línea para la prop disabled!
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'disabled'>; // <-- Y aquí, para evitar duplicados si ya estuviera en Omit

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  hideLabel = false,
  maxLength = 1000,
  showCharCount = true,
  value,
  defaultValue = '',
  onChange,
  id,
  disabled = false, // <-- Asegúrate de que tenga un valor por defecto false si no se pasa
  ...props
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const textareaId = id ?? `textarea-${Math.random().toString(36).substring(2, 9)}`;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Si el campo está deshabilitado, no hagas nada en el cambio
    if (disabled) {
      return;
    }

    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    // Llamar al onChange personalizado si existe
    if (onChange) {
      onChange(e);
    }
  };

  const getTextareaClasses = () => {
    const baseClasses =
      'w-full py-2 px-4 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-1';
    
    // Clases condicionales para el estado deshabilitado
    const disabledClasses = disabled
      ? 'bg-gray-100 text-gray-500 cursor-not-allowed border-neutral-200' // Estilos para deshabilitado
      : `hover:border-2 hover:border-[#26D086] ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-300'
            : 'border-neutral-300 focus:border-[#177D50] focus:ring-[#177D50]'
        } text-neutral-700 bg-white`; // Estilos normales o de error
    
    return `${baseClasses} ${disabledClasses} resize-y overflow-y-auto ${showCharCount ? 'pb-6' : 'pb-2'}`;
  };

  return (
    <div className="mb-4">
      {!hideLabel && (
        <label htmlFor={textareaId} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* contenedor relativo para superponer elementos */}
      <div className="relative">
        <textarea
          id={textareaId}
          className={getTextareaClasses()}
          value={currentValue}
          onChange={handleChange}
          aria-label={hideLabel ? label : undefined}
          maxLength={maxLength}
          disabled={disabled} // <-- ¡Pasa la prop disabled aquí!
          {...props}
        />

        {showCharCount && (
          <div className="absolute bottom-2 right-3 text-xs text-gray-500 pointer-events-none z-10 bg-white rounded px-1">
            {currentValue.length}/{maxLength}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

TextArea.displayName = 'TextArea';
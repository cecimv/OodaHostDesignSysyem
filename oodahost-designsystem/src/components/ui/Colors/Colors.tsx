import React from 'react';
import clsx from 'clsx';

export interface Color {
  name?: string;
  value: string;
}

export interface ColorPaletteProps {
  colors?: Color[];
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square' | 'rounded';
  showLabels?: boolean;
  onColorSelect?: (color: Color) => void;
  selectedColor?: string | null;
  label?: string;
}

const sizeClasses = {
  small: 'w-6 h-6',
  medium: 'w-10 h-10',
  large: 'w-16 h-16',
};

const shapeClasses = {
  circle: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-md',
};

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors = [],
  size = 'large',
  shape = 'square',
  showLabels = true,
  onColorSelect = () => {},
  selectedColor = null,
}) => {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      {colors.map((color, index) => {
        const isSelected = selectedColor === color.value;

        return (
          <div key={index} className="flex flex-col items-center">
            <div
              onClick={() => onColorSelect(color)}
              title={color.name || color.value}
              className={clsx(
                sizeClasses[size],
                shapeClasses[shape],
                'cursor-pointer transition-all duration-200',
                'border-2',
                isSelected ? 'border-bg-green scale-105' : 'border-transparent',
                'hover:scale-110 hover:border-gray-500'
              )}
              style={{ backgroundColor: color.value }}
            />
            {showLabels && (
              <span className="text-xs text-gray-600 mt-1">
                {color.name || color.value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

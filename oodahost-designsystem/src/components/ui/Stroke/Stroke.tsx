import React from 'react';

interface StrokeProps {
  size: 'S' | 'M' | 'L' | 'XL';
  strokeWidth: number;
  color?: string;
  className?: string;
  showDetails?: boolean;
}

interface StrokesProps {
  className?: string;
}

export const StrokeCircle: React.FC<StrokeProps> = ({
  size,
  strokeWidth,
  color = '#1EA66B',
  className = '',
  showDetails = true,
}) => {
  const circleSize = 120;
  const radius = (circleSize - strokeWidth) / 2;
  const center = circleSize / 2;

  return (
    <div className={`flex items-start gap-6 ${className}`}>
      <svg
        width={circleSize}
        height={circleSize}
        className="flex-shrink-0"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>

      {showDetails && (
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Stroke {size}
          </h3>
          <div className="text-sm text-gray-500">
            <div>Inside</div>
            <div>{strokeWidth} px</div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Strokes: React.FC<StrokesProps> = ({ className = '' }) => {
  const strokeConfigs = [
    { size: 'S' as const, strokeWidth: 0.8 },
    { size: 'M' as const, strokeWidth: 1.6 },
    { size: 'L' as const, strokeWidth: 2 },
    { size: 'XL' as const, strokeWidth: 2.4 },
  ];

  return (
    <div className={`p-8 bg-gray-50 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
        {strokeConfigs.map((config) => (
          <StrokeCircle
            key={config.size}
            size={config.size}
            strokeWidth={config.strokeWidth}
            className="p-6"
            showDetails={false} // 👈 Cambia a `true` si quieres que aparezca el texto
          />
        ))}
      </div>
    </div>
  );
};


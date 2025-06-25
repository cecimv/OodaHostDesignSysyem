import React from 'react';

// 1. Definiciones de las sombras con RGBA
export const shadows = {
  xs: '0px 4px 12px 0px rgba(46, 43, 43, 0.10)',  
  s:  '0px 4px 16px 0px rgba(46, 43, 43, 0.12)',  
  m:  '0px 8px 32px 0px rgba(46, 43, 43, 0.16)',  // este es igual a l
  l:  '0px 8px 32px 0px rgba(46, 43, 43, 0.16)',  // este es igual a m
};

// 2. Componente individual
interface ShadowCircleProps {
  variant: 'xs' | 's' | 'm' | 'l';
  color?: string;
  className?: string;
  showDetails?: boolean;
}

export const ShadowCircle: React.FC<ShadowCircleProps> = ({
  variant,
  color = '#FFFFFF',
  className = '',
  showDetails = true,
}) => {
  const shadowValue = shadows[variant];

  const parts = shadowValue.split(' ');
  const offsetX = parts[0];
  const offsetY = parts[1];
  const blurRadius = parts[2];
  const spreadRadius = parts[3];
  const shadowColor = parts.slice(4).join(' ');

  const circleSize = 120;

  return (
    <div className={`flex items-start gap-6 ${className}`}>
      <div
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: shadowValue,
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      {showDetails && (
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Drop Shadow {variant.toUpperCase()}
          </h3>
          <div className="text-sm text-gray-500">
            <div>Blur: {blurRadius.replace('px', '')}</div>
            <div>Color: {shadowColor}</div>
            <div>
              X: {offsetX.replace('px', '')} Y: {offsetY.replace('px', '')} S:{' '}
              {spreadRadius.replace('px', '')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 3. Vista general
interface ShadowsOverviewProps {
  className?: string;
}

export const ShadowsOverview: React.FC<ShadowsOverviewProps> = ({ className = '' }) => {
  const shadowConfigs = [
    { variant: 'xs' as const, label: 'Drop Shadow XS' },
    { variant: 's' as const, label: 'Drop Shadow S' },
    { variant: 'm' as const, label: 'Drop Shadow M' },
    { variant: 'l' as const, label: 'Drop Shadow L' },
  ];

  return (
    <div className={`p-8 bg-gray-50 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        {shadowConfigs.map((config) => (
          <ShadowCircle
            key={config.variant}
            variant={config.variant}
            className="p-6"
            showDetails={true}
          />
        ))}
      </div>
    </div>
  );
};

// Highlight.tsx
import React from 'react';

export interface HighlightProps {
  /**
   * Tamaño del highlight basado en el design system
   */
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  /**
   * Contenido del highlight
   */
  children: React.ReactNode;
  /**
   * Clases CSS adicionales
   */
  className?: string;
  /**
   * Color del texto
   */
  color?: 'primary' | 'secondary' | 'accent';
}

export const Highlight: React.FC<HighlightProps & React.HTMLAttributes<HTMLElement>> = ({
  size = 'xl',
  children,
  className = '',
  color = 'primary',
  ...props
}) => {
  // Mapeo de tamaños según las especificaciones del design system
  const sizeClasses = {
    xl: 'text-2xl font-black leading-tight',    // 24px - Highlight-XL (Extra Bold)
    l: 'text-xl font-bold leading-tight',       // 20px - Highlight-L (Bold)
    m: 'text-base font-bold leading-normal',    // 16px - Highlight-M (Bold)
    s: 'text-sm font-bold leading-normal',      // 14px - Highlight-S (Bold)
    xs: 'text-xs font-bold leading-normal'      // 12px - Highlight-XS (Bold)
  };

  const colorClasses = {
    primary: 'text-gray-950',
    secondary: 'text-gray-600', 
    accent: 'text-blue-600'
  };

  // Responsive classes para móviles
  const responsiveClasses = {
    xl: 'sm:text-xl md:text-2xl',
    l: 'sm:text-lg md:text-xl',
    m: 'sm:text-sm md:text-base',
    s: 'sm:text-xs md:text-sm',
    xs: 'sm:text-xs'
  };

  // Determinar el tag HTML apropiado
  const getHighlightTag = (size: string) => {
    const tagMap = {
      xl: 'span',
      l: 'span', 
      m: 'span',
      s: 'span',
      xs: 'span'
    } as const;
    return tagMap[size as keyof typeof tagMap] || 'span';
  };

  const HighlightTag = getHighlightTag(size);

  const combinedClasses = [
    'font-roboto', // Tailwind v4 approach - sans será tu Roboto configurado
    sizeClasses[size],
    colorClasses[color],
    responsiveClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <HighlightTag 
      className={combinedClasses}
      {...props}
    >
      {children}
    </HighlightTag>
  );
};

export default Highlight;
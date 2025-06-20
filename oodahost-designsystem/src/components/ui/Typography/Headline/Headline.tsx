import React from 'react';

export interface HeadlineProps {
  /**
   * Tamaño del headline basado en el design system
   */
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  /**
   * Contenido del headline
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

// Mapeo de tamaños según las especificaciones del design system
const sizeClasses = {
  xl: 'text-8xl font-black leading-none -tracking-tight', // 96px - Heading-XL
  l: 'text-7xl font-black leading-none -tracking-tight',   // 80px - Heading-L  
  m: 'text-6xl font-black leading-tight -tracking-tight',   // 60px - Heading-M
  s: 'text-5xl font-black leading-tight -tracking-tight',   // 48px - Heading-S
  xs: 'text-3xl font-black leading-snug'                    // 32px - Heading-XS
};

const colorClasses = {
  primary: 'text-gray-950',
  secondary: 'text-gray-600', 
  accent: 'text-blue-600'
};

// Responsive classes para móviles
const responsiveClasses = {
  xl: 'sm:text-6xl md:text-7xl lg:text-8xl',
  l: 'sm:text-5xl md:text-6xl lg:text-7xl',
  m: 'sm:text-4xl md:text-5xl lg:text-6xl',
  s: 'sm:text-3xl md:text-4xl lg:text-5xl',
  xs: 'sm:text-2xl md:text-3xl'
};

// Determinar el tag HTML apropiado
const getHeadingTag = (size: string) => {
  const tagMap = {
    xl: 'h1',
    l: 'h1', 
    m: 'h2',
    s: 'h3',
    xs: 'h4'
  } as const;
  return tagMap[size as keyof typeof tagMap] || 'h1';
};

export const Headline: React.FC<HeadlineProps & React.HTMLAttributes<HTMLHeadingElement>> = ({
  size = 'xl',
  children,
  className = '',
  color = 'primary',
  ...props
}) => {
  const HeadingTag = getHeadingTag(size);

  const combinedClasses = [
    'font-roboto', // Ahora debería funcionar con la configuración @theme
    sizeClasses[size],
    colorClasses[color],
    responsiveClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <HeadingTag 
      className={combinedClasses}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default Headline;
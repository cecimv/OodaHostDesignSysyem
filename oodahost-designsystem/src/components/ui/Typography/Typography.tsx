import * as React from 'react';

/* ─────────────────────── Headline ─────────────────────── */

export interface HeadlineProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const headlineSizeClasses = {
  xl: 'text-8xl font-black leading-none -tracking-tight',
  l: 'text-7xl font-black leading-none -tracking-tight',
  m: 'text-6xl font-black leading-tight -tracking-tight',
  s: 'text-5xl font-black leading-tight -tracking-tight',
  xs: 'text-3xl font-black leading-snug'
};

const headlineColorClasses = {
  primary: 'text-gray-950',
  secondary: 'text-gray-600',
  accent: 'text-blue-600'
};

const headlineResponsiveClasses = {
  xl: 'sm:text-6xl md:text-7xl lg:text-8xl',
  l: 'sm:text-5xl md:text-6xl lg:text-7xl',
  m: 'sm:text-4xl md:text-5xl lg:text-6xl',
  s: 'sm:text-3xl md:text-4xl lg:text-5xl',
  xs: 'sm:text-2xl md:text-3xl'
};

const getHeadlineTag = (size: HeadlineProps['size']) => {
  const tagMap = {
    xl: 'h1',
    l: 'h1',
    m: 'h2',
    s: 'h3',
    xs: 'h4'
  } as const;
  return tagMap[size ?? 'xl'];
};

export const Headline: React.FC<HeadlineProps & React.HTMLAttributes<HTMLHeadingElement>> = ({
  size = 'xl',
  children,
  className = '',
  color = 'primary',
  ...props
}) => {
  const HeadingTag = getHeadlineTag(size);
  const combinedClasses = [
    'font-roboto',
    headlineSizeClasses[size],
    headlineColorClasses[color],
    headlineResponsiveClasses[size],
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <HeadingTag className={combinedClasses} {...props}>
      {children}
    </HeadingTag>
  );
};

/* ─────────────────────── Highlight ─────────────────────── */

export interface HighlightProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const highlightSizeClasses = {
  xl: 'text-2xl font-black leading-tight',
  l: 'text-xl font-bold leading-tight',
  m: 'text-base font-bold leading-normal',
  s: 'text-sm font-bold leading-normal',
  xs: 'text-xs font-bold leading-normal'
};

const highlightColorClasses = {
  primary: 'text-gray-950',
  secondary: 'text-gray-600',
  accent: 'text-blue-600'
};

const highlightResponsiveClasses = {
  xl: 'sm:text-xl md:text-2xl',
  l: 'sm:text-lg md:text-xl',
  m: 'sm:text-sm md:text-base',
  s: 'sm:text-xs md:text-sm',
  xs: 'sm:text-xs'
};

const getHighlightTag = () => {
  return 'span'; // podrías expandir si necesitas que sea dinámico
};

export const Highlight: React.FC<
  HighlightProps & Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'size'>
> = ({
  size = 'xl',
  children,
  className = '',
  color = 'primary',
  ...props
}) => {
  const HighlightTag = getHighlightTag();

  const combinedClasses = [
    'font-roboto',
    highlightSizeClasses[size],
    highlightColorClasses[color],
    highlightResponsiveClasses[size],
    className
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(
    HighlightTag as string,
    { className: combinedClasses, ...props },
    children
  );
};

/* ─────────────────────── Body ─────────────────────── */

export interface BodyProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
  className?: string;
}

const bodySizeClasses = {
  xs: 'text-xs font-roboto font-normal',
  s: 'text-sm font-roboto font-normal',
  m: 'text-base font-roboto font-normal',
  l: 'text-xl font-roboto font-normal',
  xl: 'text-2xl font-roboto font-normal'
};

export const Body: React.FC<BodyProps> = ({
  size = 'm',
  children,
  as: Component = 'p',
  className = '',
  ...props
}) => {
  const classes = `${bodySizeClasses[size]} ${className}`.trim();

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

import React from 'react';

export interface BodyProps {
  /**
   * Size variant of the body text
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  /**
   * Content to be displayed
   */
  children: React.ReactNode;
  /**
   * HTML element to render
   */
  as?: 'p' | 'span' | 'div';
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeClasses = {
  xs: 'text-xs font-roboto font-normal', // 12px
  s: 'text-sm font-roboto font-normal',  // 14px
  m: 'text-base font-roboto font-normal', // 16px
  l: 'text-xl font-roboto font-normal',   // 20px
  xl: 'text-2xl font-roboto font-normal'  // 24px
};

/**
 * Body typography component with different size variants
 */
export const Body: React.FC<BodyProps> = ({
  size = 'm',
  children,
  as: Component = 'p',
  className = '',
  ...props
}) => {
  const classes = `${sizeClasses[size]} ${className}`.trim();

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Body;
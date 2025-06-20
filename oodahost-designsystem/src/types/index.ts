export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
    'data-testid'?: string;
  }
  
  export type Size = 'sm' | 'md' | 'lg';
  export type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
  export type Color = 'primary' | 'success' | 'warning' | 'error';
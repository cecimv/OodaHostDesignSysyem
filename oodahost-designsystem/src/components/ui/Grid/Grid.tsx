import React from 'react';

interface GridDesktopProps {
  children?: React.ReactNode;
  className?: string;
}

export const GridDesktop: React.FC<GridDesktopProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        grid 
        gap-[16px]
        mx-[64px]
        [grid-template-columns:repeat(8,_130px)]
        ${className}
      `}
    >
      {children ??
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
          >
            Columna {i + 1}
          </div>
        ))}
    </div>
  );
};


interface GridTabletHorizontalProps {
  children?: React.ReactNode;
  className?: string;
}

export const GridTabletHorizontal: React.FC<GridTabletHorizontalProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        grid
        gap-[16px]
        mx-[24px]
        [grid-template-columns:repeat(8,_129px)]
        ${className}
      `}
    >
      {children ??
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-36 bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
          >
            Columna {i + 1}
          </div>
        ))}
    </div>
  );
};


interface GridTabletVerticalProps {
  children?: React.ReactNode;
  className?: string;
}

export const GridTabletVertical: React.FC<GridTabletVerticalProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        grid 
        gap-[16px] 
        mx-[24px] 
        [grid-template-columns:repeat(4,_185px)]
        ${className}
      `}
    >
      {children ??
        Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-36 bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
          >
            Columna {i + 1}
          </div>
        ))}
    </div>
  );
};



interface GridMobileProps {
  children?: React.ReactNode;
  className?: string;
}

export const GridMobile: React.FC<GridMobileProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        grid 
        gap-[8px]
        mx-[16px]
        [grid-template-columns:repeat(4,_84px)]
        ${className}
      `}
    >
      {children ??
        Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
          >
            Columna {i + 1}
          </div>
        ))}
    </div>
  );
};


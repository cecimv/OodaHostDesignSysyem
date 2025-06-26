import React, { useState } from "react";


export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  truncated?: boolean;
  separator?: React.ReactNode;
  className?: string;
}

/**
 * Breadcrumbs component to display a navigation hierarchy.
 *
 * @param items - Array of breadcrumb items (label and optional href).
 * @param truncated - Whether to truncate the breadcrumb items if too many.
 * @param separator - Separator element between breadcrumb items.
 * @param className - Additional CSS classes.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  truncated = false,
  separator = '/',
  className = '',
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  const displayItems = React.useMemo(() => {
    if (!truncated || items.length < 3) {
      return items;
    }
    return [items[0], { label: '...' }, items[items.length - 1]];
  }, [items, truncated]);

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isPlaceholder = item.label === '...';

          return (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 !text-gray-400">{separator}</span>}

              {item.href && !isPlaceholder ? (
                <a
                  href={item.href}
                  className={`
                    !text-gray-400
                    hover:!text-gray-900
                    focus:outline-none
                    focus:!text-gray-900
                    transition-colors
                    duration-200
                    ${isLast ? '!text-black font-medium' : ''}
                    no-underline
                  `}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`${isLast ? '!text-black font-medium' : '!text-gray-400'} ${
                    isPlaceholder ? 'cursor-default' : ''
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                  aria-hidden={isPlaceholder ? true : undefined}
                  tabIndex={isPlaceholder ? -1 : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

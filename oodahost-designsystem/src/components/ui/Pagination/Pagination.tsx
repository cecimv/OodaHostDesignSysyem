import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'simple' | 'basic' | 'list';
  showGoTo?: boolean;
  itemsPerPage?: number;
  totalItems?: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'basic',
  showGoTo = false,
  itemsPerPage = 10,
  totalItems = 0,
  onItemsPerPageChange,
  className = '',
}) => {
  const [goToPage, setGoToPage] = React.useState('');

  const validCurrentPage = React.useMemo(() => {
    if (totalPages === 0) return 1;
    return Math.max(1, Math.min(currentPage, totalPages));
  }, [currentPage, totalPages]);

  React.useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [currentPage, totalPages, onPageChange]);

  const handleGoToSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const page = parseInt(goToPage);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setGoToPage('');
    }
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    if (onItemsPerPageChange) {
      onItemsPerPageChange(newItemsPerPage);
      onPageChange(1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = variant === 'list' ? 7 : 5;
    const actualTotalPages = Math.max(1, totalPages);

    if (actualTotalPages <= maxVisiblePages) {
      for (let i = 1; i <= actualTotalPages; i++) pages.push(i);
    } else {
      const startPage = Math.max(1, validCurrentPage - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(actualTotalPages, startPage + maxVisiblePages - 1);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }

      for (let i = startPage; i <= endPage; i++) pages.push(i);

      if (endPage < actualTotalPages) {
        if (endPage < actualTotalPages - 1) pages.push('...');
        pages.push(actualTotalPages);
      }
    }

    return pages;
  };

  const PageButton: React.FC<{ page: number | string; isActive?: boolean }> = ({ page, isActive }) => {
    if (page === '...') return <span className="px-3 py-2 text-gray-500">...</span>;

    const isValidPage = typeof page === 'number' && page >= 1 && page <= totalPages;

    return (
      <button
        onClick={() => isValidPage && onPageChange(page as number)}
        className={`
          px-3 py-2 text-sm font-medium rounded-md transition-colors
          ${isActive
            ? 'bg-green-200 text-green-700 border border-green-200'
            : isValidPage
              ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              : 'text-gray-300 cursor-not-allowed'
          }
        `}
        disabled={!isValidPage}
      >
        {page}
      </button>
    );
  };

  const NavigationButton: React.FC<{
    direction: 'prev' | 'next';
    disabled: boolean;
    onClick: () => void;
  }> = ({ direction, disabled, onClick }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-2 rounded-md transition-colors
        ${disabled
          ? 'text-gray-300 cursor-not-allowed'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }
      `}
    >
      {direction === 'prev' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
    </button>
  );

  const GoToInput = () => (
    <form onSubmit={handleGoToSubmit} className="flex items-center gap-2">
      <input
        type="number"
        value={goToPage}
        onChange={(e) => setGoToPage(e.target.value)}
        placeholder="Go to"
        min="1"
        max={totalPages}
        className="w-20 h-8 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </form>
  );

  const ItemsPerPageSelect = () => (
    <select
      value={itemsPerPage}
      onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
      className="h-8 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value={10}>10/page</option>
      <option value={20}>20/page</option>
      <option value={50}>50/page</option>
      <option value={100}>100/page</option>
    </select>
  );

  // Validación corregida: permitir simple/basic sin totalItems
  if (totalPages === 0 || (variant === 'list' && totalItems === 0)) return null;

  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <NavigationButton
          direction="prev"
          disabled={validCurrentPage <= 1}
          onClick={() => onPageChange(validCurrentPage - 1)}
        />
        <span className="text-sm text-gray-600">
          {validCurrentPage} / {totalPages}
        </span>
        <NavigationButton
          direction="next"
          disabled={validCurrentPage >= totalPages}
          onClick={() => onPageChange(validCurrentPage + 1)}
        />
      </div>
    );
  }

  if (variant === 'list') {
    const startItem = totalItems > 0 && validCurrentPage <= totalPages
      ? (validCurrentPage - 1) * itemsPerPage + 1
      : 1;

    const endItem = totalItems > 0 && validCurrentPage <= totalPages
      ? Math.min(validCurrentPage * itemsPerPage, totalItems)
      : Math.min(totalItems, itemsPerPage);

    return (
      <div className={`flex w-full items-center justify-between gap-6 ${className}`}>
        {/* IZQUIERDA */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="whitespace-nowrap">
            {Math.min(startItem, totalItems)}–{Math.min(endItem, totalItems)} of {totalItems} items
          </span>
          {onItemsPerPageChange && <ItemsPerPageSelect />}
        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-2">
          <NavigationButton
            direction="prev"
            disabled={validCurrentPage <= 1}
            onClick={() => onPageChange(validCurrentPage - 1)}
          />
          {renderPageNumbers().map((page, index) => (
            <PageButton key={index} page={page} isActive={page === validCurrentPage} />
          ))}
          <NavigationButton
            direction="next"
            disabled={validCurrentPage >= totalPages}
            onClick={() => onPageChange(validCurrentPage + 1)}
          />
          {showGoTo && (
            <div className="ml-2">
              <GoToInput />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <NavigationButton
        direction="prev"
        disabled={validCurrentPage <= 1}
        onClick={() => onPageChange(validCurrentPage - 1)}
      />
      {renderPageNumbers().map((page, index) => (
        <PageButton key={index} page={page} isActive={page === validCurrentPage} />
      ))}
      <NavigationButton
        direction="next"
        disabled={validCurrentPage >= totalPages}
        onClick={() => onPageChange(validCurrentPage + 1)}
      />
      {showGoTo && (
        <div className="ml-4">
          <GoToInput />
        </div>
      )}
    </div>
  );
};

export default Pagination;

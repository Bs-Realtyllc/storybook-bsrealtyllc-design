import './BSRealtyPagination.css';

export interface BSRealtyPaginationProps {
    /** Current active page */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Called when page changes */
    onPageChange?: (page: number) => void;
    /** Custom class name */
    className?: string;
    /** Disable pagination */
    disabled?: boolean;
}

export const BSRealtyPagination = ({
    currentPage,
    totalPages,
    onPageChange,
    className = '',
    disabled = false,
}: BSRealtyPaginationProps) => {
    let pages: (number | string)[] = [];


    if (totalPages <= 7) {
        pages = Array.from(
            { length: totalPages },
            (_, index) => index + 1
        )
    } else if (currentPage <= 4) {
        pages = [1, 2, 3, 4, 5, '...', totalPages]
    } else if (currentPage >= totalPages - 3) {
        pages = [
            1,
            '...',
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
        ];
    } else {
        pages = [
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages,
        ];
    }


    return (
        <nav
            className={`bsr-pagination ${className}`}
            aria-label="Pagination"
        >
            {/* Previous page btn */}
            <button
                type="button"
                className="bsr-pagination__button"
                disabled={disabled || currentPage === 1}
                onClick={() => onPageChange?.(currentPage - 1)}
            >
                ‹
            </button>

            {/* Pages */}

            <div className="bsr-pagination__pages">
                {pages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <span
                                key={`dots-${index}`}
                                className="bsr-pagination__dots"
                            >
                                ...
                            </span>
                        );
                    }
                    return (

                        <button
                            key={page}
                            type="button"
                            className={`bsr-pagination__page ${currentPage === page
                                ? 'bsr-pagination__page--active'
                                : ''
                                }`}
                            disabled={disabled}
                            onClick={() => onPageChange?.(page as number)}
                        >
                            {page}
                        </button>
                    )
                })}
            </div>

            {/* Next page btn */}
            <button
                type="button"
                className="bsr-pagination__button"
                disabled={
                    disabled || currentPage === totalPages
                }
                onClick={() => onPageChange?.(currentPage + 1)}
            >
                ›
            </button>
        </nav>
    );
};


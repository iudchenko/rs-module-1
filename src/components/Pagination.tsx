import { Link } from 'react-router-dom';
import { range } from '../utils/range';
import { AppStatus } from '../types/types';

type PaginationProps = {
  isLoading: boolean;
  isFetching: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  isLoading,
  isFetching,
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = range(1, totalPages);

  return (
    status !== AppStatus.loading &&
    totalPages > 1 &&
    !(isLoading || isFetching) && (
      <div
        data-testid="pagination"
        className="text-white max-w-xl mx-auto flex flex-wrap justify-center gap-3"
      >
        {pages.map((page) => {
          return (
            <Link
              key={page}
              data-testid={`page-${page}`}
              to={`/?page=${page}`}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 text-sm flex items-center justify-center transition rounded ${
                currentPage === page
                  ? 'bg-white text-gray-500'
                  : 'bg-gray-500/50 hover:bg-gray-500/70'
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>
    )
  );
}

export default Pagination;

import { Link } from 'react-router-dom';
import { range } from '../utils/range';
import { AppStatus } from '../types/types';

type PaginationProps = {
  status: AppStatus;
  currentPage: number;
  totalPages: number;
};

function Pagination({ status, currentPage, totalPages }: PaginationProps) {
  const pages = range(1, totalPages);

  return (
    status !== AppStatus.loading &&
    totalPages > 1 && (
      <div className="text-white flex justify-center gap-5">
        {pages.map((page) => {
          return (
            <Link
              key={page}
              to={`/?page=${page}`}
              className={`w-10 h-10 flex items-center justify-center transition   rounded ${
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

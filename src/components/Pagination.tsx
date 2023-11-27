import React from "react";
// import { Link } from 'react-router-dom';
import { range } from "../utils/range";
import { AppStatus } from "../types/types";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/search/search";
import Link from "next/link";

type PaginationProps = {
  isLoading: boolean;
  isFetching: boolean;
  currentPage: number;
  totalPages: number;
};

function Pagination({
  isLoading,
  isFetching,
  currentPage,
  totalPages,
}: PaginationProps) {
  const pages = range(1, totalPages);

  const dispatch = useDispatch();

  return (
    // status !== AppStatus.loading &&
    totalPages > 1 &&
    !(isLoading || isFetching) && (
      <div
        data-testid="pagination"
        className="text-white pt-4 max-w-xl mx-auto flex flex-wrap justify-center gap-3"
      >
        {pages.map((page) => {
          return (
            <Link
              key={page}
              data-testid={`page-${page}`}
              href={`/?page=${page}`}
              onClick={() => dispatch(changePage(page))}
              className={`w-8 h-8 text-sm flex items-center justify-center transition rounded ${
                currentPage === page
                  ? "bg-white text-gray-500"
                  : "bg-gray-500/50 hover:bg-gray-500/70"
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

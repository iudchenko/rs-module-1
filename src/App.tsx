import React, { useState, useEffect } from 'react';

import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import Pagination from './components/Pagination';
import { AppStatus } from './types/types';
import { fetchCharacters } from './utils/fetchData';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Search from './components/Search';
import PageCountSelect from './components/PageCountSelect';
import { ITEMS_PER_PAGE_MEDIUM } from './utils/constants';
import { useSearch } from './context/SearchContext';

const App: React.FC<Record<string, never>> = () => {
  const { searchTerm, setSearchTerm, results, setResults } = useSearch();

  const [status, setStatus] = useState<AppStatus>(AppStatus.active);

  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(ITEMS_PER_PAGE_MEDIUM);

  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 1
  );
  const navigate = useNavigate();

  // const currentPage = searchParams.get('page')
  //   ? Number(searchParams.get('page'))
  //   : 1;

  const getCharacters = async (
    searchedCharacter: string,
    page: number = 1,
    perPage: number
  ) => {
    try {
      setStatus(AppStatus.loading);
      const { results, pages } = await fetchCharacters(
        searchedCharacter,
        page,
        perPage
      );
      setResults(results);
      setTotalPages(pages);
      setStatus(AppStatus.active);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.error('An unknown error occurred:', err);
      }
      setStatus(AppStatus.error);
    }
  };

  useEffect(() => {
    getCharacters(searchTerm, currentPage, perPage);
  }, [searchTerm, currentPage, perPage]);

  const handleSearchTerm = (searchTerm: string) => {
    setCurrentPage(1);
    setSearchTerm(searchTerm);
    navigate(`/`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setCurrentPage(1);
    navigate(`/`);
  };

  return (
    <ErrorBoundary>
      <AppWrapper>
        <header className="flex w-full items-end max-w-xl mx-auto gap-5">
          <Search
            searchTerm={searchTerm}
            status={status}
            onSearchChange={handleSearchTerm}
          />
          <PageCountSelect perPage={perPage} onSelect={handlePerPageSelect} />
        </header>
        <Results status={status} results={results} />
        <Pagination
          status={status}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <ErrorButton />
        <Outlet />
      </AppWrapper>
    </ErrorBoundary>
  );
};

export default App;

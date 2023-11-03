import React, { useState, useEffect } from 'react';

import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import Pagination from './components/Pagination';
import { ICharacter, AppStatus } from './types/types';
import { fetchCharacters } from './utils/fetchData';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Search from './components/Search';

const App: React.FC<Record<string, never>> = () => {
  const [searchTerm, setSearchTerm] = useState<string>(
    window.localStorage.getItem('searchTerm') ?? ''
  );
  const [results, setResults] = useState<ICharacter[]>([]);
  const [status, setStatus] = useState<AppStatus>(AppStatus.active);

  const [searchParams] = useSearchParams();

  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  const getCharacters = async (searchedCharacter: string, page: number = 1) => {
    try {
      setStatus(AppStatus.loading);
      const { results, pages } = await fetchCharacters(searchedCharacter, page);
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
    getCharacters(searchTerm, currentPage);
  }, [searchTerm, currentPage]);

  const handleSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <ErrorBoundary>
      <AppWrapper>
        <Search
          searchTerm={searchTerm}
          status={status}
          onSearchChange={handleSearchTerm}
        />
        <Results status={status} results={results} />
        <Pagination
          status={status}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        <ErrorButton />
        <Outlet />
      </AppWrapper>
    </ErrorBoundary>
  );
};

export default App;

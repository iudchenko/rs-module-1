import React, { useState, useEffect, useCallback } from 'react';

import SearchBar from './components/SearchBar';
import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import { ICharacter, AppStatus } from './types/types';
import { fetchData } from './utils/fetchData';

const initialSearchTerm = window.localStorage.getItem('searchTerm') ?? '';

const App: React.FC<Record<string, never>> = () => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [results, setResults] = useState<ICharacter[]>([]);
  const [status, setStatus] = useState<AppStatus>(AppStatus.active);

  const getCharacters = async (searchedCharacter: string) => {
    setStatus(AppStatus.loading);
    const results = await fetchData(searchedCharacter);
    setResults(results);
    setStatus(AppStatus.active);
  };

  // Initial results
  useEffect(() => {
    getCharacters(initialSearchTerm);
  }, []);

  // Search results
  const handleSearch = () => {
    getCharacters(searchTerm);
  };

  // const handleStatus = (newStatus: AppStatus) => {
  //   setStatus(newStatus);
  // };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    window.localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <ErrorBoundary>
      <AppWrapper>
        <SearchBar
          searchTerm={searchTerm}
          status={status}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchTermChange(e)
          }
          onSearch={() => handleSearch()}
        />
        <Results status={status} results={results} />
        <ErrorButton />
      </AppWrapper>
    </ErrorBoundary>
  );
};

export default App;

import React, { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import PageCountSelect from './components/PageCountSelect';
import Search from './components/Search';
import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';

import Header from './components/Header';

const App = () => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 1
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ErrorBoundary>
      <AppWrapper>
        <Header>
          <Search onPageChange={handlePageChange} />
          <PageCountSelect onPageChange={handlePageChange} />
        </Header>
        <Results currentPage={currentPage} onPageChange={handlePageChange} />

        <ErrorButton />
        <Outlet />
      </AppWrapper>
    </ErrorBoundary>
  );
};

export default App;

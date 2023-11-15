import React, { useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PageCountSelect from './components/PageCountSelect';
import Search from './components/Search';
import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import Pagination from './components/Pagination';

import { changePerPage, searchFor } from './redux/search/search';
import { useGetCharactersQuery } from './redux/api/apiSlice';
import { ITEMS_PER_PAGE_MEDIUM, ITEMS_PER_PAGE_SMALL } from './utils/constants';
import { RootState } from './redux/store';
import Header from './components/Header';

const App: React.FC<Record<string, never>> = () => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 1
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { searchTerm, perPage } = useSelector(
    (state: RootState) => state.search
  );

  const currentPagePaged =
    perPage === ITEMS_PER_PAGE_MEDIUM
      ? currentPage
      : Math.ceil(currentPage / 2);

  const {
    data: charactersData,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCharactersQuery({ searchTerm, page: currentPagePaged });

  const totalPages = Math.ceil(charactersData?.count / perPage);

  let results = charactersData?.results;

  if (perPage === ITEMS_PER_PAGE_SMALL) {
    if (currentPage % 2 !== 0) {
      results = charactersData?.results.slice(0, ITEMS_PER_PAGE_SMALL);
    } else {
      results = charactersData?.results.slice(ITEMS_PER_PAGE_SMALL);
    }
  }

  const handleSearch = (searchTerm: string) => {
    setCurrentPage(1);
    dispatch(searchFor(searchTerm));
    navigate(`/`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changePerPage(Number(e.target.value)));
    window.localStorage.setItem('perPage', e.target.value);
    setCurrentPage(1);
    navigate(`/`);
  };

  return (
    <ErrorBoundary>
      <AppWrapper>
        <Header>
          <Search searchTerm={searchTerm} onSearch={handleSearch} />
          <PageCountSelect perPage={perPage} onSelect={handlePerPageSelect} />
        </Header>
        <Results
          isLoading={isLoading}
          isFetching={isFetching}
          isSuccess={isSuccess}
          isError={isError}
          results={results}
        />
        <Pagination
          isLoading={isLoading}
          isFetching={isFetching}
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

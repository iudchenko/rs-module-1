import React from 'react';
import { AppStatus } from '../types/types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';

interface ISearchProps {
  searchTerm: string;
  status: AppStatus;
  onSearchChange: (e: string) => void;
}

function Search({ searchTerm, status, onSearchChange }: ISearchProps) {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  // Search results
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchTermInput = (e.target as HTMLFormElement).elements.namedItem(
      'searchTerm'
    ) as HTMLInputElement;
    const searchTerm = searchTermInput.value;

    // Reset all search params for new search
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set('page', '1');
    updatedSearchParams.set('details', '0');
    updatedSearchParams.delete('page');
    updatedSearchParams.delete('details');

    navigate(`/?${updatedSearchParams.toString()}`);

    window.localStorage.setItem('searchTerm', searchTerm);
    onSearchChange(searchTerm);
  };

  return (
    <header>
      <form className="max-w-xl mx-auto" onSubmit={handleSearch}>
        <SearchBar searchTerm={searchTerm} status={status} />
      </form>
    </header>
  );
}

export default Search;

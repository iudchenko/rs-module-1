import React from 'react';
import { AppStatus } from '../types/types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';

interface ISearchProps {
  searchTerm: string;
  onSearch: (e: string) => void;
}

function Search({ searchTerm, onSearch }: ISearchProps) {
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
    onSearch(searchTerm);
  };

  return (
    <div className="grow">
      <form className="" onSubmit={handleSearch} role="search">
        <SearchBar searchTerm={searchTerm} />
      </form>
    </div>
  );
}

export default Search;

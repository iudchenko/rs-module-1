import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchFor } from '../redux/search/search';

interface ISearchProps {
  onPageChange: (page: number) => void;
}

function Search({ onPageChange }: ISearchProps) {
  const [searchParams] = useSearchParams();
  const { searchTerm } = useSelector((state: RootState) => state.search);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    window.localStorage.setItem('searchTerm', searchTerm);

    onPageChange(1);
    dispatch(searchFor(searchTerm));
    navigate(`/?${updatedSearchParams.toString()}`);
  };

  return (
    <div className="grow">
      <form onSubmit={handleSearch} role="search">
        <SearchBar searchTerm={searchTerm} />
      </form>
    </div>
  );
}

export default Search;

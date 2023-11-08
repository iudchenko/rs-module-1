import { createContext, useContext, useEffect, useState } from 'react';
import { ICharacter } from '../types/types';

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState<string>(
    window.localStorage.getItem('searchTerm') ?? ''
  );
  const [results, setResults] = useState<ICharacter[]>([]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        results,
        setResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('SearchContext was used outside of the SearchProvider');
  return context;
}

export { SearchProvider, useSearch };

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { ICharacter, ISearchContext } from '../types/types';

// const SearchContext = createContext(null);
// Initialize the context with a default object
const SearchContext = createContext<ISearchContext>({
  searchTerm: '',
  setSearchTerm: () => {},
  results: [],
  setResults: () => {},
});

function SearchProvider({ children }: { children: ReactNode }) {
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

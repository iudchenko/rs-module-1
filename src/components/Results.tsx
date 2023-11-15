import Spinner from './Spinner';
import Character from './Character';
import { ICharacter } from '../types/types';
import { useGetCharactersQuery } from '../redux/api/apiSlice';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { RootState } from '../redux/store';

import {
  ITEMS_PER_PAGE_MEDIUM,
  ITEMS_PER_PAGE_SMALL,
} from '../utils/constants';

interface IResultsProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Results({ currentPage, onPageChange }: IResultsProps) {
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

  return (
    <main className="p-5 w-full max-w-xl mx-auto flex flex-col items-start bg-gray-700/50 backdrop-blur-sm rounded-lg">
      <ul className="flex flex-col gap-2 w-full">
        {(isLoading || isFetching) && <Spinner />}
        {isSuccess &&
          !(isLoading || isFetching) &&
          results?.length > 0 &&
          results?.map((character: ICharacter) => {
            const id = Number(
              character.url
                .split('/')
                .filter((element) => element)
                .pop()
            );
            return <Character key={id} id={id} character={character} />;
          })}
        {isSuccess && !(isLoading || isFetching) && results?.length === 0 && (
          <p className="text-white">Nothing found</p>
        )}
        {isError && <p className="text-white">Something went wrong</p>}
      </ul>
      <Pagination
        isLoading={isLoading}
        isFetching={isFetching}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </main>
  );
}

export default Results;

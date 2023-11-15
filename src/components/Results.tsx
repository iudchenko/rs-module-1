import Spinner from './Spinner';
import Character from './Character';
import { ICharacter } from '../types/types';
import { useGetCharactersQuery } from '../redux/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';

interface IResultsProps {
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  results: ICharacter[];
}

function Results({
  isLoading,
  isFetching,
  isSuccess,
  isError,
  results,
}: IResultsProps) {
  // console.log('from RTKQ', characters?.results);
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
    </main>
  );
}

export default Results;

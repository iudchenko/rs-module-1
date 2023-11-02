import Spinner from './Spinner';
import Character from './Character';
import { ICharacter } from '../types/types';

interface IResultsProps {
  status: string;
  results: ICharacter[];
}

function Results({ status, results }: IResultsProps) {
  return (
    <main className="p-5 w-full max-w-3xl mx-auto flex flex-col items-start bg-gray-700/50 backdrop-blur-sm rounded-lg">
      <ul className="flex flex-col gap-2 w-full">
        {status === 'loading' && <Spinner />}
        {status === 'error' && <p>Something went wrong</p>}
        {status === 'active' &&
          results.length > 0 &&
          results.map((character) => (
            <Character key={character.url} character={character} />
          ))}
        {status === 'active' && results.length === 0 && (
          <p className="text-white">Nothing found</p>
        )}
      </ul>
    </main>
  );
}

export default Results;

import Spinner from './Spinner';
import Character from './Character';
import { ICharacter } from '../types/types';

interface IResultsProps {
  status: string;
  results: ICharacter[];
}

function Results({ status, results }: IResultsProps) {
  return (
    <main className="p-5 w-full max-w-xl mx-auto flex flex-col items-start bg-gray-700/50 backdrop-blur-sm rounded-lg">
      <ul className="flex flex-col gap-2 w-full">
        {status === 'loading' && <Spinner />}
        {status === 'error' && (
          <p className="text-white">Something went wrong</p>
        )}
        {status === 'active' &&
          results.length > 0 &&
          results.map((character) => {
            const id = Number(
              character.url
                .split('/')
                .filter((elm) => elm)
                .pop()
            );
            return <Character key={id} id={id} character={character} />;
          })}
        {status === 'active' && results.length === 0 && (
          <p className="text-white">Nothing found</p>
        )}
      </ul>
    </main>
  );
}

export default Results;

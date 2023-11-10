import { useLocation, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import { ICharacter } from '../types/types';

type CharacterProps = {
  id: number;
  character: ICharacter;
};

function Character({ id, character }: CharacterProps) {
  const { name, birth_year } = character;

  const navigate = useNavigate();

  // Get the current location object
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.set('details', '1');

  const handleClick = () => {
    navigate(`/search/${id}?${searchParams.toString()}`);
  };

  return (
    <li
      className="flex items-center grow w-full gap-5 bg-gray-900/50 text-white rounded-lg"
      data-testid="character-li"
      onClick={handleClick}
    >
      <div className="flex grow items-center justify-between gap-5 text-white px-5 py-2 cursor-pointer">
        <h2 className="text-xl font-bold">{name}</h2>

        <p>
          <strong>Birth Year:</strong> {birth_year.toUpperCase()}
        </p>
      </div>
    </li>
  );
}

export default Character;

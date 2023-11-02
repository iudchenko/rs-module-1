import { ICharacter } from '../types/types';

type CharacterProps = {
  character: ICharacter;
};

function Character({ character }: CharacterProps) {
  const { name, gender, height, mass, birth_year } = character;
  return (
    <li className="flex items-center grow w-full gap-5 p-2 bg-gray-900/50 text-white rounded-lg">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="flex gap-2 text-white/80">
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Mass:</strong> {mass}
        </p>
        <p>
          <strong>Birth Year:</strong> {birth_year}
        </p>
      </div>
    </li>
  );
}

export default Character;

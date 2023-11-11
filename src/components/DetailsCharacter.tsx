import { ICharacter } from '../types/types';
import { makeSentenceCase } from '../utils/strings';

type DetailsCharacterProps = {
  details: ICharacter;
};

function DetailsCharacter({ details }: DetailsCharacterProps) {
  const {
    name,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  } = details;
  return (
    <div data-testid="details" className="text-white py-20 px-5">
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between">
          <span className="font-bold">Name: </span>
          {makeSentenceCase(name)}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Birth Year: </span>
          {makeSentenceCase(birth_year.toUpperCase())}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Height: </span>
          {height}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Mass: </span>
          {mass}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Hair Color: </span>
          {makeSentenceCase(hair_color)}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Skin Color: </span>
          {makeSentenceCase(skin_color)}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Eye Color: </span>
          {makeSentenceCase(eye_color)}
        </li>
        <li className="flex justify-between">
          <span className="font-bold">Gender: </span>
          {makeSentenceCase(gender)}
        </li>
      </ul>
    </div>
  );
}

export default DetailsCharacter;

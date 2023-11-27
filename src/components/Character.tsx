// import { useLocation } from 'react-router-dom';
import React from "react";
import { useRouter } from "next/router";

import { ICharacter } from "../types/types";
import { changeViewMode } from "../redux/search/search";
import { useDispatch } from "react-redux";

type CharacterProps = {
  id: number;
  character: ICharacter;
};

function Character({ id, character }: CharacterProps) {
  const { name, birth_year } = character;

  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();

  // Get the current location object
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // searchParams.set("details", "1");
  // router.push({
  //   pathname, // replace with your desired path
  //   query: { details: "1" }, // set your parameter and its value
  // });

  const handleClick = () => {
    // router.push(`/search/${id}?${searchParams.toString()}`);
    router.push({
      pathname: `/search/${id}`, // replace with your desired path
      query: { details: "1" }, // set your parameter and its value
    });
    dispatch(changeViewMode(true));
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

import React, { Component } from "react";
import { Person } from "../interfaces/interfaces";

type CharacterProps = {
  character: Person;
};

export class Character extends Component<CharacterProps> {
  render() {
    const { name, gender, height, mass, birth_year } = this.props.character;
    return (
      <li className="flex grow w-full gap-2 p-2 bg-white rounded-lg">
        <p>
          <strong>Name:</strong> {name}
        </p>
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
      </li>
    );
  }
}

export default Character;

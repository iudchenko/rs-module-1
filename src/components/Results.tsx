import React, { Component } from 'react';
import Spinner from './Spinner';
import Character from './Character';
import { Person } from '../interfaces/interfaces';

interface ResultsProps {
  status: string;
  results: Person[];
}

export class Results extends Component<ResultsProps> {
  constructor(props: ResultsProps) {
    super(props);
  }
  render() {
    return (
      <main className="p-5 w-full max-w-3xl mx-auto flex flex-col items-start bg-gray-700/50 backdrop-blur-sm rounded-lg">
        <ul className="flex flex-col gap-2 w-full">
          {this.props.status === 'loading' && <Spinner />}
          {this.props.status === 'error' && <p>Something went wrong</p>}
          {this.props.status === 'active' &&
            this.props.results.length > 0 &&
            this.props.results.map((character) => (
              <Character key={character.url} character={character} />
            ))}
          {this.props.status === 'active' &&
            this.props.results.length === 0 && (
              <p className="text-white">Nothing found</p>
            )}
        </ul>
      </main>
    );
  }
}

export default Results;

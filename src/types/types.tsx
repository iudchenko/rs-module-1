export enum AppStatus {
  active = 'active',
  loading = 'loading',
  error = 'error',
}

export interface ICharacter {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface ICharacterResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: ICharacter[];
}

export interface ISearchContext {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  results: ICharacter[];
  setResults: React.Dispatch<React.SetStateAction<ICharacter[]>>;
}

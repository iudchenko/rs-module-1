import { ICharacter } from '../types/types';
import { API_URL, ITEMS_PER_PAGE } from './constants';

interface IFetchCharacters {
  results: ICharacter[];
  pages: number;
}

interface IFetchCharacter {
  data: ICharacter;
}

export async function fetchCharacters(
  searchTerm = '',
  page = 1
): Promise<IFetchCharacters> {
  const url = searchTerm
    ? `${API_URL}?search=${searchTerm.toLowerCase().trim()}${
        page === 1 ? '' : `&page=${page}`
      }`
    : `${API_URL}${page === 1 ? '' : `?page=${page}`}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    let pages;
    const fullPages = Math.floor(data.count / ITEMS_PER_PAGE);

    if (data.count % ITEMS_PER_PAGE === 0) {
      pages = fullPages;
    } else {
      pages = fullPages + 1;
    }

    const results = data.results;

    return { results, pages };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function fetchCharacter(id: number): Promise<IFetchCharacter> {
  const url = `${API_URL}${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    return { data };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

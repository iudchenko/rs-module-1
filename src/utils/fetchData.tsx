import { ICharacter } from '../types/types';
import {
  API_URL,
  ITEMS_PER_PAGE_SMALL,
  ITEMS_PER_PAGE_MEDIUM,
  ITEMS_PER_PAGE_LARGE,
} from './constants';

interface IFetchCharacters {
  results: ICharacter[];
  pages: number;
}

interface IFetchCharacter {
  data: ICharacter;
}

export async function fetchCharacters(
  searchTerm = '',
  page = 1,
  perPage = ITEMS_PER_PAGE_MEDIUM
): Promise<IFetchCharacters> {
  let url = formatURL(searchTerm, page);
  let url_1;
  let url_2;

  if (perPage === ITEMS_PER_PAGE_SMALL) {
    const pageForSmall = Math.ceil(page / 2);
    url = formatURL(searchTerm, pageForSmall);
  }

  if (perPage === ITEMS_PER_PAGE_LARGE) {
    const pageForLarge_1 = page * 2 - 1;
    const pageForLarge_2 = page * 2;

    url_1 = formatURL(searchTerm, pageForLarge_1);
    url_2 = formatURL(searchTerm, pageForLarge_2);
  }

  try {
    let data;

    if (perPage === ITEMS_PER_PAGE_SMALL || perPage === ITEMS_PER_PAGE_MEDIUM) {
      const res = await fetch(url);
      data = await res.json();
    }

    if (perPage === ITEMS_PER_PAGE_LARGE) {
      if (url_1 && url_2) {
        // Check if both urls are defined
        const promises = [
          fetch(url_1).then((res) => res.json()),
          fetch(url_2).then((res) => res.json()),
        ];

        let count = 0;
        const resultsAll: ICharacter[] = [];

        const settledPromises = await Promise.allSettled(promises).then(
          (results) =>
            results.forEach((result) => {
              if (
                result.status === 'fulfilled' &&
                Array.isArray(result.value.results)
              ) {
                resultsAll.push(...result.value.results);
                if (result.value.count > count) {
                  count = result.value.count;
                }
              }
            })
        );

        data = { count, results: resultsAll };
      }
    }

    // Page count
    let pages;

    const fullPages = Math.floor(data.count / perPage);

    if (data.count % perPage === 0) {
      pages = fullPages;
    } else {
      pages = fullPages + 1;
    }

    // Send data
    let results = data.results;

    if (perPage === ITEMS_PER_PAGE_SMALL) {
      if (page % 2 !== 0) {
        results = results.slice(0, ITEMS_PER_PAGE_SMALL);
      } else {
        results = results.slice(ITEMS_PER_PAGE_SMALL);
      }
    }

    return { results, pages };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export function formatURL(searchTerm: string, page: number) {
  return `${API_URL}${
    searchTerm ? `?search=${searchTerm.toLowerCase().trim()}` : ''
  }${page === 1 ? '' : `${searchTerm ? `&` : `?`}page=${page}`}`;
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

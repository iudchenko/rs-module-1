import { afterEach, describe, expect, test, vi } from 'vitest';
import type { Mock } from 'vitest';

import { fetchCharacters, fetchCharacter } from '../utils/fetchData';
import { ICharacter, ICharacterResponse } from '../types/types';
import { MOCK_CHARACTER, MOCK_CHARACTERS_10 } from './mockData';

global.fetch = vi.fn() as Mock;

function createFetchResponse(data: ICharacter | ICharacterResponse) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe('fetching single character', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test('testing fetching single character', async () => {
    (fetch as Mock).mockResolvedValue(createFetchResponse(MOCK_CHARACTER));

    const character = await fetchCharacter(34);

    expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/34');

    expect(character.data).toStrictEqual(MOCK_CHARACTER);
  });
});

describe('fetching characters', () => {
  test('testing fetching multiple characters per page 10', async () => {
    (fetch as Mock).mockResolvedValue(createFetchResponse(MOCK_CHARACTERS_10));
    const characters = await fetchCharacters('luke', 1, 10);
    expect(fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/people/?search=luke'
    );
    expect(characters.results).toStrictEqual(MOCK_CHARACTERS_10.results);
  });

  test('testing fetching multiple characters per page 5 odd', async () => {
    (fetch as Mock).mockResolvedValue(createFetchResponse(MOCK_CHARACTERS_10));
    const characters = await fetchCharacters('luke', 1, 5);
    expect(fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/people/?search=luke'
    );
    expect(characters.results[0]).toStrictEqual(MOCK_CHARACTERS_10.results[0]);
  });

  test('testing fetching multiple characters per page 5 even', async () => {
    (fetch as Mock).mockResolvedValue(createFetchResponse(MOCK_CHARACTERS_10));
    const characters = await fetchCharacters('luke', 2, 5);
    expect(fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/people/?search=luke'
    );
    expect(characters.results[0]).toStrictEqual(MOCK_CHARACTERS_10.results[5]);
  });

  test('testing fetching multiple characters per page 20', async () => {
    (fetch as Mock).mockResolvedValue(createFetchResponse(MOCK_CHARACTERS_10));
    const characters = await fetchCharacters('luke', 1, 20);
    expect(fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/people/?search=luke'
    );
    expect(characters.results[0]).toStrictEqual(MOCK_CHARACTERS_10.results[0]);
  });
});

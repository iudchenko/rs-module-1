import { http, HttpResponse } from "msw";
import { API_URL } from "../utils/constants";
import {
  MOCK_CHARACTER,
  MOCK_CHARACTERS_1,
  MOCK_CHARACTERS_10,
  MOCK_NOTHING_FOUND,
} from "../__mocks__/mockData";
import { ICharacter } from "../types/types";

export const handlers = [
  http.get(API_URL, ({ request }) => {
    const url = new URL(request.url);
    const searchKylo = url.searchParams.get("search");

    if (searchKylo === "kylo ren") {
      return HttpResponse.json<{
        count: number;
        next: null;
        previous: null;
        results: ICharacter[];
      }>(MOCK_NOTHING_FOUND);
    }

    // Adjust the type of the next property if it can be a string.
    return HttpResponse.json<{
      count: number;
      next: string | null;
      previous: null;
      results: ICharacter[];
    }>(MOCK_CHARACTERS_10);
  }),

  http.get(`${API_URL}1`, () => {
    // const url = new URL(request.url);
    // const details = url.searchParams.get('details');

    // Adjust the type of the next property if it can be a string.
    return HttpResponse.json<ICharacter>(MOCK_CHARACTER);
  }),
];

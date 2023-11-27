import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";
import { formatURL } from "../../utils/helpers";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["characters", "details"],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ searchTerm = "", page = 1 }) => formatURL(searchTerm, page),
    }),
    getCharacter: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["details"],
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = apiSlice;

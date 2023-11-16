import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const { endpoints } = apiSlice;
const { getCharacters, getCharacter } = endpoints;

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    getCharactersLoading: false,
    getCharacterLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(getCharacters.matchPending, (state) => {
        state.getCharactersLoading = true;
      })
      .addMatcher(getCharacters.matchFulfilled, (state) => {
        state.getCharactersLoading = false;
      })
      .addMatcher(getCharacters.matchRejected, (state) => {
        state.getCharactersLoading = false;
      })
      .addMatcher(getCharacter.matchPending, (state) => {
        state.getCharacterLoading = true;
      })
      .addMatcher(getCharacter.matchFulfilled, (state) => {
        state.getCharacterLoading = false;
      })
      .addMatcher(getCharacter.matchRejected, (state) => {
        state.getCharacterLoading = false;
      });
  },
});

export default loadingSlice.reducer;

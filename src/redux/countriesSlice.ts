import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Country, Countries } from '../interfaces/interfaces';

const countries = Object.keys(Country).map(
  (key) => Country[key as keyof typeof Country]
);

const initialState: Countries = {
  countries,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

// export const {} = countriesSlice.actions;

export default countriesSlice.reducer;

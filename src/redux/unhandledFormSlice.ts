import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Country, Gender, type FormState } from '../interfaces/interfaces';

const initialState: FormState = {
  name: '',
  age: null,
  email: '',
  password: '',
  passwordConfirmation: '',
  gender: Gender.DEFAULT,
  accept: false,
  picture: '',
  country: Country.DEFAULT,
};

export const unhandledFormSlice = createSlice({
  name: 'unhandledForm',
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<FormState>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirmation = action.payload.passwordConfirmation;
      state.gender = action.payload.gender;
      state.accept = action.payload.accept;
      state.picture = action.payload.picture;
      state.country = action.payload.country;
    },
  },
});

export const { saveFormData } = unhandledFormSlice.actions;

export default unhandledFormSlice.reducer;

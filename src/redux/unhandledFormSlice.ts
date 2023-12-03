import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type FormState } from '../interfaces/interfaces';

const initialState: FormState = {
  name: '',
  age: null,
  email: '',
  password: '',
  confirmPassword: '',
  gender: null,
  accept: false,
  picture: '',
  country: null,
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
      state.confirmPassword = action.payload.confirmPassword;
      state.gender = action.payload.gender;
      state.accept = action.payload.accept;
      state.picture = action.payload.picture;
      state.country = action.payload.country;
    },
  },
});

export const { saveFormData } = unhandledFormSlice.actions;

export default unhandledFormSlice.reducer;

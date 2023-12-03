import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type HookFormState } from '../interfaces/interfaces';

const initialState: HookFormState = {
  name: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  accept: '',
  picture: undefined,
  country: '',
};

export const hookFormSlice = createSlice({
  name: 'hookFormSlice',
  initialState,
  reducers: {
    saveHookFormData: (state, action: PayloadAction<HookFormState>) => {
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

export const { saveHookFormData } = hookFormSlice.actions;

export default hookFormSlice.reducer;

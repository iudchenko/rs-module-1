// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { Country, Gender, type FormState } from '../interfaces/interfaces';

// const initialState: FormState = {
//   name: '',
//   age: null,
//   email: '',
//   password: '',
//   confirmPassword: '',
//   gender: Gender.DEFAULT,
//   accept: false,
//   picture: '',
//   country: Country.DEFAULT,
// };

// export const hookFormSlice = createSlice({
//   name: 'hook',
//   initialState,
//   reducers: {
//     changeName: (state, action: PayloadAction<string>) => {
//       state.name = action.payload;
//     },
//     changeAge: (state, action: PayloadAction<number>) => {
//       state.age = action.payload;
//     },
//     changeEmail: (state, action: PayloadAction<string>) => {
//       state.email = action.payload;
//     },
//     changePassword: (state, action: PayloadAction<string>) => {
//       state.password = action.payload;
//     },
//     changePasswordConfirmation: (state, action: PayloadAction<string>) => {
//       state.confirmPassword = action.payload;
//     },
//     changeGender: (state, action: PayloadAction<Gender>) => {
//       state.gender = action.payload;
//     },
//     changeAccept: (state, action: PayloadAction<boolean>) => {
//       state.accept = action.payload;
//     },
//     changePicture: (state, action: PayloadAction<string>) => {
//       state.picture = action.payload;
//     },
//     changeCountry: (state, action: PayloadAction<Country>) => {
//       state.country = action.payload;
//     },
//   },
// });

// export const {
//   changeName,
//   changeAge,
//   changeEmail,
//   changePassword,
//   changePasswordConfirmation,
//   changeGender,
//   changeAccept,
//   changePicture,
//   changeCountry,
// } = hookFormSlice.actions;

// export default hookFormSlice.reducer;

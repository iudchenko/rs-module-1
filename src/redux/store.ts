import { configureStore } from '@reduxjs/toolkit';
import unhandledFormSlice from './unhandledFormSlice';
import hookFormSlice from './hookFormSlice';
import countriesSlice from './countriesSlice';

export const store = configureStore({
  reducer: {
    unhandled: unhandledFormSlice,
    hook: hookFormSlice,
    countries: countriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

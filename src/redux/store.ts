import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchSliceReducer from './search/search';
import loadingSliceReducer from './loading/loading';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    loading: loadingSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import searchSliceReducer from "./search/search";
import loadingSliceReducer from "./loading/loading";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      search: searchSliceReducer,
      loading: loadingSliceReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

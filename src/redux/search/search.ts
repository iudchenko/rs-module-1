import { createSlice } from "@reduxjs/toolkit";
import { ITEMS_PER_PAGE_MEDIUM } from "../../utils/constants";
import { ISearchState } from "../../types/types";

const initialState: ISearchState = {
  searchTerm: "",
  perPage: ITEMS_PER_PAGE_MEDIUM,
  currentPage: 1,
  viewModeDetailsOpen: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchFor: (state, action) => {
      state.searchTerm = action.payload;
    },
    changePerPage: (state, action) => {
      state.perPage = action.payload;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeViewMode: (state, action) => {
      state.viewModeDetailsOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchFor, changePerPage, changeViewMode, changePage } =
  searchSlice.actions;

export default searchSlice.reducer;

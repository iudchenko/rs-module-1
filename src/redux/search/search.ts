import { createSlice } from '@reduxjs/toolkit';
import { ITEMS_PER_PAGE_MEDIUM } from '../../utils/constants';

const initialSearchTerm = window.localStorage.getItem('searchTerm');
const initialPerPage = window.localStorage.getItem('perPage');

const initialState = {
  searchTerm: initialSearchTerm ? initialSearchTerm : '',
  perPage: initialPerPage ? Number(initialPerPage) : ITEMS_PER_PAGE_MEDIUM,
  viewModeDetailsOpen: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchFor: (state, action) => {
      state.searchTerm = action.payload;
    },
    changePerPage: (state, action) => {
      state.perPage = action.payload;
    },
    changeViewMode: (state, action) => {
      state.viewModeDetailsOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchFor, changePerPage, changeViewMode } = searchSlice.actions;

export default searchSlice.reducer;

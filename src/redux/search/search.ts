import { createSlice } from '@reduxjs/toolkit';
import { ITEMS_PER_PAGE_MEDIUM } from '../../utils/constants';
import { ISearchState } from '../../types/types';

const initialSearchTerm = window.localStorage.getItem('searchTerm');
const initialPerPage = window.localStorage.getItem('perPage');

const params = new URL(document.location.href).searchParams;
const initialPage = parseInt(params.get('page') || '1', 10);

const initialState: ISearchState = {
  searchTerm: initialSearchTerm ? initialSearchTerm : '',
  perPage: initialPerPage ? Number(initialPerPage) : ITEMS_PER_PAGE_MEDIUM,
  currentPage: initialPage ? initialPage : 1,
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
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchFor, changePerPage, changeViewMode, changePage } =
  searchSlice.actions;

export default searchSlice.reducer;

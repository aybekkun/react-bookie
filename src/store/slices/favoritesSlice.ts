import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoritesState } from "../../types/favorites";
import { fetchFavorites } from "../thunks/favoritesThunk";

const initialState: IFavoritesState = {
  books: {
    current_page: 1,
    data: [],
    first_page_url: "",
    from: 1,
    last_page: 1,
    last_page_url: "",
    links: [],
    next_page_url: null,
    path: "",
    per_page: 1,
    prev_page_url: null,
    to: 1,
    total: 1,
  },
  isLoading: false,
  error: "",
  page: 1,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setPageFavorites(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchFavorites.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchFavorites.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFavorites.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default favoritesSlice.reducer;

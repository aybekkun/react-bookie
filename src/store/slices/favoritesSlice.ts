import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createFavorite, fetchFavorites } from "../actionCreators/favoritesActionCreator";

interface FavoritesState {
  books: any;
  isLoading: boolean;
  error: string;
  page: number;
}

const initialState: FavoritesState = {
  books: "",
  isLoading: false,
  error: "",
  page: 1
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
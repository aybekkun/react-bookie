import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchData, ISearchState } from "../../types/search";
import { fetchSearchBooks } from "../thunks/searchBookThunk";

const initialState: ISearchState = {
  books: [],
  isLoading: false,
  error: "",
};

export const searchBooksSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchBooks.fulfilled.type]: (state, action: PayloadAction<ISearchData[]>) => {
      state.books = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchSearchBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default searchBooksSlice.reducer;

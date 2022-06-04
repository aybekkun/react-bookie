import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryBooksState } from "../../types/categoryBooks";
import { fetchCategoryBooks } from "../thunks/categoryBooksThunk";

const initialState: ICategoryBooksState = {
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

export const categoryBooksSlice = createSlice({
  name: "categoryPage",
  initialState,
  reducers: {
    setPageCategoryBooks(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchCategoryBooks.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.books = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchCategoryBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCategoryBooks.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default categoryBooksSlice.reducer;

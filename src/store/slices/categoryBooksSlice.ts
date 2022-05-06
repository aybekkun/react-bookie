import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategoryBooks } from "../actionCreators/categoryBooksActionCreator";

interface CategoryBooksState {
  id: any;
  books: any;
  isLoading: boolean;
  error: string;
  page: number;
}

const initialState: CategoryBooksState = {
  id: "",
  books: "",
  isLoading: false,
  error: "",
  page: 1,
};

export const categoryBooksSlice = createSlice({
  name: "categoryPage",
  initialState,
  reducers: {
    setIdCategoryBook(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
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

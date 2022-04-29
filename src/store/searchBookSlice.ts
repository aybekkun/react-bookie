import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchBooks } from "./searchBookActionCreator";

interface SearchBooksState {
  books: any;
  isLoading: boolean;
  error: string;
}

const initialState: SearchBooksState = {
  books: "",
  isLoading: false,
  error: "",
};

export const searchBooksSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchBooks.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchSearchBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchBooks.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default searchBooksSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILastestState } from "../../types/lastest";
import { fetchLastest } from "../thunks/lastestThunk";

const initialState: ILastestState = {
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
  page: 1,
  isLoading: false,
  error: "",
};

export const lastestSlice = createSlice({
  name: "lastest",
  initialState,
  reducers: {
    setPageLastest(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchLastest.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchLastest.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLastest.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default lastestSlice.reducer;

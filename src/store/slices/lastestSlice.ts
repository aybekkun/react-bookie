import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLastest } from "../actionCreators/lastestActionCreator";

interface LastestState {
  books: any;
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: LastestState = {
  books: "",
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

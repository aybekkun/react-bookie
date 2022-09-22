import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMain } from "../thunks/mainThunk";
import { IMainData, IMainState } from "./../../types/main";

const initialState: IMainState = {
  books: { lastest: [], views: [], short_audios: [] },
  isLoading: false,
  error: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMain.fulfilled.type]: (state, action: PayloadAction<IMainData>) => {
      state.books = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchMain.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMain.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default mainSlice.reducer;

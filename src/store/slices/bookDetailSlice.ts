import { createSlice } from "@reduxjs/toolkit";
import { fetchBookDetail } from "../thunks/bookDetailThunk";
import { PayloadAction } from "@reduxjs/toolkit";
import { IBookDetailData, IBookDetailState } from "../../types/bookDetail";

const initialState: IBookDetailState = {
  audios: [],
  book: {
    id: 1,
    name: "",
    description: "",
    view: 1,
    dublyaj_actor_id: 1,
    author_id: 1,
    sub_category_id: 1,
    image: "",
    author: "",
    dublyaj_actor_name: "",
  },
  simular: [],
  isLoading: false,
  error: "",
};

export const bookDetailSlice = createSlice({
  name: "bookDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBookDetail.fulfilled.type]: (state, action: PayloadAction<IBookDetailData>) => {
      state.book = action.payload.book;
      state.audios = action.payload.audios;
      state.simular = action.payload.simular;
      state.error = "";
      state.isLoading = false;
    },
    [fetchBookDetail.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBookDetail.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookDetailSlice.reducer;

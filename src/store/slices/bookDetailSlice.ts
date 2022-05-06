import { createSlice } from "@reduxjs/toolkit";
import { fetchBookDetail } from "../actionCreators/bookDetailActionCreator";
import { PayloadAction } from "@reduxjs/toolkit";

interface BookDetailState {
  id: number;
  book: any;
  isLoading: boolean;
  error: string;
}

const initialState: BookDetailState = {
  id: 0,
  book: "",
  isLoading: false,
  error: "",
};

export const bookDetailSlice = createSlice({
  name: "bookDetail",
  initialState,
  reducers: {
    setIdBook(state, action: PayloadAction<number>){
        state.id = action.payload;
    }
},
  extraReducers: {
    [fetchBookDetail.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.book = action.payload;
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
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReviewsData, IReviewState } from "../../types/review";
import { fetchReviews } from "../thunks/reviewThunk";

const initialState: IReviewState = {
  reviews: {
    current_page: 1,
    data: [],
    first_page_url: "",
    from: 1,
    last_page: 1,
    last_page_url: "",
    links: [],
    next_page_url: "",
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

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setPageReviews(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchReviews.fulfilled.type]: (
      state,
      action: PayloadAction<IReviewsData>
    ) => {
      state.reviews = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchReviews.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchReviews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default reviewSlice.reducer;

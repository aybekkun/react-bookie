import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchReviews } from "../actionCreators/reviewActionCreator";

interface ReviewState {
  reviews: IReviews;
  isLoading: boolean;
  error: string;
  page: number;
}

export interface IReviews {
  current_page: number;
  data: IReviewsData[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: number;
  links: IReviewsLinks[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
  children?: JSX.Element | JSX.Element[];
}

export interface IReviewsData {
  id: number;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface IReviewsLinks {
  url: null | string;
  label: string;
  active: boolean;
}

const initialState: ReviewState = {
  reviews: {
    current_page: 1,
    data: [
      { id: 1, name: "aza", rating: 1, comment: "asd", created_at: "111" },
    ],
    first_page_url: "",
    from: 1,
    last_page: 1,
    last_page_url: 1,
    links: [{ url: null, label: "", active: true }],
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
    [fetchReviews.fulfilled.type]: (state, action: PayloadAction<IReviews>) => {
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

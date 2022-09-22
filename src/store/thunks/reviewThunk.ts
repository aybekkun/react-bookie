import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";
import { IReviewsData } from "../../types/review";

export interface CreateReviewProps {
  userId: number | null;
  comment: string;
  rating: number;
}

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IReviewsData>(`review?page=${page}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const createReview = createAsyncThunk(
  "create/createReview",
  async ({ userId, comment, rating }: CreateReviewProps, thunkAPI) => {
    try {
      const response = await $authHost.post(`review`, {
        user_id: userId,
        comment: comment,
        rating: rating,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

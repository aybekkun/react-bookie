import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";
import { IReviews } from "../slices/reviewSlice";

export interface CreateReviewProps {
  name: string;
  comment: string;
  phone: string;
  rating: number;
}

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IReviews>(`api/review?page=${page}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const createReview = createAsyncThunk(
  "create/createReview",
  async ({ name, comment, phone, rating }: CreateReviewProps, thunkAPI) => {
    try {
      const response = await $authHost.post<any>(`api/review`, {
        name,
        comment,
        phone,
        rating,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

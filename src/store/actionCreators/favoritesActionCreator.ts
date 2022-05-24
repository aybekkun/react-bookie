import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";

interface FetchFavoritesProps {
  userId: number | null;
  page?: number;
}

interface CreateFavoritesProps {
  userId: number | null;
  bookId: number;
}

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async ({ userId, page = 1 }: FetchFavoritesProps, thunkAPI) => {
    try {
      const response = await $authHost.get<any>(
        `api/favorite/${userId}?page=${page}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const createFavorite = createAsyncThunk(
  "create/createFavorite",
  async ({ userId, bookId }: CreateFavoritesProps, thunkAPI) => {
    try {
      const response = await $authHost.post<any>(`api/favorite`, {
        user_id: userId,
        book_id: bookId,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "delete/deleteFavorite",
  async ({ userId, bookId }: CreateFavoritesProps, thunkAPI) => {
    try {
      const response = await $authHost.delete<any>(
        `api/favorite?user_id=${userId}&book_id=${bookId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

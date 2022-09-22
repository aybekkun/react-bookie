import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";
import { IAllFavorites, IFavorites } from "../../types/favorites";

interface FetchFavoritesProps {
  userId: number | null;
  page?: number;
}

interface CreateFavoritesProps {
  userId: number | null;
  bookId: string | undefined;
}

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async ({ userId, page = 1 }: FetchFavoritesProps, thunkAPI) => {
    try {
      const response = await $authHost.get<IFavorites>(
        `favorite/${userId}?page=${page}`
      );
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const fetchAllFavorites = createAsyncThunk(
  "allFavorites/fetchAllFavorites",
  async (userId: number | null, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IAllFavorites>(
        `getallfavorites/${userId}`
      );
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const createFavorite = createAsyncThunk(
  "create/createFavorite",
  async ({ userId, bookId }: CreateFavoritesProps, thunkAPI) => {
    try {
      const response = await $authHost.post(`favorite`, {
        user_id: userId,
        book_id: bookId,
        // "_method": "POST"
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
      const response = await $authHost.post(`favorite`, {
        user_id: userId,
        book_id: bookId,
        "_method": "DELETE",
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

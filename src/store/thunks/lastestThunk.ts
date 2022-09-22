import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";
import { ILastest } from "../../types/lastest";

interface FetchLastestProps {
  userId: number | null;
  page?: number;
}

interface CreateLastestProps {
  userId: number | null;
  bookId: number;
}

export const fetchLastest = createAsyncThunk(
  "lastest/fetchLastest",
  async ({ userId, page = 1 }: FetchLastestProps, thunkAPI) => {
    try {
      const response = await $authHost.get<ILastest>(
        `lastaudio/${userId}?page=${page}`
      );
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const createLastest = createAsyncThunk(
  "create/createFavorite",
  async ({ userId, bookId }: CreateLastestProps, thunkAPI) => {
    try {
      const response = await $authHost.post(`lastaudio`, {
        user_id: userId,
        book_id: bookId,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

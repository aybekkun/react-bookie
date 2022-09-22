import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { ISearch } from "../../types/search";

export const fetchSearchBooks = createAsyncThunk(
  "searchBooks/fetchSearchBooks",
  async (word: string, thunkAPI) => {
    try {
      const response = await $host.get<ISearch>(`search/${word}`);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

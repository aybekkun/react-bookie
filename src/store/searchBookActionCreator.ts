import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { $authHost } from "../http";

export const fetchSearchBooks = createAsyncThunk(
  'bookDetail/fetchBookDetail',
  async (word: string, thunkAPI) => {
      try {
          const response = await $authHost.get<any>(`api/search/${word}`)
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
      }
  }
)

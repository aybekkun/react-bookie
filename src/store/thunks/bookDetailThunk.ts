import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";
import { IBookDetail } from "../../types/bookDetail";

export const fetchBookDetail = createAsyncThunk(
  "bookDetail/fetchBookDetail",
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await $authHost.get<IBookDetail>(`audio/${id}`);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

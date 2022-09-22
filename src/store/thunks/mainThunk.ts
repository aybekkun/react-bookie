import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { IMain } from "../../types/main";

export const fetchMain = createAsyncThunk(
  "main/fetchMain",
  async (_, thunkAPI) => {
    try {
      const response = await $host.get<IMain>("book");
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить книги");
    }
  }
);

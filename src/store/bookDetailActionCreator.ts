import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { $authHost } from "../http";

export const fetchBookDetail = createAsyncThunk(
  'bookDetail/fetchBookDetail',
  async (id: any, thunkAPI) => {
      try {
          const response = await $authHost.get<any>(`api/audio/${id}`)
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
      }
  }
)

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { $authHost } from "../../http";


interface FetchCategoryBooksProps {
  id: number;
  page?: number;
}

export const fetchCategoryBooks = createAsyncThunk(
  "categoryBook/fetchcategoryBook",
  async ({ id, page = 1 }: FetchCategoryBooksProps, thunkAPI) => {
    try {
      const response = await $authHost.get<any>(
        `api/book/show/${id}?page=${page}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

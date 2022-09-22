import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { ICategoryBooks } from "../../types/categoryBooks";

interface FetchCategoryBooksProps {
  id: string | undefined;
  page?: number;
}

export const fetchCategoryBooks = createAsyncThunk(
  "categoryBook/fetchcategoryBook",
  async ({ id, page = 1 }: FetchCategoryBooksProps, thunkAPI) => {
    try {
      const response = await $host.get<ICategoryBooks>(
        `book/${id}?page=${page}`
      );
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

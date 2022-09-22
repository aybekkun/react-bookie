import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { ICategories } from "../../types/categories";
import { ISubCategories } from "./../../types/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await $host.get<ICategories>("category");
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить категории");
    }
  }
);

export const fetchSubCategories = createAsyncThunk(
  "subCategories/fetchSubCategories",
  async (_, thunkAPI) => {
    try {
      const response = await $host.get<ISubCategories>("subcategory");
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить категории");
    }
  }
);

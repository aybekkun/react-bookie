import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoriesData, ICategoriesState, ISubData } from "../../types/categories";
import { fetchCategories, fetchSubCategories } from "../thunks/categoriesThunk";

const initialState: ICategoriesState = {
  categories: [],
  subCategories: [],
  isLoading: false,
  error: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled.type]: (state, action: PayloadAction<ICategoriesData[]>) => {
      state.categories = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCategories.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchSubCategories.fulfilled.type]: (
      state,
      action: PayloadAction<ISubData[][]>
    ) => {
      state.subCategories = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchSubCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSubCategories.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default categoriesSlice.reducer;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategories } from "../models/ICategories";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bookie.eco-study.uz" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllCategories: build.query<ICategories, null>({
      query: () => ({
        url: `/api/category`,
      }),
      providesTags: (result) => ["Post"],
    }),
  }),
});

export const subCategoriesAPI = createApi({
  reducerPath: "subCategoriesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bookie.eco-study.uz" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchSubCategories: build.query<ICategories, any>({
      query: () => ({
        url: `/api/subcategory`,
      }),
      providesTags: (result) => ["Post"],
    }),
  }),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategories } from "../models/ICategories";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://bookie.eco-study.uz" }),
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
  baseQuery: fetchBaseQuery({ baseUrl: "http://bookie.eco-study.uz" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchSubCategories: build.query<ICategories, any>({
      query: (id) => ({
        url: `/api/subcategory`,
      }),
      providesTags: (result) => ["Post"],
    }),
  }),
});

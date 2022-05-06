import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMain } from "../models/IMain";

export const mainAPI = createApi({
  reducerPath: "mainAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bookie.eco-study.uz" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllMainBooks: build.query<IMain, null>({
      query: () => ({
        url: `/api/book`,
      }),
      providesTags: (result) => ["Post"],
    }),
  }),
});

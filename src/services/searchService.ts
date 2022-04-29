import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISearch } from "../models/ISearch";

export const searchAPI = createApi({
  reducerPath: "searchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://bookie.eco-study.uz" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchSearchBooks: build.query<ISearch, string>({
      query: (word) => ({
        url: `/search/${word}`,
      }),
      providesTags: (result) => ["Post"],
    }),
  }),
});

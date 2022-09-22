import { ILinks, IPagintaion, IResponse } from ".";

export interface ICategoryBooks extends IResponse {
  data: ICategoryBooksData;
}

export interface ICategoryBooksData extends IPagintaion {
  data: ICategoryBookData[];
}

export interface ICategoryBookData {
  id: number;
  name: string;
  image: string;
  view: number;
  sub_category_name: string;
  author_name: string;
}

export interface ICategoryBooksState {
  books: ICategoryBooksData;
  isLoading: boolean;
  error: string;
  page: number;
}

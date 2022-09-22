import { IResponse } from ".";

export interface ISearch extends IResponse {
  data: ISearchData;
}

export interface ISearchData {
  id: number;
  name: string;
  description: string;
  image: string;
  view: number;
  dublyaj_actor_id: number;
  author_id: number;
  sub_category_id: number;
  updated_at: number;
}

export interface ISearchState {
  books: ISearchData[];
  isLoading: boolean;
  error: string;
}

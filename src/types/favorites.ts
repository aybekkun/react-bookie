import { IPagintaion, IResponse } from ".";

export interface IFavorites extends IResponse {
  data: IFavoritesData;
}

export interface IFavoritesData extends IPagintaion {
  data: IFavoriteData[];
}

export interface IFavoriteData {
  id: number;
  name: string;
  image: string;
  view: number;
  author_id: number;
  author_name: string;
}

export interface IFavoritesState {
  books: IFavoritesData;
  isLoading: boolean;
  error: string;
  page: number;
}

export interface IAllFavorites extends IResponse {
  data: IFavoriteData;
}

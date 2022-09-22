import { IResponse } from ".";
import { IPagintaion } from ".";

export interface ILastest extends IResponse {
  data: ILastestData;
}

export interface ILastestData extends IPagintaion {
  data: ILastData[];
}

export interface ILastData {
  id: number;
  name: string;
  image: string;
  view: number;
  author_id: number;
  author_name: string;
}

export interface ILastestState {
  books: ILastestData;
  isLoading: boolean;
  error: string;
  page: number;
}

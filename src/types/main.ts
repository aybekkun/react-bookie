import { IResponse } from ".";

export interface IMain extends IResponse {
  data: IMainData;
}

export interface IMainData {
  lastest: IMainBook[];
  views: IMainBook[];
  short_audios: IMainBook[];
}

export interface IMainBook {
  id: number;
  name: string;
  image: string;
  author_name: string;
  view: number;
}

export interface IMainState {
  books: IMainData;
  isLoading: boolean;
  error: string;
}

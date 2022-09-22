import { IResponse } from ".";

export interface IBookDetail extends IResponse{
  data: IBookDetailData;
}

export interface IBookDetailState {
  audios: IBookDetailAudios[];
  book: IBookDetailBook;
  simular: IBookDetailSimular[];
  isLoading: boolean;
  error: string;
}

export interface IBookDetailData {
  audios: IBookDetailAudios[];
  book: IBookDetailBook;
  simular: IBookDetailSimular[];
}

export interface IBookDetailAudios {
  id: number;
  audio: string;
  duration: string;
  title: string;
  book_id: number;
}

export interface IBookDetailBook {
  id: number;
  name: string;
  description: string;
  view: number;
  dublyaj_actor_id: number;
  author_id: number;
  sub_category_id: number;
  image: string;
  author: string;
  dublyaj_actor_name: string;
}

export interface IBookDetailSimular {
  id: number;
  name: string;
  view: number;
  image: string;
  author_id: number;
  author_name: string;
}

import { IResponse } from ".";

export interface ICategories extends IResponse{
  data: ICategoriesData[];
}

export interface ICategoriesData {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ISubCategories extends IResponse {
  data: ISubData[][];
}

export interface ISubData {
  id: number;
  name: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}



export interface ICategoriesState {
  categories: ICategoriesData[];
  subCategories: ISubData[][];
  isLoading: boolean;
  error: string;
}

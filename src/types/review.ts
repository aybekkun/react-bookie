import { IPagintaion, IResponse } from ".";

export interface IReviews extends IResponse {
  data: IReviews;
}

export interface IReviewState {
  reviews: IReviewsData;
  isLoading: boolean;
  loadReview: number;
  error: string;
  page: number;
}

export interface IReviewsData extends IPagintaion {
  data: IReviewData[];
}

export interface IReviewData {
  id: number;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

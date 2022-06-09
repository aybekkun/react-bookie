export interface IBookCard {
  props: {
    id: number;
    name: string;
    image: string;
    author_name: string;
    view: number;
  };
}

export interface IResponse {
  success: boolean;
  message: string;
}

export interface ILinks {
  url: null | string;
  label: string;
  active: boolean;
}

export interface IPagintaion {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILinks[];
  next_page_url: null | string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
  children?: JSX.Element | JSX.Element[];
}
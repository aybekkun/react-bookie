jimport { IResponse } from ".";

export interface ILoginState {
  userId: number | null;
  token: string | null;
  isUserLogin: boolean;
  isCommented: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IRegistrationProps {
  name: string;
  phone: string;
  password: string;
}

export interface ILoginProps {
  phone: string;
  password: string;
}

export interface IRegistration extends IResponse {
  data: IRegistrationData;
}

export interface IRegistrationData {
  token: string;
  user_id: number;
}

export interface ILogin extends IResponse {
  data: ILoginData;
}

export interface ILoginData {
  token: string;
  user_id: number;
  is_commented: boolean;
}

export interface ICheck {
  message: string;
  data: ICheckData;
}

export interface ICheckData {
  id: number;
  name: string;
  phone: string;
  is_commented: boolean;
}

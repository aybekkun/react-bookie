import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { api } from "../api";

export interface LoginState {
  isLoading: boolean;
  isUserLogin: boolean;
  user: number | null;
  error: string | null;
}

const initialState: LoginState = {
  isLoading: false,
  isUserLogin: false,
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setUser(state, action: PayloadAction<number | null>) {
      state.user = action.payload;
    },
    setIsUserLogin(state, action: PayloadAction<boolean>) {
      state.isUserLogin = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});
export const { setIsLoading, setUser, setIsUserLogin, setError } =
  loginSlice.actions;

export const login =
  (phone: string, password: string) =>
  (dispatch: Dispatch<any>): void => {
    dispatch(setIsLoading(true));
    api
      .login(phone, password)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        dispatch(setIsUserLogin(true));
      })
      .catch((err) => {
        dispatch(setError(err.response ? err.response.data : err.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const logout =
  (token: string) =>
  (dispatch: Dispatch<any>): void => {
    dispatch(setIsLoading(true));
    api
      .logout(token)
      .then((res) => {
        localStorage.removeItem("token");
        dispatch(setUser(null));
        dispatch(setIsUserLogin(false));
      })
      .catch((err) => {
        dispatch(setError(err.response ? err.response.data : err.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const registration =
  (name: string, phone: string, password: string) =>
  (dispatch: Dispatch<any>): void => {
    dispatch(setIsLoading(true));
    api
      .registration(phone, name, password)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatch(setUser(res.data.data.user_id));
      })
      .catch((err) => {
        dispatch(setError(err.response ? err.response.data : err.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export default loginSlice.reducer;

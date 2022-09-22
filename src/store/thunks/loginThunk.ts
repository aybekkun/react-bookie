import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../http";
import {
  ICheck,
  ILogin,
  ILoginProps,
  IRegistration,
  IRegistrationProps,
} from "../../types/login";

export const fetchRegistration = createAsyncThunk(
  "registration/fetchRegistration",
  async ({ name, phone, password }: IRegistrationProps, thunkAPI) => {
    try {
      const { data } = await $host.post<IRegistration>("register", {
        name: name,
        phone: phone,
        password: password,
      });
      localStorage.setItem("token", data.data.token);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async ({ phone, password }: ILoginProps, thunkAPI) => {
    try {
      const { data } = await $host.post<ILogin>("login", {
        phone: phone,
        password: password,
      });
      localStorage.setItem("token", data.data.token);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "logout/fetchLogout",
  async (_, thunkAPI) => {
    try {
      const { data } = await $authHost.post("logout");
      localStorage.removeItem("token")

    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const fetchCheck = createAsyncThunk(
  "check/fetchCheck",
  async (_, thunkAPI) => {
    try {
      const response = await $authHost.get<ICheck>("check");
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

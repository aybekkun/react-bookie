import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICheckData,
  ILoginData,
  ILoginState,
  IRegistrationData,
} from "../../types/login";
import {
  fetchCheck,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
} from "../thunks/loginThunk";

const initialState: ILoginState = {
  userId: null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isUserLogin: false,
  isCommented: false,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegistration.fulfilled.type]: (
      state,
      action: PayloadAction<IRegistrationData>
    ) => {
      state.userId = action.payload.user_id;
      state.error = "";
      state.isLoading = false;
    },
    [fetchRegistration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRegistration.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchLogin.fulfilled.type]: (state, action: PayloadAction<ILoginData>) => {
      state.userId = action.payload.user_id;
      state.isUserLogin = true;
      state.isCommented = action.payload.is_commented;
      state.error = "";
      state.isLoading = false;
    },
    [fetchLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchLogout.fulfilled.type]: (state) => {
      state.userId = null;
      state.isUserLogin = false;
      state.error = "";
      state.isLoading = false;
    },
    [fetchLogout.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLogout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchCheck.fulfilled.type]: (state, action: PayloadAction<ICheckData>) => {
      state.userId = action.payload.id;
      state.isUserLogin = true;
      state.isCommented = action.payload.is_commented;
      state.error = "";
      state.isLoading = false;
    },
    [fetchCheck.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCheck.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const login =
//   (phone: string, password: string) =>
//   (dispatch: Dispatch<any>): void => {
//     dispatch(setIsLoading(true));
//     api
//       .login(phone, password)
//       .then((res) => {
//         dispatch(setUser(res.data.data.user_id));
//         localStorage.setItem("token", res.data.data.token);
//         dispatch(setIsUserLogin(true));
//       })
//       .catch((err) => {
//         dispatch(setError(err.response ? err.response.data : err.message));
//       })
//       .finally(() => {
//         dispatch(setIsLoading(false));
//       });
//   };

// export const logout =
//   () =>
//   (dispatch: Dispatch<any>): void => {
//     dispatch(setIsLoading(true));
//     api
//       .logout()
//       .then(() => {
//         localStorage.removeItem("token");
//         dispatch(setUser(null));
//         dispatch(setIsUserLogin(false));
//       })
//       .catch((err) => {
//         dispatch(setError(err.response ? err.response.data : err.message));
//       })
//       .finally(() => {
//         localStorage.removeItem("token");
//         dispatch(setUser(null));
//         dispatch(setIsLoading(false));
//       });
//   };

// export const registration =
//   (name: string, phone: string, password: string) =>
//   (dispatch: Dispatch<any>): void => {
//     dispatch(setIsLoading(true));
//     api
//       .registration(phone, name, password)
//       .then((res) => {
//         localStorage.setItem("token", res.data.data.token);
//         dispatch(setUser(res.data.data.user_id));
//       })
//       .catch((err) => {
//         dispatch(setError(err.response ? err.response.data : err.message));
//       })
//       .finally(() => {
//         dispatch(setIsLoading(false));
//       });
//   };

// export const check =
//   () =>
//   (dispatch: Dispatch<any>): void => {
//     dispatch(setIsLoading(true));
//     $authHost
//       .get("api/check")
//       .then((res) => {
//         dispatch(setUser(res.data.data.id));
//         dispatch(setIsUserLogin(true));
//       })
//       .catch((err) => {
//         dispatch(setError("error"));
//       })
//       .finally(() => {
//         dispatch(setIsLoading(false));
//       });
//   };

export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { api } from "../api";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoading: false,
        isUserLogin: false,
        error: null,
    }
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;
        },
        setIsUserLogin(state, action) {
            state.isUserLogin = action.payload;
        },
        setError(state, action){
            state.error = action.payload
        }
    },
});
export const { setIsLoading, setIsUserLogin, setError} = loginSlice.actions;

export const login = (phone: string, password: string) => (dispatch: Dispatch<any>): void => {
    dispatch(setIsLoading(true));
    api.login(phone, password)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            dispatch(setIsUserLogin(true));
        })
        .catch((err) => {
           dispatch(setError(err.response ? err.response.data : err.message))
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })   
};


export default loginSlice.reducer
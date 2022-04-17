import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";

const rootReducer = combineReducers({
    loginData: loginReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
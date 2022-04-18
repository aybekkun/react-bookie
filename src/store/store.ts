import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";

const rootReducer = combineReducers({
  loginReducer,
});

export const setupStore =()=> {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
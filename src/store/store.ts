import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookDetailReducer from "./slices/bookDetailSlice";
import categoryBooksReducer from "./slices/categoryBooksSlice";
import favoritesReducer from "./slices/favoritesSlice";
import lastestReducer from "./slices/lastestSlice";
import loginReducer from "./slices/loginSlice";
import reviewReducer from "./slices/reviewSlice";
import searchBooksReducer from "./slices/searchBookSlice";
import categoriesReducer from "./slices/categoriesSlice";
import mainReducer from "./slices/mainSlice";

const rootReducer = combineReducers({
  loginReducer,
  bookDetailReducer,
  categoryBooksReducer,
  searchBooksReducer,
  favoritesReducer,
  lastestReducer,
  reviewReducer,
  categoriesReducer,
  mainReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

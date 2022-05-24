import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  categoriesAPI,
  subCategoriesAPI,
} from "./../services/categoriesService";
import { mainAPI } from "./../services/mainService";
import bookDetailReducer from "./slices/bookDetailSlice";
import loginReducer from "./slices/loginSlice";
import categoryBooksReducer from "./slices/categoryBooksSlice";
import searchBooksReducer from "./slices/searchBookSlice";
import { searchAPI } from "../services/searchService";
import favoritesReducer from "./slices/favoritesSlice";
import lastestReducer from "./slices/lastestSlice";
import reviewReducer from "./slices/reviewSlice";

const rootReducer = combineReducers({
  loginReducer,
  bookDetailReducer,
  categoryBooksReducer,
  searchBooksReducer,
  favoritesReducer,
  lastestReducer,
  reviewReducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [mainAPI.reducerPath]: mainAPI.reducer,
  [subCategoriesAPI.reducerPath]: subCategoriesAPI.reducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(categoriesAPI.middleware)
        .concat(mainAPI.middleware)
        .concat(subCategoriesAPI.middleware)
        .concat(searchAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

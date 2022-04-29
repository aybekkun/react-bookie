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
import bookDetailReducer from "./bookDetailSlice";
import loginReducer from "./loginSlice";
import categoryBooksReducer from "./categoryBooksSlice";
import searchBooksReducer from "./searchBookSlice";
import { searchAPI } from "../services/searchService";

const rootReducer = combineReducers({
  loginReducer,
  bookDetailReducer,
  categoryBooksReducer,
  searchBooksReducer,
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

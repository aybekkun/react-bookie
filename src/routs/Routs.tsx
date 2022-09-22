import { Route, Routes } from "react-router-dom";
import BookDetail from "../pages/bookDetail/bookDetail";
import CategoriesPage from "../pages/categoriesPage/categoriesPage";
import Donate from "../pages/donate/donate";
import ErrorPage from "../pages/error/errorPage";
import Favorites from "../pages/favorites/favorites";
import Lastest from "../pages/lastest/lastest";
import LogIn from "../pages/login/login";
import Registration from "../pages/registration/registration";
import Review from "../pages/review/Review";
import Main from "../pages/main/main";

export const LOGIN_PAGE = "/login";
export const REGISTRATION_PAGE = "/registration";
export const DONATE = "/donate";
export const REVIEW = "/review";
export const FAVORITES = "/favorites";
export const LASTEST = "/lastest";

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category/:id" element={<CategoriesPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/lastest" element={<Lastest />} />
      <Route path="/review" element={<Review />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Rout;

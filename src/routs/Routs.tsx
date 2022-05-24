import { Route, Routes } from "react-router-dom";
import BookDetail from "../components/bookDetail/bookDetail";
import CategoriesPage from "../components/categoriesPage/categoriesPage";
import Donate from "../components/donate/donate";
import Favorites from "../components/favorites/favorites";
import Lastest from "../components/lastest/lastest";
import LogIn from "../components/login/login";
import Registration from "../components/registration/registration";
import Review from "../components/review/Review";
import Main from "../pages/main/main";

export const LOGIN_PAGE = "/login";
export const REGISTRATION_PAGE = "/registration";
export const DONATE = "/donate";
export const REVIEW = "/review";
export const FAVORITES = "/favorites";
export const LASTEST = "/lastest";

function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<CategoriesPage />} />
        <Route path="/category/:id/book/:id" element={<BookDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/lastest" element={<Lastest />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
}

export default Rout;

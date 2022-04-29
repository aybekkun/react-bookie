import { Route, Routes } from "react-router-dom";
import BookDetail from "../components/bookDetail/bookDetail";
import CategoriesPage from "../components/categoriesPage/categoriesPage";
import LogIn from "../components/login/login";
import Registration from "../components/registration/registration";
import Main from "../pages/main/main";
import "../style/dark.scss";

export const LOGIN_PAGE = "/login";
export const REGISTRATION_PAGE = "/registration";

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
      </Routes>
    </>
  );
}

export default Rout;

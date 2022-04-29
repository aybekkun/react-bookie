import React from "react";
import BookDetail from "../components/bookDetail/bookDetail";
import Rout from "../routs/Routs";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

const Pages = () => {
  return (
    <>
      <Header />
      <Rout />
      <Footer />
    </>
  );
};

export default Pages;

import React from "react";
import HeaderCategories from "../../components/headerCategories/headerCategories";
import HeaderNavbar from "../../components/headerNavbar/headerNavbar";
import HeaderInfo from './../../components/headerInfo/headerInfo';

const Header = () => {
  return (
    <>
      <HeaderInfo />
      <HeaderNavbar />
      <HeaderCategories />
    </>
  );
};

export default Header;

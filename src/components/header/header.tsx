import HeaderCategories from "../headerCategories/headerCategories";
import HeaderNavbar from "../headerNavbar/headerNavbar";
import HeaderInfo from '../headerInfo/headerInfo';

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

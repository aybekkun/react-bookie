import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
//@ts-ignore
import styles from "./headerCategories.module.scss";

const AdabtiveCategoriesComponent = () => {
  return (
    <div className={styles.dropdown}>
      <MenuIcon className={`${styles.burger}`} />

      <div className={styles.dropdownBurger}>
        <NavLink to={"category/1"}>Jahan adebiyati</NavLink>
        <NavLink to={"category/2"}>Ozbek adebiyati</NavLink>
        <NavLink to={"category/3"}>Qaraqalpaq ádebiyatı</NavLink>
        <NavLink to={"category/4"}>Qisqa audio kitaplar</NavLink>
        <div className={styles.dropdownInner}>
          <div className={styles.subbtn}>
            <ArrowDropDownIcon />
            <span>Qaraqalpaq folklori</span>
          </div>
          <div className={styles.dropdownBurgerInner}>
            <NavLink to={"category/5"}>Xaliq qosiqlari</NavLink>
            <NavLink to={"category/6"}>Ertekler</NavLink>
            <NavLink to={"category/7"}>Dastanlar</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdabtiveCategoriesComponent;

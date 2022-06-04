import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ErrorPage from "../../pages/error/errorPage";
import {
  fetchCategories,
  fetchSubCategories,
} from "../../store/thunks/categoriesThunk";
import { ICategoriesData, ISubData } from "../../types/categories";
//@ts-ignore
import styles from "./headerCategories.module.scss";

const HeaderCategories = () => {
  const dispatch = useAppDispatch();

  const { categories, subCategories, isLoading, error } = useAppSelector(
    (state) => state.categoriesReducer
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
  }, []);

  if (isLoading) {
    return (
      <div className={styles.categories}>
        <ul className={`${styles.categoriesInner} ${styles.container}`}>
          <li className={styles.category}>Jahan adebiyati</li>
          <li className={styles.category}>Ozbek adebiyati</li>
          <li className={styles.category}>Qaraqalpaq adebiyati</li>
          <li className={styles.category}>Qisqa audiolar</li>
          <li className={styles.category}>Qaraqalpaq falklori</li>
        </ul>
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.categories}>
      <ul className={`${styles.categoriesInner} ${styles.container}`}>
        {categories &&
          categories?.map((item: ICategoriesData, index: number) => {
            return (
              <div
                key={item.id}
                className={`${styles.category} ${styles.dropdown}`}
              >
                {subCategories && subCategories[index]?.length > 1 ? (
                  <li>
                    <div className={styles.categoryDiv}>
                      <ArrowDropDownIcon />
                      <button className={styles.dropbtn}>{item.name}</button>
                    </div>

                    <div className={styles.dropdownContent}>
                      {subCategories &&
                        subCategories[index]?.map((sub: ISubData) => {
                          return (
                            <NavLink to={`category/${sub.id}`} key={sub.id}>
                              {sub.name}
                            </NavLink>
                          );
                        })}
                    </div>
                  </li>
                ) : (
                  <li>
                    <NavLink to={`category/${item.id}`} key={item.id}>
                      {item.name}
                    </NavLink>
                  </li>
                )}
              </div>
            );
          })}
      </ul>

      <div className={styles.menu}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <span>Bookie.uz</span>
          </NavLink>
        </div>

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
      </div>
    </div>
  );
};

export default HeaderCategories;

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ErrorPage from "../../pages/error/errorPage";
import {
  fetchCategories,
  fetchSubCategories
} from "../../store/thunks/categoriesThunk";
import AdabtiveCategoriesComponent from "./adaptiveCategories";
import CategoriesComponent from "./categories";
//@ts-ignore
import styles from "./headerCategories.module.scss";

const HeaderCategories = () => {
  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector(
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
      <CategoriesComponent />
      <div className={styles.menu}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <span>Bookie.uz</span>
          </NavLink>
        </div>
        <AdabtiveCategoriesComponent />
      </div>
    </div>
  );
};

export default HeaderCategories;

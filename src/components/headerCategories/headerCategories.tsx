import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import {
  categoriesAPI,
  subCategoriesAPI,
} from "../../services/categoriesService";
import { categoryBooksSlice } from "../../store/slices/categoryBooksSlice";
//@ts-ignore
import styles from "./headerCategories.module.scss";

const HeaderCategories = () => {
  const dispatch = useAppDispatch();
  const { setIdCategoryBook, setPageCategoryBooks } =
    categoryBooksSlice.actions;
  const { data: category, isLoading } =
    categoriesAPI.useFetchAllCategoriesQuery(null);
  const { data: subCategory } =
    subCategoriesAPI.useFetchSubCategoriesQuery(null);

  const setPageAndIdCategory = (itemId: number) => {
    dispatch(setIdCategoryBook(itemId));
    dispatch(setPageCategoryBooks(1));
  };

  console.log(category);
  console.log(subCategory);

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

  return (
    <div className={`${styles.categories} `}>
      <ul className={`${styles.categoriesInner} ${styles.container}`}>
        {category &&
          category?.data.map((item: any, index: number) => {
            return (
              <div
                key={item.id}
                className={`${styles.category} ${styles.dropdown}`}
              >
                {subCategory?.data[index].length > 1 ? (
                  <li>
                    <button className={styles.dropbtn}>{item.name}</button>

                    <div className={styles.dropdownContent}>
                      {subCategory?.data[index].map(
                        (sub: any, index: number) => {
                          return (
                            <NavLink
                              to={`category/${sub.id}`}
                              key={sub.id}
                              onClick={() => setPageAndIdCategory(sub.id)}
                            >
                              {sub.name}
                            </NavLink>
                          );
                        }
                      )}
                    </div>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to={`category/${item.id}`}
                      key={item.id}
                      onClick={() => setPageAndIdCategory(item.id)}
                    >
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
            <NavLink to={"category/1"} onClick={() => setPageAndIdCategory(1)}>
              Jahan adebiyati
            </NavLink>
            <NavLink to={"category/2"} onClick={() => setPageAndIdCategory(2)}>
              Ozbek adebiyati
            </NavLink>
            <NavLink to={"category/3"} onClick={() => setPageAndIdCategory(3)}>
              Qaraqalpaq ádebiyatı
            </NavLink>
            <NavLink to={"category/4"} onClick={() => setPageAndIdCategory(4)}>
              Qisqa audio kitaplar
            </NavLink>
            <div className={styles.dropdownInner}>
              <div className={styles.subbtn}>Qaraqalpaq folklori</div>
              <div className={styles.dropdownBurgerInner}>
                <NavLink
                  to={"category/5"}
                  onClick={() => setPageAndIdCategory(5)}
                >
                  Xaliq qosiqlari
                </NavLink>
                <NavLink
                  to={"category/6"}
                  onClick={() => setPageAndIdCategory(6)}
                >
                  Ertekler
                </NavLink>
                <NavLink
                  to={"category/7"}
                  onClick={() => setPageAndIdCategory(7)}
                >
                  Dastanlar
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategories;

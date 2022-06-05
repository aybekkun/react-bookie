import { useAppSelector } from "../../hooks/hooks";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ICategoriesData, ISubData } from "../../types/categories";
//@ts-ignore
import styles from "./headerCategories.module.scss";
import { NavLink } from "react-router-dom";

const CategoriesComponent = () => {
  const { categories, subCategories } = useAppSelector(
    (state) => state.categoriesReducer
  );

  return (
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
  );
};

export default CategoriesComponent;

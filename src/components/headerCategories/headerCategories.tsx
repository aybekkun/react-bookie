import { Button, Fade, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
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
  const { setIdCategoryBook, setPageCategoryBooks } =
    categoryBooksSlice.actions;

  const dispatch = useAppDispatch();

  const { data: category } = categoriesAPI.useFetchAllCategoriesQuery(null);
  const { data: subCategory } =
    subCategoriesAPI.useFetchSubCategoriesQuery(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const setPageAndIdCategory = (itemId: number) => {
    dispatch(setIdCategoryBook(itemId));
    dispatch(setPageCategoryBooks(1));
  };

  return (
    <div className={styles.categories}>
      <ul className={`${styles.categoriesInner} ${styles.container}`}>
        {category &&
          category?.data.map((item: any, index: number) => {
            return (
              <div key={item.id}>
                {subCategory?.data[index].length > 1 ? (
                  <li>
                    <Button
                      id="fade-button"
                      aria-controls={open ? "fade-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className={styles.btn}
                    >
                      {item.name}
                    </Button>

                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      {subCategory?.data[index].map(
                        (sub: any, index: number) => {
                          return (
                            <NavLink
                              to={`category/${sub.id}`}
                              key={sub.id}
                              onClick={() => setPageAndIdCategory(sub.id)}
                              className={styles.subLinks}
                            >
                              <MenuItem onClick={handleClose}>
                                {sub.name}
                              </MenuItem>
                            </NavLink>
                          );
                        }
                      )}
                    </Menu>
                  </li>
                ) : (
                  <NavLink
                    to={`category/${item.id}`}
                    key={item.id}
                    onClick={() => setPageAndIdCategory(item.id)}
                  >
                    <li>{item.name}</li>
                  </NavLink>
                )}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default HeaderCategories;

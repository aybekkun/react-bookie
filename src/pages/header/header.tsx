import {
  Favorite,
  Instagram,
  Phone,
  Search,
  Telegram,
  WatchLater,
  YouTube,
} from "@material-ui/icons";
import { Button, Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { LOGIN_PAGE, REGISTRATION_PAGE } from "../../routs/Routs";
import {
  categoriesAPI,
  subCategoriesAPI,
} from "../../services/categoriesService";
import { bookDetailSlice } from "../../store/bookDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { categoryBooksSlice } from "./../../store/categoryBooksSlice";
import { fetchSearchBooks } from "./../../store/searchBookActionCreator";
import styles from "./header.module.css";

const Header = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const { setIdCategoryBook, setPageCategoryBooks } =
    categoryBooksSlice.actions;
  const { setIdBook } = bookDetailSlice.actions;
  const dispatch = useAppDispatch();
  const { data: category } = categoriesAPI.useFetchAllCategoriesQuery(null);
  const { data: subCategory } =
    subCategoriesAPI.useFetchSubCategoriesQuery(null);

  const { books, isLoading, error } = useAppSelector(
    (state) => state.searchBooksReducer
  );

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

  const debouncedValue = useDebounce<string>(searchWord, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchSearchBooks(searchWord));
  }, [debouncedValue]);

  console.log(books);

  return (
    <div>
      <div className={`${styles.headerInfo} ${styles.container}`}>
        <a href="tel:972411997" className={styles.headerContact}>
          <Phone />
          <span>+998 97 241 19 97</span>
        </a>

        <div className={styles.headerRight}>
          <div className={styles.headerSocial}>
            <a
              href="https://instagram.com/bookie_karakalpak?utm_medium=copy_link"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrb_94b-JGhG0X43CUx6CyA"
              target="_blank"
            >
              <YouTube />
            </a>
            <a href="https://t.me/bookie_nks" target="_blank">
              <Telegram />
            </a>
          </div>
          <div className={styles.headerAuth}>
            <NavLink to={LOGIN_PAGE}>
              <span>Kiriw</span>
            </NavLink>
            /
            <NavLink to={REGISTRATION_PAGE}>
              <span>Registraciya</span>
            </NavLink>
          </div>
        </div>
      </div>
      <section className={`${styles.navbarBg} ${styles.container}`}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <NavLink to={"/"}>
              <span>Bookie.uz</span>
            </NavLink>
          </div>
          <div className={styles.search}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                className={styles.searchBox}
                onChange={handleChange}
                value={searchWord}
              />
              <button>
                <Search />
              </button>
            </div>
            <div className={styles.searchResults}>
              {searchWord ? <ul>
                {books &&
                  books.data?.data.map((item: any, index: number) => {
                    return (
                      <NavLink
                        to={`/book/${item.id}`}
                        onClick={() => dispatch(setIdBook(item.id))}
                        key={item.id}
                      >
                        <li>{item.name}</li>
                      </NavLink>
                    );
                  })}
              </ul> : ''}
              
            </div>
          </div>

          <div className={styles.icons}>
            <a href="#">
              <Favorite />
            </a>
            <a href="#">
              <WatchLater />
            </a>
          </div>
        </div>
      </section>

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
                        className={styles.contacts}
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
    </div>
  );
};

export default Header;

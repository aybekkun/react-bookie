import { Favorite, Search, WatchLater } from "@material-ui/icons";
import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDebounce from "../../hooks/useDebounce";
import { fetchSearchBooks } from "../../store/actionCreators/searchBookActionCreator";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
//@ts-ignore
import styles from "./headerNavber.module.scss";

const HeaderNavbar = () => {
  const dispatch = useAppDispatch();
  const [searchWord, setSearchWord] = useState<string>("");
  const { books, isLoading, error } = useAppSelector(
    (state) => state.searchBooksReducer
  );
  const { setIdBook } = bookDetailSlice.actions;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const debouncedValue = useDebounce<string>(searchWord, 500);

  useEffect(() => {
    if (searchWord.length > 2) {
      dispatch(fetchSearchBooks(searchWord));
    }
  }, [debouncedValue]);

  console.log(books);

  return (
    <div className={`${styles.navbarBg} ${styles.container}`}>
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
            {searchWord.length > 0 ? (
              <ul>
                {books &&
                  books?.data.map((item: any, index: number) => {
                    return (
                      <li className={styles.searchItem} key={item.id}>
                        <NavLink
                          to={`/book/${item.id}`}
                          onClick={() => dispatch(setIdBook(item.id))}
                        >
                          <img src={item.images} alt={item.name} />
                          <span>{item.name}</span>
                        </NavLink>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              ""
            )}
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
    </div>
  );
};

export default HeaderNavbar;

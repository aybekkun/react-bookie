import { Close, Favorite, Search, WatchLater } from "@material-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDebounce from "../../hooks/useDebounce";
import { fetchSearchBooks } from "../../store/actionCreators/searchBookActionCreator";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
//@ts-ignore
import styles from "./headerNavbar.module.scss";
import { FAVORITES, LASTEST } from "./../../routs/Routs";

const HeaderNavbar = () => {
  const dispatch = useAppDispatch();
  const [searchWord, setSearchWord] = useState<string>("");
  const [visionSearch, setVisionSearch] = useState<boolean>(false);
  const { books, isLoading, error } = useAppSelector(
    (state) => state.searchBooksReducer
  );
  const { setIdBook } = bookDetailSlice.actions;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const handleClickBook = (idBook: number) => {
    dispatch(setIdBook(idBook));
    setVisionSearch(false);
  };

  const debouncedValue = useDebounce<string>(searchWord, 500);

  useEffect(() => {
    dispatch(fetchSearchBooks(searchWord));
    setVisionSearch(true);
  }, [debouncedValue]);

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
              onClick={() => setVisionSearch(true)}
            />
            <Close
              className={
                visionSearch
                  ? `${styles.visible} ${styles.closeBtn}`
                  : `${styles.hiden} ${styles.closeBtn}`
              }
              onClick={() => setSearchWord("")}
            />
            <button>
              <Search />
            </button>
          </div>
          <div className={styles.searchResults}>
            {searchWord.length > 0 ? (
              <ul
                className={
                  visionSearch ? `${styles.visible}` : `${styles.hiden}`
                }
              >
                {books &&
                  books?.data.map((item: any, index: number) => {
                    return (
                      <li className={styles.searchItem} key={item.id}>
                        <NavLink
                          to={`/book/${item.id}`}
                          onClick={() => handleClickBook(item.id)}
                        >
                          <img src={item.image} alt={item.name} />
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
          <NavLink to={FAVORITES}>
            <Favorite />
          </NavLink>
          <NavLink to={LASTEST}>
            <WatchLater />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;

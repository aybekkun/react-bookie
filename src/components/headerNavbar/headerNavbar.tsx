import { Close, Favorite, Search, WatchLater } from "@material-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDebounce from "../../hooks/useDebounce";
import { fetchSearchBooks } from "../../store/thunks/searchBookThunk";
import { ISearchData } from "../../types/search";
import { FAVORITES, LASTEST } from "./../../routs/Routs";
//@ts-ignore
import styles from "./headerNavbar.module.scss";

const HeaderNavbar = () => {
  const dispatch = useAppDispatch();
  const [searchWord, setSearchWord] = useState<string>("");
  const [visionSearch, setVisionSearch] = useState<boolean>(false);
  const { books, isLoading, error } = useAppSelector(
    (state) => state.searchBooksReducer
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const debouncedValue = useDebounce<string>(searchWord, 500);

  useEffect(() => {
    if (searchWord.length > 1) {
      dispatch(fetchSearchBooks(searchWord));
      setVisionSearch(true);
    }
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
                  books?.map((item: ISearchData) => {
                    return (
                      <li className={styles.searchItem} key={item.id}>
                        <NavLink
                          to={`/book/${item.id}`}
                          onClick={() => setVisionSearch(false)}
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

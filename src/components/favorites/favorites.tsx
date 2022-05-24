import { Person, Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
import { favoritesSlice } from "../../store/slices/favoritesSlice";
import CategorySkeleton from "../skeleton/categorySkeleton/categorySkeleton";
import Pagination from "../UI/pagination/pagination";
import { fetchFavorites } from "./../../store/actionCreators/favoritesActionCreator";
//@ts-ignore
import styles from "./favorites.module.scss";

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { setPageFavorites } = favoritesSlice.actions;
  const { setIdBook } = bookDetailSlice.actions;
  const { books, page, isLoading, error } = useAppSelector(
    (state) => state.favoritesReducer
  );
  const { user: userId } = useAppSelector((state) => state.loginReducer);

  const navigate = useNavigate();

  const pathToBookDetail = (idBook: number) => {
    navigate(`/book/${idBook}`);
  };

  const changePage = (page: number) => {
    dispatch(setPageFavorites(page));
  };

  const handleIdBook = (idBook: number) => {
    dispatch(setIdBook(idBook));
    pathToBookDetail(idBook);
  };

  useEffect(() => {
    dispatch(fetchFavorites({ userId, page }));
  }, [page]);

  console.log(books);

  if (isLoading) {
    return (
      <div className={styles.favoritesPage}>
        <h2>Favorites</h2>
        <CategorySkeleton />
        <CategorySkeleton />
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={books && books?.data.last_page}
        />
      </div>
    );
  }
  return (
    <div className={styles.favoritesPage}>
      <h2>Favorites</h2>
      <div className={styles.booksList}>
        {books &&
          books.data.data.map((item: any, index: number) => {
            return (
              <div className={styles.bookCard} key={item.id}>
                <div className={styles.imgBlock}>
                  <img
                    src={item.images}
                    alt="book-image"
                    onClick={() => handleIdBook(item.id)}
                  />
                </div>

                <p>{item.name}</p>
                <div className={styles.info}>
                  <div>
                    <Visibility />
                    <span>{item.view}</span>
                  </div>
                  <div>
                    <Person />
                    <span>{item.author_name}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.pagination}>
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={books && books?.data.last_page}
        />
      </div>
    </div>
  );
};

export default Favorites;

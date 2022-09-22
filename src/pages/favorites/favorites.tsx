import { useEffect } from "react";
import BookCard from "../../components/card/bookCard";
import CategorySkeleton from "../../components/skeleton/categorySkeleton/categorySkeleton";
import Pagination from "../../components/UI/pagination/pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { favoritesSlice } from "../../store/slices/favoritesSlice";
import { fetchFavorites } from "../../store/thunks/favoritesThunk";
import { IFavoriteData } from "../../types/favorites";
import ErrorPage from "../error/errorPage";
import styles from "./favorites.module.scss";

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { setPageFavorites } = favoritesSlice.actions;
  const { books, page, isLoading, error } = useAppSelector(
    (state) => state.favoritesReducer
  );
  const { userId } = useAppSelector((state) => state.loginReducer);
  
  const changePage = (page: number) => {
    dispatch(setPageFavorites(page));
  };

  useEffect(() => {
    dispatch(fetchFavorites({ userId, page }));
  }, [page]);

  if (isLoading) {
    return (
      <div className={styles.favoritesPage}>
        <h2>Favorites</h2>
        <CategorySkeleton />
        <CategorySkeleton />
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={books && books?.last_page}
        />
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.favoritesPage}>
      <h2>Favorites</h2>
      <div className={styles.booksList}>
        {books &&
          books?.data.map((item: IFavoriteData) => {
            return (
              <BookCard props={item} key={item.id} />
            );
          })}
      </div>
      <div className={styles.pagination}>
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={books && books?.last_page}
        />
      </div>
    </div>
  );
};

export default Favorites;

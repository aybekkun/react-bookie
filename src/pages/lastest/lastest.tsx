import { useEffect } from "react";
import BookCard from "../../components/card/bookCard";
import CategorySkeleton from "../../components/skeleton/categorySkeleton/categorySkeleton";
import Pagination from "../../components/UI/pagination/pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import styles from "../../pages/favorites/favorites.module.scss";
import { lastestSlice } from "../../store/slices/lastestSlice";
import { fetchLastest } from "../../store/thunks/lastestThunk";
import { ILastData } from "../../types/lastest";
import ErrorPage from "../error/errorPage";

const Lastest = () => {
  const dispatch = useAppDispatch();
  const { setPageLastest } = lastestSlice.actions;
  const { books, page, isLoading, error } = useAppSelector(
    (state) => state.lastestReducer
  );
  const { userId } = useAppSelector((state) => state.loginReducer);

  const changePage = (page: number) => {
    dispatch(setPageLastest(page));
  };

  useEffect(() => {
    dispatch(fetchLastest({ userId, page }));
  }, [page]);

  if (isLoading) {
    return (
      <div className={styles.favoritesPage}>
        <h2>Lastest</h2>
        <CategorySkeleton />
        <CategorySkeleton />
        <div className={styles.pagination}>
          <Pagination
            page={page}
            changePage={changePage}
            totalPages={books && books?.last_page}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.favoritesPage}>
      <h2>Lastest</h2>
      <div className={styles.booksList}>
        {books &&
          books?.data.map((item: ILastData) => {
            return <BookCard props={item} key={item.id} />;
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

export default Lastest;

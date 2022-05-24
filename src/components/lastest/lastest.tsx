import { Person, Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchLastest } from "../../store/actionCreators/lastestActionCreator";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
//@ts-ignore
import styles from "../favorites/favorites.module.scss";
import CategorySkeleton from "../skeleton/categorySkeleton/categorySkeleton";
import Pagination from "../UI/pagination/pagination";
import { lastestSlice } from "./../../store/slices/lastestSlice";

const Lastest = () => {
  const dispatch = useAppDispatch();
  const { setPageLastest } = lastestSlice.actions;
  const { setIdBook } = bookDetailSlice.actions;
  const { books, page, isLoading, error } = useAppSelector(
    (state) => state.lastestReducer
  );
  const { user: userId } = useAppSelector((state) => state.loginReducer);

  const navigate = useNavigate();

  const pathToBookDetail = (idBook: number) => {
    navigate(`/book/${idBook}`);
  };

  const changePage = (page: number) => {
    dispatch(setPageLastest(page));
  };

  const handleIdBook = (idBook: number) => {
    dispatch(setIdBook(idBook));
    pathToBookDetail(idBook);
  };

  useEffect(() => {
    dispatch(fetchLastest({ userId, page }));
  }, [page]);

  console.log(books);

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
            totalPages={books && books?.data.last_page}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.favoritesPage}>
      <h2>Lastest</h2>
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

export default Lastest;

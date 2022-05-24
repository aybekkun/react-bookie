import { Person, Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCategoryBooks } from "../../store/actionCreators/categoryBooksActionCreator";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
import { categoryBooksSlice } from "../../store/slices/categoryBooksSlice";
import Pagination from "../UI/pagination/pagination";
import SkeletonElement from "../UI/skeleton/SkeletonElement";
import CategorySkeleton from "./../skeleton/categorySkeleton/categorySkeleton";
//@ts-ignore
import styles from "./categoriesPage.module.scss";

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { setIdBook } = bookDetailSlice.actions;
  const { setPageCategoryBooks } = categoryBooksSlice.actions;
  const { books, id, page, isLoading, error } = useAppSelector(
    (state) => state.categoryBooksReducer
  );
  const navigate = useNavigate();

  const pathToBookDetail = (idBook: number) => {
    navigate(`/book/${idBook}`);
  };

  const changePage = (page: number) => {
    dispatch(setPageCategoryBooks(page));
  };

  const handleIdBook = (idBook: number) => {
    dispatch(setIdBook(idBook));
    pathToBookDetail(idBook);
  };

  useEffect(() => {
    dispatch(fetchCategoryBooks({ id, page }));
  }, [id, page]);

  console.log(books);

  if (isLoading) {
    return (
      <div className={styles.categoriesPage}>
        <SkeletonElement type="nameCategory" />
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
    <div className={styles.categoriesPage}>
      <h2>{books && books.data.data[0].sub_category_name}</h2>
      <div className={styles.booksList}>
        {books &&
          books.data.data.map((item: any, index: number) => {
            return (
              <div className={styles.bookCard} key={item.id}>
                <div className={styles.imgBlock}>
                  <img
                    src={item.image}
                    alt="book-image"
                    onClick={() => handleIdBook(item.id)}
                  />
                </div>

                <p className={styles.name}>{item.name}</p>
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

export default CategoriesPage;

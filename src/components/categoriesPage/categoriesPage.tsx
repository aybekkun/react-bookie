import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { bookDetailSlice } from "../../store/bookDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Pagination from "../UI/pagination/pagination";
import { fetchCategoryBooks } from "./../../store/categoryBooksActionCreator";
import { categoryBooksSlice } from "./../../store/categoryBooksSlice";
import styles from "./categoriesPage.module.scss";

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { setIdBook } = bookDetailSlice.actions;
  const { setPageCategoryBooks } = categoryBooksSlice.actions;

  const { books, id, page, isLoading, error } = useAppSelector(
    (state) => state.categoryBooksReducer
  );

  const changePage = (page: number) => {
    dispatch(setPageCategoryBooks(page));
  };

  useEffect(() => {
    dispatch(fetchCategoryBooks({ id }));
  }, [id, page]);

  useEffect(() => {
    dispatch(fetchCategoryBooks({ id, page }));
  }, [page]);

  console.log(books.data);
  console.log(page);

  return (
    <div className={styles.categoriesPage}>
      <div className={styles.booksList}>
        {books &&
          books.data.data.map((item: any, index: number) => {
            return (
              <div className={styles.bookCard} key={item.id}>
                <NavLink
                  to={`book/${item.id}`}
                  onClick={() => dispatch(setIdBook(item.id))}
                >
                  <img src={item.images} alt="book-image" />
                </NavLink>

                <p>{item.name}</p>
                <div>
                  <span>2min</span>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={books && books?.data.last_page}
      />
    </div>
  );
};

export default CategoriesPage;

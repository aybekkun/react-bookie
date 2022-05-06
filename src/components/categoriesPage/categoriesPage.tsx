import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Pagination from "../UI/pagination/pagination";
import { categoryBooksSlice } from "../../store/slices/categoryBooksSlice";
import { fetchCategoryBooks } from "../../store/actionCreators/categoryBooksActionCreator";
//@ts-ignore
import styles from "./categoriesPage.module.scss";
import CategorySkeleton from "./../skeleton/categorySkeleton/categorySkeleton";

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
    dispatch(fetchCategoryBooks({ id, page }));
  }, [id, page]);

  console.log(books);

  if (isLoading) {
    return (
      <div className={styles.categoriesPage}>
        <CategorySkeleton />
        <CategorySkeleton />
      </div>
    );
  }

  return (
    <div className={styles.categoriesPage}>
      <h2></h2>
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
                  <span>Pushkin</span>
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

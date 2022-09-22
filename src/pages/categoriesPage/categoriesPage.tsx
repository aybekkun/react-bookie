import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import BookCard from "../../components/card/bookCard";
import CategorySkeleton from "../../components/skeleton/categorySkeleton/categorySkeleton";
import Pagination from "../../components/UI/pagination/pagination";
import SkeletonElement from "../../components/UI/skeleton/SkeletonElement";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { categoryBooksSlice } from "../../store/slices/categoryBooksSlice";
import { fetchCategoryBooks } from "../../store/thunks/categoryBooksThunk";
import { ICategoryBookData } from "../../types/categoryBooks";
import ErrorPage from "../error/errorPage";
import styles from "./categoriesPage.module.scss";

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{ id?: string }>();
  const { setPageCategoryBooks } = categoryBooksSlice.actions;
  const { books, page, isLoading, error } = useAppSelector(
    (state) => state.categoryBooksReducer
  );

  const changePage = (page: number) => {
    dispatch(setPageCategoryBooks(page));
  };

  useEffect(() => {
    dispatch(fetchCategoryBooks({ id: params.id, page: page }));
  }, [params.id, page]);

  useEffect(() => {
    dispatch(fetchCategoryBooks({ id: params.id, page: page }));
  }, []);

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
    <div className={styles.categoriesPage}>
      <Helmet>
        <title>{books && books?.data[0]?.sub_category_name}</title>
        <meta name="description" content={books && books?.data[0]?.sub_category_name} />
        <meta
          name="keywords"
          content="Kitap, Audiokitap, bookie, online audiokitap, Qaraqalpaq"
        />
      </Helmet>
      <h2>{books && books?.data[0]?.sub_category_name}</h2>
      <div className={styles.booksList}>
        {books &&
          books?.data.map((item: ICategoryBookData) => {
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

export default CategoriesPage;

import { useEffect } from "react";
import "react-h5-audio-player/lib/styles.css";
import { useParams } from "react-router-dom";
import BookCard from "../../components/card/bookCard";
import BookDetailSkeleton from "../../components/skeleton/bookDetailSkeleton/bookDetailSkeleton";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBookDetail } from "../../store/thunks/bookDetailThunk";
import { IBookDetailSimular } from "../../types/bookDetail";
import ErrorPage from "../error/errorPage";
import LogIn from "../login/login";
import BookAudio from "./bookAudio";
import styles from "./bookDetail.module.scss";
import BookInfo from "./bookInfo";

const BookDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { simular, isLoading, error } = useAppSelector(
    (state) => state.bookDetailReducer
  );
  const { isUserLogin } = useAppSelector((state) => state.loginReducer);

  useEffect(() => {
    dispatch(fetchBookDetail(params.id));
  }, [params.id]);

  if (!isUserLogin) {
    return <LogIn />;
  }

  if (isLoading) {
    return <BookDetailSkeleton />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.bookDetail}>
      <BookInfo />
      <BookAudio />
      <div className={styles.booksList}>
        {simular &&
          simular?.map((item: IBookDetailSimular) => {
            return <BookCard props={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default BookDetail;

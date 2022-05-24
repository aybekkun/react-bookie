import {
  AccessTime,
  Favorite,
  FavoriteBorder,
  Person,
  Visibility,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBookDetail } from "../../store/actionCreators/bookDetailActionCreator";
import {
  createFavorite,
  deleteFavorite,
} from "../../store/actionCreators/favoritesActionCreator";
import AudioPlayerComponent from "./audioPlayer";
//@ts-ignore
import styles from "./bookDetail.module.scss";
import BookDetailSkeleton from "./../skeleton/bookDetailSkeleton/bookDetailSkeleton";
import { useNavigate } from "react-router-dom";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";

const BookDetail = () => {
  const [song, setSong] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { book, id, isLoading, error } = useAppSelector(
    (state) => state.bookDetailReducer
  );
  const { user: userId } = useAppSelector((state) => state.loginReducer);
  const { setIdBook } = bookDetailSlice.actions;

  const [visibleFavorite, setVisibleFavorite] = useState<boolean>(false);

  const handleCreateFavorite = () => {
    dispatch(createFavorite({ userId, bookId: id }));
    setVisibleFavorite(!visibleFavorite);
  };

  const handleDeleteFavorite = () => {
    dispatch(deleteFavorite({ userId, bookId: id }));
    setVisibleFavorite(!visibleFavorite);
  };

  const navigate = useNavigate();

  const pathToBookDetail = (idBook: number) => {
    navigate(`/book/${idBook}`);
  };

  const handleIdBook = (idBook: number) => {
    dispatch(setIdBook(idBook));
    pathToBookDetail(idBook);
  };

  useEffect(() => {
    dispatch(fetchBookDetail(id));
  }, [id]);

  console.log(book && book?.data.simular);

  if (isLoading) {
    return <BookDetailSkeleton />;
  }

  if (error) {
    return <div>Ошибка стр книги</div>;
  }

  return (
    <div className={styles.bookDetail}>
      <div className={styles.bookInfo}>
        <div className={styles.bookHeader}>
          <h2>{book && book?.data?.book.name}</h2>
          {visibleFavorite ? (
            <Favorite onClick={handleDeleteFavorite} />
          ) : (
            <FavoriteBorder onClick={handleCreateFavorite} />
          )}
        </div>

        <div className={styles.bookBody}>
          <img src={book && book?.data.book.images} alt="book" />
          <div>
            <div className={styles.bookDescription}>
              «451 градус по Фаренгейту» — научно-фантастический
              роман-антиутопия Рэя Брэдбери, изданный в 1953 году. Роман
              описывает американское общество близкого будущего, в котором книги
              находятся под запретом; «пожарные», к числу которых принадлежит и
              главный герой Гай Монтэг, сжигают любые найденные книги.
              {book && book?.data.book.description}
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcons}>
                <AccessTime />: 28:13
              </div>
              <div className={styles.persons}>
                <div className={styles.infoIcons}>
                  <Person />
                  {book && book?.data.book.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bookAudio}>
        <div className={styles.audiosSelect}>
          <ul>
            {book &&
              book?.data.audios.map((item: any, index: number) => {
                return (
                  <li key={item.id} onClick={() => setSong(index)}>
                    <span>{item.title}</span>
                    <span>23:12</span>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className={styles.playerContainer}>
          <AudioPlayerComponent song={song} />
        </div>
      </div>

      <div className={styles.booksList}>
        {book &&
          book?.data.simular.map((item: any, index: number) => {
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
    </div>
  );
};

export default BookDetail;

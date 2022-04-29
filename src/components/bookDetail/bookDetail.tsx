import { AccessTime, FavoriteBorder, Person } from "@material-ui/icons";
import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import bookImg from "../../assets/img/romantic-book.jpg";
import { fetchBookDetail } from "./../../store/bookDetailActionCreator";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import styles from "./bookDetail.module.scss";

const BookDetail = () => {
  const dispatch = useAppDispatch();
  const { book, id, isLoading, error } = useAppSelector(
    (state) => state.bookDetailReducer
  );

  useEffect(() => {
    dispatch(fetchBookDetail(id));
  }, []);

  console.log(book?.data);

  return (
    <div className={styles.bookDetail}>
      <div className={styles.bookInfo}>
        <div className={styles.bookHeader}>
          <h2>{book && book?.data.book.name}</h2>
          <div>
            <FavoriteBorder />
          </div>
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
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <span>23:12</span>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className={styles.player}>
          <AudioPlayer
            src={book && book?.data.audios[0].audio}
            // onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

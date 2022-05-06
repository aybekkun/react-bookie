import { AccessTime, FavoriteBorder, Person } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { fetchBookDetail } from "../../store/actionCreators/bookDetailActionCreator";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
//@ts-ignore
import styles from "./bookDetail.module.scss";
import { Skeleton } from "@mui/material";
import AudioPlayerComponent from "./audioPlayer";

const BookDetail = () => {
  const [song, setSong] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { book, id, isLoading, error } = useAppSelector(
    (state) => state.bookDetailReducer
  );

  useEffect(() => {
    dispatch(fetchBookDetail(id));
  }, [id]);

  console.log(book);

  if (error) {
    return <div>Ошибка стр книги</div>;
  }

  return (
    <div className={styles.bookDetail}>
      <div className={styles.bookInfo}>
        <div className={styles.bookHeader}>
          <h2>{book && book?.data?.book.name}</h2>
          <FavoriteBorder />
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
    </div>
  );
};

export default BookDetail;

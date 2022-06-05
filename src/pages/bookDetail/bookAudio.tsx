import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { IBookDetailAudios } from "../../types/bookDetail";
import AudioPlayerComponent from "./audioPlayer";
//@ts-ignore
import styles from "./bookDetail.module.scss";

const BookAudio = () => {
  const [song, setSong] = useState<number>(0);

  const { audios } = useAppSelector(
    (state) => state.bookDetailReducer
  );

  return (
    <div className={styles.bookAudio}>
      <div className={styles.audiosSelect}>
        <ul>
          {audios &&
            audios?.map((item: IBookDetailAudios, index: number) => {
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
  );
};

export default BookAudio;

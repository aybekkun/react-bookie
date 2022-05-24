import { FC } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useAppSelector } from "../../hooks/hooks";
//@ts-ignore
import styles from "./bookDetail.module.scss";

interface AudioPlayerProps {
  song: number;
}

const AudioPlayerComponent: FC<AudioPlayerProps> = ({ song }) => {
  const { book } = useAppSelector((state) => state.bookDetailReducer);

  return (
    <AudioPlayer
      className={styles.audioPlayer}
      // src={book && book?.data.audios[song].audio}
    />
  );
};

export default AudioPlayerComponent;

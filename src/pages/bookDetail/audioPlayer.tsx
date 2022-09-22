import { FC } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useAppSelector } from "../../hooks/hooks";
import styles from "./bookDetail.module.scss";

interface AudioPlayerProps {
  song: number;
}

const AudioPlayerComponent: FC<AudioPlayerProps> = ({ song }) => {
  const { audios } = useAppSelector((state) => state.bookDetailReducer);

  return (
    <AudioPlayer
      className={styles.audioPlayer}
      src={audios.length > 0 ? audios[song].audio : ""}
    />
  );
};

export default AudioPlayerComponent;

import { Person, Visibility } from "@material-ui/icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { createLastest } from "../../store/thunks/lastestThunk";
import { IBookCard } from "../../types";
//@ts-ignore
import styles from "./bookCard.module.scss";

const BookCard: FC<IBookCard> = ({ props }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userId, isUserLogin } = useAppSelector((state) => state.loginReducer);

  const pathToBookDetail = (idBook: number) => {
    navigate(`/book/${idBook}`);
    if (isUserLogin) {
      dispatch(createLastest({ userId: userId, bookId: idBook }));
    }
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.imgBlock}>
        <img
          src={props.image}
          alt={props.name}
          onClick={() => pathToBookDetail(props.id)}
        />
      </div>

      <p onClick={() => pathToBookDetail(props.id)} className={styles.name}>
        {props.name}
      </p>
      <div className={styles.info}>
        <div className={styles.view}>
          <Visibility />
          <span>{props.view}</span>
        </div>
        <div className={styles.author}>
          <Person />
          <span>{props.author_name}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

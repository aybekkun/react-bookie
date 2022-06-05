import {
  AccessTime,
  Favorite,
  FavoriteBorder,
  Person
} from "@material-ui/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { createFavorite, deleteFavorite } from "../../store/thunks/favoritesThunk";
//@ts-ignore
import styles from "./bookDetail.module.scss";


const BookInfo = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { book } = useAppSelector(
    (state) => state.bookDetailReducer
  );
  const { userId } = useAppSelector((state) => state.loginReducer);
  const [visibleFavorite, setVisibleFavorite] = useState<boolean>(false);
  const handleCreateFavorite = () => {
    dispatch(createFavorite({ userId, bookId: params.id }));
    setVisibleFavorite(!visibleFavorite);
  };

  const handleDeleteFavorite = () => {
    dispatch(deleteFavorite({ userId, bookId: params.id }));
    setVisibleFavorite(!visibleFavorite);
  };

  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookHeader}>
        <h2>{book && book?.name}</h2>
        {visibleFavorite ? (
          <Favorite onClick={handleDeleteFavorite} />
        ) : (
          <FavoriteBorder onClick={handleCreateFavorite} />
        )}
      </div>

      <div className={styles.bookBody}>
        <img src={book && book?.image} alt="book" />
        <div>
          <div className={styles.bookDescription}>
            {book && book?.description}
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoIcons}>
              <AccessTime />: 28:13
            </div>
            <div className={styles.persons}>
              <div className={styles.infoIcons}>
                <Person />
                {book && book?.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;

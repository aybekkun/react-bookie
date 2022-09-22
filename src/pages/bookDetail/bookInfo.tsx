import {
  AccessTime,
  Favorite,
  FavoriteBorder,
  Person,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  createFavorite,
  deleteFavorite,
  fetchAllFavorites,
} from "../../store/thunks/favoritesThunk";
import { Helmet } from "react-helmet";
import styles from "./bookDetail.module.scss";

const BookInfo = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { book } = useAppSelector((state) => state.bookDetailReducer);
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

  const isFavorite = async () => {
    const { payload } = await dispatch<any>(fetchAllFavorites(userId));

    for (let i = 0; i < payload.length; i++) {
      if (payload[i].id === book.id) {
        setVisibleFavorite(true);
        break;
      }
    }
  };

  useEffect(() => {
    isFavorite();
  }, []);

  return (
    <div className={styles.bookInfo}>
      <Helmet>
        <title>{book && book?.name}</title>
        <meta name="description" content={book && book?.description}/>
        <meta name="keywords" content="Kitap, Audiokitap, bookie, online audiokitap, Qaraqalpaq"/>
      </Helmet>
      <div className={styles.bookHeader}>
        <h2>{book && book?.name}</h2>
        {visibleFavorite ? (
          <Favorite onClick={handleDeleteFavorite} />
        ) : (
          <FavoriteBorder onClick={handleCreateFavorite} />
        )}
      </div>

      <div className={styles.bookBody}>
        <img src={book && book?.image} alt={book && book?.name} />
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

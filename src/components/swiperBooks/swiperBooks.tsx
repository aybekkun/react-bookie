import { Person, Visibility } from "@material-ui/icons";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { createLastest } from "../../store/actionCreators/lastestActionCreator";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
import "./swiper.css";
//@ts-ignore
import styles from "./swiperBooks.module.scss";

interface SwiperBooksProp {
  books: any;
  text: string;
}

const SwiperBooks: FC<SwiperBooksProp> = ({ books, text }) => {
  const { setIdBook } = bookDetailSlice.actions;
  const dispatch = useAppDispatch();

  const { user: userId, isUserLogin } = useAppSelector(
    (state) => state.loginReducer
  );

  const handleBookId = (id: number) => {
    if (isUserLogin) {
      dispatch(createLastest({ userId: userId, bookId: id }));
    }
    dispatch(setIdBook(id));
  };

  return (
    <div className={`${styles.container} ${styles.sliders}`}>
      <div className={styles.popularBooks}>
        <div className={styles.topText}>
          <h3>{text}</h3>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <div className={styles.booksList}>
            {books &&
              books.map((item: any, index: number) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className={styles.bookCard}
                      onClick={() => handleBookId(item.id)}
                    >
                      <NavLink to={`/book/${item.id}`}>
                        <img src={item.image} alt="book-image" />
                      </NavLink>

                      <p>{item.name}</p>
                      <div>
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
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperBooks;

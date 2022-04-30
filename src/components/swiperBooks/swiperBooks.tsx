import React, { FC } from "react";
//@ts-ignore
import styles from "./swiperBooks.module.scss";
//@ts-ignore
import book from "../../assets/img/romantic-book.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { bookDetailSlice } from "../../store/slices/bookDetailSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { NavLink } from "react-router-dom";

interface SwiperBooksProp {
  books: any;
  text: string;
}

const SwiperBooks: FC<SwiperBooksProp> = ({ books, text }) => {
  const { setIdBook } = bookDetailSlice.actions;
  const dispatch = useAppDispatch();

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
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
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
                      onClick={() => dispatch(setIdBook(item.id))}
                    >
                      <NavLink to={`/book/${item.id}`}>
                        <img src={item.images} alt="book-image" />
                      </NavLink>

                      <p>{item.name}</p>
                      <span>2min</span>
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

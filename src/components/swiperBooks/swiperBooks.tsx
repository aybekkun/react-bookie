import { FC } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMainBook } from "../../types/main";
import BookCard from "../card/bookCard";
import "./swiper.css";
import styles from "./swiperBooks.module.scss";

interface SwiperBooksProp {
  books: IMainBook[];
  text: string;
}

const SwiperBooks: FC<SwiperBooksProp> = ({ books, text }) => {
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
              books?.map((item: IMainBook) => {
                return (
                  <SwiperSlide key={item.id}>
                    <BookCard props={item}/>
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

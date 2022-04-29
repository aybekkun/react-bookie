import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import book from "../../assets/img/romantic-book.jpg";
import { IMain } from "../../models/IMain";
import { categoriesAPI } from "./../../services/categoriesService";
import { mainAPI } from "./../../services/mainService";
import styles from "./main.module.css";
import "./swiper.css";
import SwiperBooks from "./swiperBooks";

const Main = () => {
  const { data: mainBook } = mainAPI.useFetchAllMainBooksQuery(null);

  console.log(mainBook);

  return (
    <div className={styles.content}>
      <SwiperBooks books={mainBook?.data.lastest} text={"Trend Kitaplar"} />

      <SwiperBooks
        books={mainBook?.data.views}
        text={"Songi qosilgan Kitaplar"}
      />

      <SwiperBooks
        books={mainBook?.data.lastest}
        text={"Qisqa audio kitaplar"}
      />
    </div>
  );
};

export default Main;

import React from "react";
import SwiperBooks from "../../components/swiperBooks/swiperBooks";
import { mainAPI } from "./../../services/mainService";
//@ts-ignore
import styles from "./main.module.scss";

const Main = () => {
  const { data: mainBook } = mainAPI.useFetchAllMainBooksQuery(null);

  return (
    <>
      <div className={styles.aboutBookie}>
        <div>
          <h2>Bookie</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>

        <iframe
          src="https://youtube.com/embed/GJxQnrO0QGc"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
      <SwiperBooks books={mainBook?.data.lastest} text={"Trend Kitaplar"} />
      <SwiperBooks
        books={mainBook?.data.views}
        text={"Songi qosilgan Kitaplar"}
      />
      <SwiperBooks
        books={mainBook?.data.lastest}
        text={"Qisqa audio kitaplar"}
      />
    </>
  );
};

export default Main;

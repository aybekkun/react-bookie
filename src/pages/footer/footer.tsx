import { Instagram, Telegram, YouTube } from "@material-ui/icons";
import React from "react";
//@ts-ignore
import styles from "./footer.module.scss";
//@ts-ignore
import googlePlay from "../../assets/img/google-play.jpg";

const Footer = () => {
  return (
    <section className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.contacts}>
          <p>Контакты: +998 97 241 19 97</p>
          <p>&copy; 2022 Bookie. | Разработка</p>
        </div>

        <img src={googlePlay} alt="google-play" />

        <div className={styles.icon}>
          <a
            href="https://www.instagram.com/bookie_karakalpak/?utm_medium=copy_link"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </a>
          <a href="https://t.me/bookie_nks" target="_blank">
            <Telegram fontSize="large" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCrb_94b-JGhG0X43CUx6CyA"
            target="_blank"
          >
            <YouTube fontSize="large" />
          </a>
        </div>

        <div className={styles.about}>
          <p>О нас</p>
          <p>Отзыв</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

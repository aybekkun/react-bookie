import MainSceleton from "../../components/skeleton/mainSkeleton/mainSkeleton";
import SwiperBooks from "../../components/swiperBooks/swiperBooks";
import SkeletonVideo from "../../components/UI/skeleton/skeletonVideo";
import mainVideo from "../../assets/bookie.mp4";
import styles from "./main.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchMain } from "../../store/thunks/mainThunk";
import { Helmet } from "react-helmet";

const Main = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading } = useAppSelector((state) => state.mainReducer);

  useEffect(() => {
    dispatch(fetchMain());
  }, []);

  if (isLoading) {
    return (
      <>
        <div className={styles.aboutBookie}>
          
          <div className={styles.description}>
            <p>
              <b>
                <p>Áziz doslar! Húrmetli ıqlasbentler!</p>
              </b>
              Biziń «Bookie» qaraqalpaq tilindegi audiokitaplar platformasına
              xosh kelipsiz! Biz bul platformada qaraqalpaq tilinde basıp
              shıǵarılǵan jáhán, ózbek hám qaraqalpaq ádebiyatınıń dúrdana
              shıǵarmaları jáne qaraqalpaq awızeki dóretiwshiliginiń hasıl
              marjanlarınınıń audio variantların jaratamız. Jáhán, ózbek hám
              qaraqalpaq kórkem-ádebiy dóretpeleri, sonday-aq qaraqalpaq
              folklorınıń dúrdana shıǵarmalarınıń elektron variantların islep
              shıǵamız hám saytqa jaylastıramız. Kitapqumarlar arasında dawrıqqa
              aylanǵan Jáhán ádebiyatınıń bestseller kitaplarınan 10-15 minutlıq
              qısqa úzindi audiolar berip baramız.
            </p>
          </div>

          <div className={styles.iframe}>
            <SkeletonVideo theme="light" />
          </div>
        </div>

        <MainSceleton text={"Trend Kitaplar"} />
        <MainSceleton text={"Songi qosilgan Kitaplar"} />
        <MainSceleton text={"Qisqa audio kitaplar"} />
      </>
    );
  }

  return (
    <>
      <div className={styles.aboutBookie}>
      <Helmet>
            <title>Bookie</title>
            <meta
              name="description"
              content="Biziń «Bookie» qaraqalpaq tilindegi audiokitaplar platformasına
              xosh kelipsiz! Biz bul platformada qaraqalpaq tilinde basıp
              shıǵarılǵan jáhán, ózbek hám qaraqalpaq ádebiyatınıń dúrdana
              shıǵarmaları jáne qaraqalpaq awızeki dóretiwshiliginiń hasıl
              marjanlarınınıń audio variantların jaratamız. Jáhán, ózbek hám
              qaraqalpaq kórkem-ádebiy dóretpeleri, sonday-aq qaraqalpaq
              folklorınıń dúrdana shıǵarmalarınıń elektron variantların islep
              shıǵamız hám saytqa jaylastıramız. Kitapqumarlar arasında dawrıqqa
              aylanǵan Jáhán ádebiyatınıń bestseller kitaplarınan 10-15 minutlıq
              qısqa úzindi audiolar berip baramız."
            />
            <meta
              name="keywords"
              content="Kitap, Audiokitap, bookie, online audiokitap, Qaraqalpaq"
            />
          </Helmet>
        <div className={styles.description}>
          <p>
            <b>
              <p>Áziz doslar! Húrmetli ıqlasbentler!</p>
            </b>
            Biziń «Bookie» qaraqalpaq tilindegi audiokitaplar platformasına xosh
            kelipsiz! Biz bul platformada qaraqalpaq tilinde basıp shıǵarılǵan
            jáhán, ózbek hám qaraqalpaq ádebiyatınıń dúrdana shıǵarmaları jáne
            qaraqalpaq awızeki dóretiwshiliginiń hasıl marjanlarınınıń audio
            variantların jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy
            dóretpeleri, sonday-aq qaraqalpaq folklorınıń dúrdana
            shıǵarmalarınıń elektron variantların islep shıǵamız hám saytqa
            jaylastıramız. Kitapqumarlar arasında dawrıqqa aylanǵan Jáhán
            ádebiyatınıń bestseller kitaplarınan 10-15 minutlıq qısqa úzindi
            audiolar berip baramız.
          </p>
        </div>

        <div className={styles.iframe}>
          <video controls src={mainVideo} />
        </div>
      </div>

      <SwiperBooks books={books?.lastest} text={"Trend Kitaplar"} />
      <SwiperBooks books={books?.views} text={"Songi qosilgan Kitaplar"} />
      <SwiperBooks books={books?.lastest} text={"Qisqa audio kitaplar"} />
    </>
  );
};

export default Main;

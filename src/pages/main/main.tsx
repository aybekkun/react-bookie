import React from "react";
import MainSceleton from "../../components/skeleton/mainSkeleton/mainSkeleton";
import SwiperBooks from "../../components/swiperBooks/swiperBooks";
import { mainAPI } from "./../../services/mainService";

//@ts-ignore
import styles from "./main.module.scss";

const Main = () => {
  const {
    data: mainBook,
    isLoading,
    error,
  } = mainAPI.useFetchAllMainBooksQuery(null);

  console.log(mainBook);

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className={styles.aboutBookie}>
  //         <div className={styles.asd}>
  //           <p>
  //             <b>Bookie - </b>
  //             It is a long established fact that a reader will be distracted by
  //             the readable content of a page when looking at its layout. The
  //             point of using Lorem Ipsum is that it has a more-or-less normal
  //             distribution of letters, as opposed to using 'Content here,
  //             content here', making it look like readable English. Many desktop
  //             publishing packages and web page editors now use Lorem Ipsum as
  //             their default model text, and a search for 'lorem ipsum' will
  //             uncover many web sites still in their infancy. Various versions
  //             have evolved over the years, sometimes by accident, sometimes on
  //             purpose (injected humour and the like).
  //           </p>
  //         </div>

  //         <iframe
  //           src="https://youtube.com/embed/GJxQnrO0QGc"
  //           frameBorder="0"
  //           allow="autoplay; encrypted-media"
  //           allowFullScreen
  //           title="video"
  //         />
  //       </div>

  //       <MainSceleton text={"Trend Kitaplar"} />
  //       <MainSceleton text={"Songi qosilgan Kitaplar"} />
  //       <MainSceleton text={"Qisqa audio kitaplar"} />
  //     </>
  //   );
  // }

  return (
    <>
      <div className={styles.aboutBookie}>
        <div>
          <p>
            <b>Áziz doslar! Húrmetli ıqlasbentler!</b> Biziń «Bookie» qaraqalpaq
            tilindegi audiokitaplar platformasına xosh kelipsiz! Biz bul
            platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek hám
            qaraqalpaq ádebiyatınıń dúrdana shıǵarmaları jáne qaraqalpaq awızeki
            dóretiwshiliginiń hasıl marjanlarınınıń audio variantların
            jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri,
            sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron
            variantların islep shıǵamız hám saytqa jaylastıramız. Kitapqumarlar
            arasında dawrıqqa aylanǵan Jáhán ádebiyatınıń bestseller
            kitaplarınan 10-15 minutlıq qısqa úzindi audiolar berip baramız. Hár
            qıylı temada kishigirim joybarlar arqalı nama qosıqlarǵa aylanǵan
            dóretpelerdiń avtorları hám qosıqshıları menen tanıstırıp baramız.
            Dúnyanı ózgertken hám progresske salmaqlı úles qosqan ataqlı
            shaxslardıń ómiri hám xızmetleri haqqında qısqa maǵlıwmatlar berip
            baramız. Bul materiallardıń barlıǵın sizler tek ǵana qaraqalpaq
            tilinde tńlaw imkaniyatına iye bolasız. Bul arqalı Siz hám Biz
            birgelikte súyikli ana tilimiz bolǵan Qaraqalpaq tilin jáne de
            rawajlandırıwǵa úlken úles qosqan bolamız!
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

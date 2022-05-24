import { FC } from "react";
import Shimmer from "../../UI/skeleton/Shimmer";
import SkeletonElement from "../../UI/skeleton/SkeletonElement";
//@ts-ignore
import styles from "./mainSkeleton.module.scss";

interface MainSkeletonProp {
  text: string;
}

const MainSceleton: FC<MainSkeletonProp> = ({ text }) => {
  return (
    <div className={`${styles.container} ${styles.sliders}`}>
      <div className={styles.popularBooks}>
        <div className={styles.topText}>
          <h3>{text}</h3>
        </div>

        <div className={styles.booksList}>
          <div className={`skeleton-wrapper`}>
            <div className="skeleton-article">
              <SkeletonElement type="img" />
              <SkeletonElement type="nameBook" />
              <SkeletonElement type="authorBook" />
            </div>
            <Shimmer />
          </div>

          <div className={`skeleton-wrapper `}>
            <div className="skeleton-article">
              <SkeletonElement type="img" />
              <SkeletonElement type="nameBook" />
              <SkeletonElement type="authorBook" />
            </div>
            <Shimmer />
          </div>

          <div className={`skeleton-wrapper  ${styles.skeletonFirst}`}>
            <div className="skeleton-article">
              <SkeletonElement type="img" />
              <SkeletonElement type="nameBook" />
              <SkeletonElement type="authorBook" />
            </div>
            <Shimmer />
          </div>

          <div className={`skeleton-wrapper  ${styles.skeletonSecond}`}>
            <div className="skeleton-article">
              <SkeletonElement type="img" />
              <SkeletonElement type="nameBook" />
              <SkeletonElement type="authorBook" />
            </div>
            <Shimmer />
          </div>

          <div className={`skeleton-wrapper ${styles.skeletonThird}`}>
            <div className="skeleton-article">
              <SkeletonElement type="img" />
              <SkeletonElement type="nameBook" />
              <SkeletonElement type="authorBook" />
            </div>
            <Shimmer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSceleton;
